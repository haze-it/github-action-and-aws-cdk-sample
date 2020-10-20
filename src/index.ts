import * as config from 'config';
import { APIGatewayProxyEvent } from 'aws-lambda';

interface LambdaApiResponse {
  statusCode: number,
  body: string
};

interface BodyResponse {
  result: string
}

export async function handler(event: APIGatewayProxyEvent): Promise<LambdaApiResponse> {
  console.log("TEST");

  // 好きな処理を書いてね

  const body: BodyResponse = { result: 'SUCCESS' };

  // handlerの返却値は { statusCode: number, body: string } である必要があります。
  // 形式に沿わない場合は「Lambda returned empty body! Invalid lambda response received: Invalid API Gateway Response Keys」と怒られます
  const response: LambdaApiResponse = { statusCode: 200, body: JSON.stringify(body) };
  return response;
}