import { CfnDomainProps } from 'aws-cdk-lib/aws-codeartifact';
import * as cdk from 'aws-cdk-lib/core';

export enum ExternalRepository {
  NPM = 'public:npmjs',
  PYPI = 'public:pypi',
  MAVEN_CENTRAL = 'public:msven-central',
  MAVEN_GOOGLE_ANDROID = 'public:maven-googleandroid',
  MAVEN_GRADLE_PLUGINS = 'public:maven-gradleplugins',
  MAVEN_COMMONSWARE = 'public:maven-commonsware',
  NUGET = 'public:nuget-org'
}

export interface RepositoryProps {
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
 * Properties for creating CodeArtifact repositories based on a domain
 */
export interface CodeArtifactProps extends CfnDomainProps {
  /**
   * a list of Repositories to create
   */
  readonly repositories?: RepositoryProps[];
}