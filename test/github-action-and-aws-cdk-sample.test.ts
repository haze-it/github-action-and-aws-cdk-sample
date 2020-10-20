import * as cdk from '@aws-cdk/core';
import * as GithubActionAndAwsCdkSample from '../lib';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new GithubActionAndAwsCdkSample.GithubActionAndAwsCdkSampleStack(app, 'MyTestStack');
  // THEN
  expect(!!stack).toBe(true);
});
