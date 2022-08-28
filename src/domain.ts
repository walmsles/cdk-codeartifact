import * as cdk from 'aws-cdk-lib';
import { CfnDomain } from 'aws-cdk-lib/aws-codeartifact';
import { Construct } from 'constructs';
import { Repository } from './repository';
import * as validations from './validations';

/**
 * Prop definition for DomainRepository - when creating Domain and Repository together using the combined Domain construct
 */
export interface IDomainRepositoryProps {
  /**
   * The name of an upstream repository.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname
   */
  readonly repositoryName: string;
  /**
   * A text description of the repository.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description
   */
  readonly description?: string;
  /**
   * The 12-digit account number of the AWS account that owns the domain that contains the repository. It does not include dashes or spaces.
   *
   * @link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner
   */
  readonly domainOwner?: string;
  /**
   * An array of external connections associated with the repository.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections
   */
  readonly externalConnections?: string[];
  /**
   * The document that defines the resource policy that is set on a repository.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument
   */
  readonly permissionsPolicyDocument?: any | cdk.IResolvable;
  /**
   * A list of tags to be applied to the repository.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags
   */
  readonly tags?: cdk.CfnTag[];
  /**
   * A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html) .
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-upstreams
   */
  readonly upstreams?: string[];
}

/**
 * Properties for creating CodeArtifact Domain using the Domain contrstruct
 *
 * DomainProps extends the L1 CfnDomainProps interface to ensure all CloudFormation capabilities are retained
 *
 */
export interface IDomainProps {
  /**
   * A string that specifies the name of the requested domain.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname
   */
  readonly domainName: string;
  /**
   * The key used to encrypt the domain.
   *
   * @link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey
   */
  readonly encryptionKey?: string;
  /**
   * The document that defines the resource policy that is set on a domain.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument
   */
  readonly permissionsPolicyDocument?: any | cdk.IResolvable;
  /**
   * A list of tags to be applied to the domain.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags
   */
  readonly tags?: cdk.CfnTag[];
  /**
   * a list of Repositories to create
   */
  readonly repositories?: IDomainRepositoryProps[];
}


/**
 * CodeArtifact Domain Construct - enables creation of a domain along with zero or more Repositories.
 *
 * Can be used to create just a domain by passing in no IDomainRepositoryProp elements
 *
 */
export class Domain extends Construct {
  readonly props : IDomainProps;
  readonly repositories: Repository[] = [];
  readonly domainInstance : CfnDomain;

  constructor(scope: Construct, id: string, props: IDomainProps) {
    super(scope, id);
    this.props = props;

    validations.validateDomainNameLength(props.domainName);
    validations.validateDomainName(props.domainName);

    this.domainInstance = new CfnDomain(this, props.domainName, props);

    if (props.repositories) {
      for (const repoProps of props.repositories) {
        validations.validateRepoNameLength(repoProps.repositoryName);
        validations.validateRepoName(repoProps.repositoryName);
        validations.validateExternalConnections(repoProps.externalConnections);

        const repoName = `${repoProps.repositoryName}`;
        const repo = new Repository(this, repoName, {
          domainName: this.props.domainName,
          ...repoProps,
        });

        repo.node.addDependency(this.domainInstance);
        this.repositories.push(repo);
      }
    }
  }

}
