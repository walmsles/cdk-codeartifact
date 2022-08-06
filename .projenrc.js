const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Michael Walmsley (@walmsles)',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  version: '0.0.3',
  jsiiReleaseVersion: '0.0.3',
  cdkVersion: '2.35.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-codeartifact',
  repositoryUrl: 'https://github.com/walmsles/cdk-codeartifact',
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();