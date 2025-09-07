import { CfnDomain, CfnRepository } from 'aws-cdk-lib/aws-codeartifact';
import { Construct } from 'constructs';
import { IDomainProps } from './domain';
import { IRepositoryProps } from './repository';
import * as validations from './validations';

/**
 * Props for Repository class
 *
 * @deprecated RepositoryProps is replaced by IRepositoryProps and will be removed in future major release 1.1.0
 */
export type RepositoryProps = IRepositoryProps;

/**
 * Props for CodeArtifact construct
 *
 * @deprecated CodeArtifactProps is replaced by IDomainProps and will be removed in future major release 1.1.0
 */
export type CodeArtifactProps = IDomainProps;

/**
 * A Construct that will allow easy setup of an AWS CodeArtifact Repository within a domain
 *
 * @deprecated CodeArtifact class is replaced by Domain and will be removed in future major release 1.1.0
 */
export class CodeArtifact extends Construct {
  readonly props: CodeArtifactProps;
  readonly repositories: CfnRepository[] = [];
  readonly domainInstance: CfnDomain;

  constructor(scope: Construct, id: string, props: CodeArtifactProps) {
    super(scope, id);
    this.props = props;

    validations.validateDomainNameLength(props.domainName);
    validations.validateDomainName(props.domainName);

    this.domainInstance = new CfnDomain(scope, props.domainName, props);

    if (props.repositories) {
      for (const repoProps of props.repositories) {
        validations.validateRepoNameLength(repoProps.repositoryName);
        validations.validateRepoName(repoProps.repositoryName);
        validations.validateExternalConnections(repoProps.externalConnections);

        const repoName = `${repoProps.repositoryName}`;
        const repo = new CfnRepository(scope, repoName, {
          domainName: this.props.domainName,
          ...repoProps,
        });

        repo.node.addDependency(this.domainInstance);
        this.repositories.push(repo);
      }
    }
  }
}