# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeArtifact <a name="CodeArtifact" id="cdk-codeartifact.CodeArtifact"></a>

A Construct that will allow easy setup of an AWS CodeArtifact Repository within a domain.

#### Initializers <a name="Initializers" id="cdk-codeartifact.CodeArtifact.Initializer"></a>

```typescript
import { CodeArtifact } from 'cdk-codeartifact'

new CodeArtifact(scope: Construct, id: string, props: CodeArtifactProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-codeartifact.CodeArtifactProps">CodeArtifactProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-codeartifact.CodeArtifactProps">CodeArtifactProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-codeartifact.CodeArtifact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-codeartifact.CodeArtifact.isConstruct"></a>

```typescript
import { CodeArtifact } from 'cdk-codeartifact'

CodeArtifact.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.CodeArtifact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnDomain</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.props">props</a></code> | <code><a href="#cdk-codeartifact.CodeArtifactProps">CodeArtifactProps</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.repositories">repositories</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnRepository[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-codeartifact.CodeArtifact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-codeartifact.CodeArtifact.property.domain"></a>

```typescript
public readonly domain: CfnDomain;
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnDomain

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.CodeArtifact.property.props"></a>

```typescript
public readonly props: CodeArtifactProps;
```

- *Type:* <a href="#cdk-codeartifact.CodeArtifactProps">CodeArtifactProps</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="cdk-codeartifact.CodeArtifact.property.repositories"></a>

```typescript
public readonly repositories: CfnRepository[];
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnRepository[]

---


## Structs <a name="Structs" id="Structs"></a>

### CodeArtifactProps <a name="CodeArtifactProps" id="cdk-codeartifact.CodeArtifactProps"></a>

Properties for creating CodeArtifact repositories based on a domain.

#### Initializer <a name="Initializer" id="cdk-codeartifact.CodeArtifactProps.Initializer"></a>

```typescript
import { CodeArtifactProps } from 'cdk-codeartifact'

const codeArtifactProps: CodeArtifactProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifactProps.property.domainName">domainName</a></code> | <code>string</code> | A string that specifies the name of the requested domain. |
| <code><a href="#cdk-codeartifact.CodeArtifactProps.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | The key used to encrypt the domain. |
| <code><a href="#cdk-codeartifact.CodeArtifactProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>any</code> | The document that defines the resource policy that is set on a domain. |
| <code><a href="#cdk-codeartifact.CodeArtifactProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags to be applied to the domain. |
| <code><a href="#cdk-codeartifact.CodeArtifactProps.property.repositories">repositories</a></code> | <code><a href="#cdk-codeartifact.RepositoryProps">RepositoryProps</a>[]</code> | a list of Repositories to create. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-codeartifact.CodeArtifactProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

A string that specifies the name of the requested domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname)

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-codeartifact.CodeArtifactProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

The key used to encrypt the domain.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="cdk-codeartifact.CodeArtifactProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: any;
```

- *Type:* any

The document that defines the resource policy that is set on a domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-codeartifact.CodeArtifactProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags to be applied to the domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags)

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="cdk-codeartifact.CodeArtifactProps.property.repositories"></a>

```typescript
public readonly repositories: RepositoryProps[];
```

- *Type:* <a href="#cdk-codeartifact.RepositoryProps">RepositoryProps</a>[]

a list of Repositories to create.

---

### RepositoryProps <a name="RepositoryProps" id="cdk-codeartifact.RepositoryProps"></a>

#### Initializer <a name="Initializer" id="cdk-codeartifact.RepositoryProps.Initializer"></a>

```typescript
import { RepositoryProps } from 'cdk-codeartifact'

const repositoryProps: RepositoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of an upstream repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.description">description</a></code> | <code>string</code> | A text description of the repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.domainOwner">domainOwner</a></code> | <code>string</code> | The 12-digit account number of the AWS account that owns the domain that contains the repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.externalConnections">externalConnections</a></code> | <code>string[]</code> | An array of external connections associated with the repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>any</code> | The document that defines the resource policy that is set on a repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags to be applied to the repository. |
| <code><a href="#cdk-codeartifact.RepositoryProps.property.upstreams">upstreams</a></code> | <code>string[]</code> | A list of upstream repositories to associate with the repository. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="cdk-codeartifact.RepositoryProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of an upstream repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-codeartifact.RepositoryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A text description of the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description)

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="cdk-codeartifact.RepositoryProps.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The 12-digit account number of the AWS account that owns the domain that contains the repository.

It does not include dashes or spaces.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner)

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="cdk-codeartifact.RepositoryProps.property.externalConnections"></a>

```typescript
public readonly externalConnections: string[];
```

- *Type:* string[]

An array of external connections associated with the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="cdk-codeartifact.RepositoryProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: any;
```

- *Type:* any

The document that defines the resource policy that is set on a repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-codeartifact.RepositoryProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags to be applied to the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags)

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="cdk-codeartifact.RepositoryProps.property.upstreams"></a>

```typescript
public readonly upstreams: string[];
```

- *Type:* string[]

A list of upstream repositories to associate with the repository.

The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-upstreams](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-upstreams)

---



## Enums <a name="Enums" id="Enums"></a>

### ExternalRepository <a name="ExternalRepository" id="cdk-codeartifact.ExternalRepository"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.ExternalRepository.NPM">NPM</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.PYPI">PYPI</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.MAVEN_CENTRAL">MAVEN_CENTRAL</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.MAVEN_GOOGLE_ANDROID">MAVEN_GOOGLE_ANDROID</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.MAVEN_GRADLE_PLUGINS">MAVEN_GRADLE_PLUGINS</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.MAVEN_COMMONSWARE">MAVEN_COMMONSWARE</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.ExternalRepository.NUGET">NUGET</a></code> | *No description.* |

---

##### `NPM` <a name="NPM" id="cdk-codeartifact.ExternalRepository.NPM"></a>

---


##### `PYPI` <a name="PYPI" id="cdk-codeartifact.ExternalRepository.PYPI"></a>

---


##### `MAVEN_CENTRAL` <a name="MAVEN_CENTRAL" id="cdk-codeartifact.ExternalRepository.MAVEN_CENTRAL"></a>

---


##### `MAVEN_GOOGLE_ANDROID` <a name="MAVEN_GOOGLE_ANDROID" id="cdk-codeartifact.ExternalRepository.MAVEN_GOOGLE_ANDROID"></a>

---


##### `MAVEN_GRADLE_PLUGINS` <a name="MAVEN_GRADLE_PLUGINS" id="cdk-codeartifact.ExternalRepository.MAVEN_GRADLE_PLUGINS"></a>

---


##### `MAVEN_COMMONSWARE` <a name="MAVEN_COMMONSWARE" id="cdk-codeartifact.ExternalRepository.MAVEN_COMMONSWARE"></a>

---


##### `NUGET` <a name="NUGET" id="cdk-codeartifact.ExternalRepository.NUGET"></a>

---

