# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeArtifact <a name="CodeArtifact" id="cdk-codeartifact.CodeArtifact"></a>

A Construct that will allow easy setup of an AWS CodeArtifact Repository within a domain.

#### Initializers <a name="Initializers" id="cdk-codeartifact.CodeArtifact.Initializer"></a>

```typescript
import { CodeArtifact } from 'cdk-codeartifact'

new CodeArtifact(scope: Construct, id: string, props: IDomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-codeartifact.IDomainProps">IDomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.CodeArtifact.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-codeartifact.IDomainProps">IDomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### ~~`toString`~~ <a name="toString" id="cdk-codeartifact.CodeArtifact.toString"></a>

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

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.CodeArtifact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.domainInstance">domainInstance</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnDomain</code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.props">props</a></code> | <code><a href="#cdk-codeartifact.IDomainProps">IDomainProps</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.CodeArtifact.property.repositories">repositories</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnRepository[]</code> | *No description.* |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="cdk-codeartifact.CodeArtifact.property.node"></a>

- *Deprecated:* CodeArtifact class is replaced by Domain and will be removed in future major release 1.1.0

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`domainInstance`~~<sup>Required</sup> <a name="domainInstance" id="cdk-codeartifact.CodeArtifact.property.domainInstance"></a>

- *Deprecated:* CodeArtifact class is replaced by Domain and will be removed in future major release 1.1.0

```typescript
public readonly domainInstance: CfnDomain;
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnDomain

---

##### ~~`props`~~<sup>Required</sup> <a name="props" id="cdk-codeartifact.CodeArtifact.property.props"></a>

- *Deprecated:* CodeArtifact class is replaced by Domain and will be removed in future major release 1.1.0

```typescript
public readonly props: IDomainProps;
```

- *Type:* <a href="#cdk-codeartifact.IDomainProps">IDomainProps</a>

---

##### ~~`repositories`~~<sup>Required</sup> <a name="repositories" id="cdk-codeartifact.CodeArtifact.property.repositories"></a>

- *Deprecated:* CodeArtifact class is replaced by Domain and will be removed in future major release 1.1.0

```typescript
public readonly repositories: CfnRepository[];
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnRepository[]

---


### Domain <a name="Domain" id="cdk-codeartifact.Domain"></a>

CodeArtifact Domain Construct - enables creation of a domain along with zero or more repositories.

Can be used to create just a domain by passing in no IDomainRepositoryProps elements

*Example*

```typescript
new Domain(this, 'MyDomain', {
  domainName: 'my-domain',
  repositories: [{
    repositoryName: 'my-repo',
    externalConnections: [ExternalRepository.NPM]
  }]
});
```


#### Initializers <a name="Initializers" id="cdk-codeartifact.Domain.Initializer"></a>

```typescript
import { Domain } from 'cdk-codeartifact'

