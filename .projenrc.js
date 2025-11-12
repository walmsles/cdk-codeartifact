const { awscdk, javascript } = require('projen');
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
  projenVersion: '0.98.10',
  packageManager: javascript.NodePackageManager.NPM,
  projenTokenSecret: 'GITHUB_TOKEN',
});

// Upgrade jsii dependencies to resolve compatibility issues
project.addDevDeps('jsii-rosetta@~5.7.0');
project.addDevDeps('jsii-docgen@^10.11.0');

project.synth();