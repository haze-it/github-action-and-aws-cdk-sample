#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GithubActionAndAwsCdkSampleStack } from '../lib';

const app = new cdk.App();
new GithubActionAndAwsCdkSampleStack(app, 'GithubActionAndAwsCdkSampleStack');
