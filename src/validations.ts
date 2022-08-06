import {
  DomainNameInvalid,
  DomainNameTooLong,
  RepositoryNameInvalid,
  RepositoryNameTooLong,
  TooManyExternalConnections,
} from './exceptions';

export function validateDomainName(name: string) : boolean {
  const regex = /^[a-z][a-z0-9\-]{0,48}[a-z0-9]{0,2}$/;

  if (!regex.test(name)) {
    throw new DomainNameInvalid();
  }

  return true;
}

export function validateDomainNameLength(name: string) : boolean {
  if (name.length > 50) {
    throw new DomainNameTooLong();
  }

  return true;
}

export function validateRepoNameLength(name: string) : boolean {
  if (name.length > 100) {
    throw new RepositoryNameTooLong();
  }

  return true;
}

export function validateRepoName(name: string): boolean {
  const regex = /^[a-z][a-z0-9\-]{0,48}[a-z0-9]{0,2}$/;

  if (!regex.test(name)) {
    throw new RepositoryNameInvalid();
  }

  return true;
}

export function validateExternalConnections(connections : string[] | undefined) {
  if (connections && connections.length > 1) {
    throw new TooManyExternalConnections();
  }

  return true;
}
