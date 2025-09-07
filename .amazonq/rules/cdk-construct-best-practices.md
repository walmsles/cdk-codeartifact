# CDK Construct Best Practices

## Naming Conventions
- Use PascalCase for construct class names
- Use camelCase for property names
- Prefix interfaces with 'I' (e.g., `IMyConstructProps`)
- Use descriptive names that indicate the construct's purpose

## Interface Design
- Always define props interfaces for construct parameters
- Make required properties explicit in the interface
- Use readonly properties in interfaces
- Extend AWS L1 construct props when wrapping CloudFormation resources
- Provide sensible defaults for optional properties

## Validation
- Validate input parameters in the constructor
- Throw meaningful custom exceptions for validation failures
- Validate AWS resource naming conventions early
- Check for conflicting or incompatible property combinations

## Error Handling
- Create custom exception classes that extend Error
- Use descriptive error messages that guide users to solutions
- Set proper prototype chains for custom exceptions
- Validate constraints that would cause CloudFormation deployment failures

## Resource Management
- Use proper construct scoping and unique IDs
- Set up resource dependencies explicitly with `node.addDependency()`
- Expose important resources as public readonly properties
- Use consistent resource naming patterns

## Documentation
- Add JSDoc comments to all public classes and methods
- Document breaking changes clearly in README
- Provide migration guides for major version changes
- Include usage examples in documentation

## Testing
- Write unit tests for validation logic
- Test error conditions and edge cases
- Use snapshot testing for CloudFormation template generation
- Test construct composition and dependencies

## CDK ID Construction
- Never change how construct IDs are generated in minor/patch releases
- Changing ID patterns forces CloudFormation resource replacement
- Use consistent ID naming patterns across construct versions
- Document ID construction patterns in breaking change notes
- Consider ID generation as part of the public API contract

## Backwards Compatibility
- Deprecate rather than immediately remove old APIs
- Provide clear migration paths
- Use semantic versioning appropriately
- Maintain deprecated code until next major version
