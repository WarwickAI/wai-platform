/* Amplify Params - DO NOT EDIT
	API_WAIPLATFORM_GRAPHQLAPIIDOUTPUT
	API_WAIPLATFORM_USERTABLE_ARN
	API_WAIPLATFORM_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk');

const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  const date = new Date();

  if (event.request.userAttributes.sub) {
    console.log(event.request.userAttributes);
    const params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        _lastChangedAt: { N: `${date.getTime()}` },
        _version: { N: '1' },
        email: { S: event.request.userAttributes.email },
        username: { S: event.userName },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() }
      },
      TableName: process.env.API_WAIPLATFORM_USERTABLE_NAME
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
