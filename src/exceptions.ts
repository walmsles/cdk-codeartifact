/**
 * Exception thrown when Domain Name is too long
 */
export class DomainNameTooLong extends Error {
  constructor(msg:string = 'Domain name too long.  Must be no more than 50 characters in length.') {
    super(msg);
    Object.setPrototypeOf(this, DomainNameTooLong.prototype);
  }
}

/**
 * Exception thrown when Domain Name is not valid.
 */
export class DomainNameInvalid extends Error {
  constructor(msg:string = 'Domain name is not valid.  Name must contain lowercase letters, numbers and "-" characters only.') {
    super(msg);
    Object.setPrototypeOf(this, DomainNameInvalid.prototype);
  }
}

/**
 * Exception thrown when Repository Name is not valid
 */
export class RepositoryNameInvalid extends Error {
  constructor(msg:string = 'Repository name is not valid. Name must start with lowercase letter and contain only lowercase letters, numbers and "-" characters.') {
    super(msg);
    Object.setPrototypeOf(this, RepositoryNameInvalid.prototype);
  }
}

/**
 * Exception thrown when the Repository Name is too long
 */
export class RepositoryNameTooLong extends Error {
  constructor(msg:string = 'Repository name too long.  Must be no more than 100 characters in length.') {
    super(msg);
    Object.setPrototypeOf(this, RepositoryNameTooLong.prototype);
  }
}

/**
 * Exception thrown when too many external connections are listed in the Repository props.
 */
export class TooManyExternalConnections extends Error {
  constructor(msg:string = 'Too Many external connections.  Can only configure one external connection.') {
    super(msg);
    Object.setPrototypeOf(this, TooManyExternalConnections.prototype);
  }
}
