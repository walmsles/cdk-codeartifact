# cdk-codeartifact

CDK Construct to create an AWS Codeartifact repository.  Construct combines creating both Domain and one or more Repositories into the one simple construct and also provides an enumerated type for public external connections.

There are some additional validations built-in to ensure the construct will deploy correctly.

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
import { CodeArtifact, ExternalRepository } from 'cdk-codeartifact';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new CodeArtifact(this, id, {
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

