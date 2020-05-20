import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');

export class SampleAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, 'MyBucket', {
      encryption: s3.BucketEncryption.KMS_MANAGED
    });


    // The code that defines your stack goes here
  }
}
