import { CfnDomain, CfnRepository } from 'aws-cdk-lib/aws-codeartifact';
import { Construct } from 'constructs';
import { CodeArtifactProps } from './types';

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


    this.domain = new CfnDomain(scope, props.domainName, props);

    if (props.repositories) {
      for (const repoProps of props.repositories) {
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