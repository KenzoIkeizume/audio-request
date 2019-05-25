import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:5b028a7a-dcf8-4ab7-bae0-a063a4db7cfd',
  })
});

export const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'store-audios-request' }
});