new Domain(scope: Construct, id: string, props: IDomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Domain.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-codeartifact.IDomainProps">IDomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-codeartifact.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-codeartifact.Domain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.Domain.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-codeartifact.IDomainProps">IDomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.Domain.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-codeartifact.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-codeartifact.Domain.isConstruct"></a>

```typescript
import { Domain } from 'cdk-codeartifact'

Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-codeartifact.Domain.property.domainInstance">domainInstance</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnDomain</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Domain.property.props">props</a></code> | <code><a href="#cdk-codeartifact.IDomainProps">IDomainProps</a></code> | *No description.* |
| <code><a href="#cdk-codeartifact.Domain.property.repositories">repositories</a></code> | <code><a href="#cdk-codeartifact.Repository">Repository</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-codeartifact.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `domainInstance`<sup>Required</sup> <a name="domainInstance" id="cdk-codeartifact.Domain.property.domainInstance"></a>

```typescript
public readonly domainInstance: CfnDomain;
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnDomain

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.Domain.property.props"></a>

```typescript
public readonly props: IDomainProps;
```

- *Type:* <a href="#cdk-codeartifact.IDomainProps">IDomainProps</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="cdk-codeartifact.Domain.property.repositories"></a>

```typescript
public readonly repositories: Repository[];
```

- *Type:* <a href="#cdk-codeartifact.Repository">Repository</a>[]

---


### Repository <a name="Repository" id="cdk-codeartifact.Repository"></a>

CodeArtifact Repository Construct - extends the CfnRepository L1 construct to maintain logical naming within this library.

#### Initializers <a name="Initializers" id="cdk-codeartifact.Repository.Initializer"></a>

```typescript
import { Repository } from 'cdk-codeartifact'

new Repository(scope: Construct, id: string, props: CfnRepositoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Repository.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Repository.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnRepositoryProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-codeartifact.Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-codeartifact.Repository.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-codeartifact.Repository.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_codeartifact.CfnRepositoryProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.Repository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-codeartifact.Repository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdk-codeartifact.Repository.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#cdk-codeartifact.Repository.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#cdk-codeartifact.Repository.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#cdk-codeartifact.Repository.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#cdk-codeartifact.Repository.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#cdk-codeartifact.Repository.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#cdk-codeartifact.Repository.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#cdk-codeartifact.Repository.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#cdk-codeartifact.Repository.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#cdk-codeartifact.Repository.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#cdk-codeartifact.Repository.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#cdk-codeartifact.Repository.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#cdk-codeartifact.Repository.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#cdk-codeartifact.Repository.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#cdk-codeartifact.Repository.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="cdk-codeartifact.Repository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdk-codeartifact.Repository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdk-codeartifact.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="cdk-codeartifact.Repository.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="cdk-codeartifact.Repository.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="cdk-codeartifact.Repository.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="cdk-codeartifact.Repository.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="cdk-codeartifact.Repository.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="cdk-codeartifact.Repository.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="cdk-codeartifact.Repository.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="cdk-codeartifact.Repository.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-codeartifact.Repository.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="cdk-codeartifact.Repository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="cdk-codeartifact.Repository.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-codeartifact.Repository.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="cdk-codeartifact.Repository.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="cdk-codeartifact.Repository.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="cdk-codeartifact.Repository.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="cdk-codeartifact.Repository.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-codeartifact.Repository.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-codeartifact.Repository.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="cdk-codeartifact.Repository.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-codeartifact.Repository.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="cdk-codeartifact.Repository.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="cdk-codeartifact.Repository.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="cdk-codeartifact.Repository.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="cdk-codeartifact.Repository.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="cdk-codeartifact.Repository.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="cdk-codeartifact.Repository.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="cdk-codeartifact.Repository.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="cdk-codeartifact.Repository.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="cdk-codeartifact.Repository.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="cdk-codeartifact.Repository.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="cdk-codeartifact.Repository.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="cdk-codeartifact.Repository.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="cdk-codeartifact.Repository.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="cdk-codeartifact.Repository.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-codeartifact.Repository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-codeartifact.Repository.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#cdk-codeartifact.Repository.isCfnResource">isCfnResource</a></code> | Check whether the given object is a CfnResource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-codeartifact.Repository.isConstruct"></a>

```typescript
import { Repository } from 'cdk-codeartifact'

Repository.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.Repository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="cdk-codeartifact.Repository.isCfnElement"></a>

```typescript
import { Repository } from 'cdk-codeartifact'

Repository.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.Repository.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="cdk-codeartifact.Repository.isCfnResource"></a>

```typescript
import { Repository } from 'cdk-codeartifact'

Repository.isCfnResource(x: any)
```

Check whether the given object is a CfnResource.

###### `x`<sup>Required</sup> <a name="x" id="cdk-codeartifact.Repository.isCfnResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-codeartifact.Repository.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-codeartifact.Repository.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#cdk-codeartifact.Repository.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#cdk-codeartifact.Repository.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#cdk-codeartifact.Repository.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#cdk-codeartifact.Repository.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#cdk-codeartifact.Repository.property.attrArn">attrArn</a></code> | <code>string</code> | When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.attrDomainName">attrDomainName</a></code> | <code>string</code> | When you pass the logical ID of this resource, the function returns the domain name that contains the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.attrDomainOwner">attrDomainOwner</a></code> | <code>string</code> | When you pass the logical ID of this resource, the function returns the 12-digit account number of the AWS account that owns the domain that contains the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.attrName">attrName</a></code> | <code>string</code> | When you pass the logical ID of this resource, the function returns the name of the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#cdk-codeartifact.Repository.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain that contains the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of an upstream repository. |
| <code><a href="#cdk-codeartifact.Repository.property.description">description</a></code> | <code>string</code> | A text description of the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.domainOwner">domainOwner</a></code> | <code>string</code> | The 12-digit account number of the AWS account that owns the domain that contains the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.externalConnections">externalConnections</a></code> | <code>string[]</code> | An array of external connections associated with the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>any</code> | The document that defines the resource policy that is set on a repository. |
| <code><a href="#cdk-codeartifact.Repository.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags to be applied to the repository. |
| <code><a href="#cdk-codeartifact.Repository.property.upstreams">upstreams</a></code> | <code>string[]</code> | A list of upstream repositories to associate with the repository. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-codeartifact.Repository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="cdk-codeartifact.Repository.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="cdk-codeartifact.Repository.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-codeartifact.Repository.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="cdk-codeartifact.Repository.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="cdk-codeartifact.Repository.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="cdk-codeartifact.Repository.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="cdk-codeartifact.Repository.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the repository.

---

##### `attrDomainName`<sup>Required</sup> <a name="attrDomainName" id="cdk-codeartifact.Repository.property.attrDomainName"></a>

```typescript
public readonly attrDomainName: string;
```

- *Type:* string

When you pass the logical ID of this resource, the function returns the domain name that contains the repository.

---

##### `attrDomainOwner`<sup>Required</sup> <a name="attrDomainOwner" id="cdk-codeartifact.Repository.property.attrDomainOwner"></a>

```typescript
public readonly attrDomainOwner: string;
```

- *Type:* string

When you pass the logical ID of this resource, the function returns the 12-digit account number of the AWS account that owns the domain that contains the repository.

---

##### `attrName`<sup>Required</sup> <a name="attrName" id="cdk-codeartifact.Repository.property.attrName"></a>

```typescript
public readonly attrName: string;
```

- *Type:* string

When you pass the logical ID of this resource, the function returns the name of the repository.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-codeartifact.Repository.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-codeartifact.Repository.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain that contains the repository.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="cdk-codeartifact.Repository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of an upstream repository.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-codeartifact.Repository.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A text description of the repository.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="cdk-codeartifact.Repository.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The 12-digit account number of the AWS account that owns the domain that contains the repository.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="cdk-codeartifact.Repository.property.externalConnections"></a>

```typescript
public readonly externalConnections: string[];
```

- *Type:* string[]

An array of external connections associated with the repository.

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="cdk-codeartifact.Repository.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: any;
```

- *Type:* any

The document that defines the resource policy that is set on a repository.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="cdk-codeartifact.Repository.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags to be applied to the repository.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="cdk-codeartifact.Repository.property.upstreams"></a>

```typescript
public readonly upstreams: string[];
```

- *Type:* string[]

A list of upstream repositories to associate with the repository.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.Repository.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="cdk-codeartifact.Repository.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IDomainProps <a name="IDomainProps" id="cdk-codeartifact.IDomainProps"></a>

- *Implemented By:* <a href="#cdk-codeartifact.IDomainProps">IDomainProps</a>

Properties for creating CodeArtifact Domain using the Domain construct.

DomainProps extends the L1 CfnDomainProps interface to ensure all CloudFormation capabilities are retained


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.IDomainProps.property.domainName">domainName</a></code> | <code>string</code> | A string that specifies the name of the requested domain. |
| <code><a href="#cdk-codeartifact.IDomainProps.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | The key used to encrypt the domain. |
| <code><a href="#cdk-codeartifact.IDomainProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>object \| aws-cdk-lib.IResolvable</code> | The document that defines the resource policy that is set on a domain. |
| <code><a href="#cdk-codeartifact.IDomainProps.property.repositories">repositories</a></code> | <code><a href="#cdk-codeartifact.IDomainRepositoryProps">IDomainRepositoryProps</a>[]</code> | a list of Repositories to create. |
| <code><a href="#cdk-codeartifact.IDomainProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags to be applied to the domain. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-codeartifact.IDomainProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

A string that specifies the name of the requested domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname)

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-codeartifact.IDomainProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

