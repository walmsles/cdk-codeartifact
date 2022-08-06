import {
  DomainNameInvalid,
  DomainNameTooLong,
  RepositoryNameTooLong,
  RepositoryNameInvalid,
  TooManyExternalConnections,
} from '../src/exceptions';
import { ExternalRepository } from '../src/types';
import {
  validateDomainName,
  validateDomainNameLength,
  validateExternalConnections,
  validateRepoName,
  validateRepoNameLength,
} from '../src/validations';

test('valid domain names', () => {
  expect(validateDomainName('test-name')).toBeTruthy();
  expect(validateDomainName('aaaaaaaaaa12345678901234567890123456789012345678aa')).toBeTruthy();
  expect(validateDomainNameLength('aaaaaaaaaaaaa')).toBeTruthy();
});

test('invalid domain names', () =>{
  expect(() => {
    validateDomainNameLength('aaaaaaaaaa12345678901234567890123456789012345678aaaaaaa');
  }).toThrow(DomainNameTooLong);
  expect(() => {
    validateDomainName('-name000000000');
  }).toThrow(DomainNameInvalid);
  expect(() => {
    validateDomainName('DDame000000000');
  }).toThrow(DomainNameInvalid);
});

test('valid repository names', () => {
  expect(validateRepoName('test-name')).toBeTruthy();
  expect(validateRepoName('aaaaaaaaaa12345678901234567890123456789012345678aa')).toBeTruthy();
  expect(validateRepoNameLength('aaaaaaaaaaaaa')).toBeTruthy();
});

test('invalid Repository names', () =>{
  expect(() => {
    validateRepoNameLength('aaaaaaaaaa12345678901234567890123456789012345678aaaaaaaaaaaaaaaaa12345678901234567890123456789012345678aaaaaaa');
  }).toThrow(RepositoryNameTooLong);
  expect(() => {
    validateRepoName('-name000000000');
  }).toThrow(RepositoryNameInvalid);
  expect(() => {
    validateRepoName('DDam@@#e000000000');
  }).toThrow(RepositoryNameInvalid);
});

test('Test External Connections', () => {
  expect(validateExternalConnections([ExternalRepository.NPM])).toBeTruthy();
  expect(validateExternalConnections(undefined)).toBeTruthy();
});

test('Test too many External Connections', () => {
  expect(() => {
    validateExternalConnections([ExternalRepository.NPM, ExternalRepository.PYPI]);
  }).toThrow(TooManyExternalConnections);
});

