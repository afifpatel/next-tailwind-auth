'use server'

import {CognitoUserPool} from "amazon-cognito-identity-js"

const userPoolId: string | undefined = process.env.COGNITO_ID
const clientId: string | undefined = process.env.COGNITO_CLIENT_ID

if (!userPoolId||!clientId) {
  throw new Error('COGNITO ENV IS NOT DEFINED!');
}

const poolData: {UserPoolId: string, ClientId: string} = {
  UserPoolId: userPoolId,
  ClientId: clientId
}

async function createUserPool(): Promise<CognitoUserPool> {
    return new CognitoUserPool(poolData);
}

export default createUserPool;