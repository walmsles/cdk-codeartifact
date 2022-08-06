const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Michael Walmsley (@walmsles)',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion: '2.35.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-codeartifact',
  repositoryUrl: 'https://github.com/walmsles/cdk-codeartifact',
  description: 'This is an AWS CDK Construct to create a new AWS Codeartifact Domain and one or more Repositories',
});
project.synth();