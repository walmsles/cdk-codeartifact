const { awscdk, DependencyType } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Michael Walmsley (@walmsles)',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion: '2.214.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-codeartifact',
  repositoryUrl: 'https://github.com/walmsles/cdk-codeartifact',
  keywords: ['aws-cdk', 'codeartifact'],
  description: 'This is an AWS CDK Construct to create a new AWS Codeartifact Domain and one or more Repositories',
  license: 'Apache-2.0',
  docgen: true,
  publishToPypi: {
    distName: 'cdk-codeartifact',
    module: 'cdk_artifact',
  },
  projenVersion: '0.95.6',
});

// Update jsii-pacmak to latest version for Python 3.12 support
project.addDevDeps('jsii-pacmak@^1.114.1');

project.addPeerDeps('constructs@^10.1.89');
project.addDevDeps('constructs@^10.1.89');
project.addDevDeps('aws-cdk-lib@^2');

project.synth();