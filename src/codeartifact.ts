import { CfnDomain, CfnRepository } from 'aws-cdk-lib/aws-codeartifact';
import { Construct } from 'constructs';
import { CodeArtifactProps } from './types';
import * as validations from './validations';

/**
 * A Construct that will allow easy setup of an AWS CodeArtifact Repository within a domain
 */
export class CodeArtifact extends Construct {
  readonly props : CodeArtifactProps;
  readonly domain : CfnDomain;
  readonly repositories: CfnRepository[] = [];

  constructor(scope: Construct, id: string, props: CodeArtifactProps) {
    super(scope, id);
    this.props = props;

    validations.validateDomainNameLength(props.domainName);
    validations.validateDomainName(props.domainName);

    this.domain = new CfnDomain(scope, props.domainName, props);

    if (props.repositories) {
      for (const repoProps of props.repositories) {
        validations.validateRepoNameLength(repoProps.repositoryName);
        validations.validateRepoName(repoProps.repositoryName);
        validations.validateExternalConnections(repoProps.externalConnections);

        const repo = new CfnRepository(scope, repoProps.repositoryName, {
          domainName: this.props.domainName,
          ...repoProps,
        });

        repo.node.addDependency(this.domain);
        this.repositories.push(repo);
      }
    }
  }

}
