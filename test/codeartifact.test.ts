import { Stack } from 'aws-cdk-lib/';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CodeArtifact } from '../src/codeartifact';
import { CodeArtifactProps } from '../src/types';

test('construct tests', () => {
  const testDomainName = 'testDomainName';
  const testRepoName = 'testRepoName';

  const stack : Stack = new Stack();

  const stackProps : CodeArtifactProps = {
    domainName: testDomainName,
    repositories: [{
      repositoryName: testRepoName,
    }],
  };

  const codeartifact = new CodeArtifact(stack, 'testArtifact', stackProps);

  expect(codeartifact.props).toBe(stackProps);
  expect(codeartifact.repositories.length).toBe(1);
  expect(codeartifact.domain.domainName).toBe(testDomainName);

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::CodeArtifact::Domain', Match.objectLike({
    DomainName: testDomainName,
  }));
  template.hasResourceProperties('AWS::CodeArtifact::Repository', Match.objectLike({
    DomainName: testDomainName,
  }));
});

test('test multiple repos', () => {
  const testDomainName = 'testDomainName';
  const testRepoName1 = 'testRepoName1';
  const testRepoName2 = 'testRepoName2';

  const stack : Stack = new Stack();

  const stackProps : CodeArtifactProps = {
    domainName: testDomainName,
    repositories: [{
      repositoryName: testRepoName1,
    },
    {
      repositoryName: testRepoName2,
    }],
  };

  const codeartifact = new CodeArtifact(stack, 'testArtifact', stackProps);

  expect(codeartifact.repositories.length).toBe(2);

});