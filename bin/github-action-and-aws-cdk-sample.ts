#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GithubActionAndAwsCdkSampleStack } from '../lib/github-action-and-aws-cdk-sample-stack';

const app = new cdk.App();
new GithubActionAndAwsCdkSampleStack(app, 'GithubActionAndAwsCdkSampleStack');
