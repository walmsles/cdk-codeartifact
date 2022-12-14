const { awscdk, DependencyType } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Michael Walmsley (@walmsles)',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion: '2.39.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-codeartifact',
  repositoryUrl: 'https://github.com/walmsles/cdk-codeartifact',
  keywords: ['aws-cdk', 'codeartifact'],
  description: 'This is an AWS CDK Construct to create a new AWS Codeartifact Domain and one or more Repositories',
  docgen: true,
  publishToPypi: {
    distName: 'cdk-codeartifact',
    module: 'cdk_artifact',
  },
});

project.addPeerDeps('constructs@^10.1.89');
project.addDevDeps('constructs@^10.1.89');
project.addDevDeps('aws-cdk-lib@^2');

project.synth();