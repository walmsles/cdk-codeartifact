import { CfnRepository, CfnRepositoryProps } from 'aws-cdk-lib/aws-codeartifact';
import * as constructs from 'constructs';

/**
 * Create type alias for CfnRepositoryProps
 */
export type IRepositoryProps = CfnRepositoryProps;

/**
 * CodeArtifact Repository Construct - extends the CfnRepository L1 construct to maintain logical naming within this library.
 */
export class Repository extends CfnRepository {
  constructor(scope: constructs.Construct, id: string, props: CfnRepositoryProps) {
    super(scope, id, props);
  }
}