The key used to encrypt the domain.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="cdk-codeartifact.IDomainProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: object | IResolvable;
```

- *Type:* object | aws-cdk-lib.IResolvable

The document that defines the resource policy that is set on a domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument)

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="cdk-codeartifact.IDomainProps.property.repositories"></a>

```typescript
public readonly repositories: IDomainRepositoryProps[];
```

- *Type:* <a href="#cdk-codeartifact.IDomainRepositoryProps">IDomainRepositoryProps</a>[]

a list of Repositories to create.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-codeartifact.IDomainProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags to be applied to the domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags)

---

### IDomainRepositoryProps <a name="IDomainRepositoryProps" id="cdk-codeartifact.IDomainRepositoryProps"></a>

- *Implemented By:* <a href="#cdk-codeartifact.IDomainRepositoryProps">IDomainRepositoryProps</a>

Prop definition for DomainRepository - when creating Domain and Repository together using the combined Domain construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of an upstream repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.description">description</a></code> | <code>string</code> | A text description of the repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.domainOwner">domainOwner</a></code> | <code>string</code> | The 12-digit account number of the AWS account that owns the domain that contains the repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.externalConnections">externalConnections</a></code> | <code>string[]</code> | An array of external connections associated with the repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>object \| aws-cdk-lib.IResolvable</code> | The document that defines the resource policy that is set on a repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | A list of tags to be applied to the repository. |
| <code><a href="#cdk-codeartifact.IDomainRepositoryProps.property.upstreams">upstreams</a></code> | <code>string[]</code> | A list of upstream repositories to associate with the repository. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="cdk-codeartifact.IDomainRepositoryProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of an upstream repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-repositoryname)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-codeartifact.IDomainRepositoryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A text description of the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-description)

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="cdk-codeartifact.IDomainRepositoryProps.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The 12-digit account number of the AWS account that owns the domain that contains the repository.

It does not include dashes or spaces.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-domainowner)

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="cdk-codeartifact.IDomainRepositoryProps.property.externalConnections"></a>

```typescript
public readonly externalConnections: string[];
```

- *Type:* string[]

An array of external connections associated with the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-externalconnections)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="cdk-codeartifact.IDomainRepositoryProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: object | IResolvable;
```

- *Type:* object | aws-cdk-lib.IResolvable

The document that defines the resource policy that is set on a repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-permissionspolicydocument)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-codeartifact.IDomainRepositoryProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

A list of tags to be applied to the repository.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#cfn-codeartifact-repository-tags)

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="cdk-codeartifact.IDomainRepositoryProps.property.upstreams"></a>

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

Enumeration providing Typed access to ExternalRepository Names which for L1 construct are magic strings.

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

