import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
import apigateway = require('@aws-cdk/aws-apigateway');

export class GithubActionAndAwsCdkSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const env = process.env.ENV || 'local';

    // Lambda
    const sampleLambda = new lambda.Function(this, 'sampleLambda', {
      runtime    : lambda.Runtime.NODEJS_12_X,
      handler    : 'index.handler',
      code       : lambda.Code.asset('src'),
      timeout    : cdk.Duration.seconds(30),
      environment: {
        ENV     : env,
        NODE_ENV: env
      }
    });
    // コールドスタート対応
    // https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-lambda.Version.html#provisionedconcurrentexecutions
    sampleLambda.currentVersion.addAlias('VERSION_NAME', {
      provisionedConcurrentExecutions: 2
    });

    // API Gateway
    const sampleLambdaApi = new apigateway.RestApi(this, 'sampleLambdaApi', {
      restApiName: 'sampleLambdaApi'
    });

    const sampleLambdaResource = sampleLambdaApi.root.addResource('test-path');
    const sampleLambdaIntegration = new apigateway.LambdaIntegration(sampleLambda);
    sampleLambdaResource.addMethod('GET', sampleLambdaIntegration);
  }
}
const app = new cdk.App();
new GithubActionAndAwsCdkSampleStack(app, 'GithubActionAndAwsCdkSampleStack');
app.synth();

