# cdk-codeartifact

CDK Construct to create an AWS Codeartifact repository.  Construct combines creating both Domain and one or more Repositories into one construct and also provides an enumerated type for public external connections.

There are some additional validations built-in to ensure the construct will deploy correctly:

- Naming convention checks for Codeartifact Domain Name.
- Naming convention checks for Codeartifact Repository Name.
- Passing in more than 1 external repository will throw an error - only 1 external repository is supported by Codeartifact.

## Breaking Changes - Migrating to V1.0.0

**Release 1.0.0 introduces breaking changes** so any project you have created using pre-1.0.0 of cdk-codeartifact should not be upgraded to this version.

Migrating to Version 1.0.0 will require any existing stacks to be removed before upgrading. The Cloudformation composition synthesized in V1.0.0 has a different composition, which means that Cloudformation will detect a change in how the stack is constructed and will try to delete the existing CodeArtifact domain and/or repositories.  This will not be possible if any artifacts have been pushed into the repositories.

The original **CodeArtifact** construct class has been deprecated and is replaced by the **Domain** class which better reflects what this code construct is doing.  For convenience, a **Repository** class has been added so that a stand-alone repository can also be created using this library.  The Repository class is a simple extension of the **CfnRepository** class at this stage without any additional functionality.

All Interface Property structures have been renamed to start with a capital "I" to conform to the usual dotnet convention for interface naming, this will assist when cross-compilation is enabled for this construct.





## External Connection Type

When adding an External Connection to your CodeArtifact repository ensure to make use of the `ExternalRepository` type to define the public external repository comnnection.

```typescript
export enum ExternalRepository {
  NPM = 'public:npmjs',
  PYPI = 'public:pypi',
  MAVEN_CENTRAL = 'public:msven-central',
  MAVEN_GOOGLE_ANDROID = 'public:maven-googleandroid',
  MAVEN_GRADLE_PLUGINS = 'public:maven-gradleplugins',
  MAVEN_COMMONSWARE = 'public:maven-commonsware',
  NUGET = 'public:nuget-org'
}
```

Currently this construct has been published as an NPM package.

## Installation and Usage

### Typescript

#### Installation

```bash
$ npm install --save cdk-codeartifact
```

#### Usage for CDK V2

```typescript
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Domain, ExternalRepository } from 'cdk-codeartifact';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new Domain(this, id, {
      domainName: 'test-domain',
      repositories: [{
        repositoryName: 'test-repo',
        externalConnections: [ExternalRepository.NPM],
      },
      {
        repositoryName: 'test-repo2',
        externalConnections: [ExternalRepository.PYPI],
      }],
    });
  }
}
```

