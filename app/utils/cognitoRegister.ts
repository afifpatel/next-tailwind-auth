'use server'
import { CognitoUserAttribute, CognitoUserPool } from "amazon-cognito-identity-js";
import createUserPool from "./cognitoUserPool"

interface cognitoRegisterProps {
    username: string,
    password: string,
    familyName: string
}

export default async function cognitoRegister({username, password, familyName}:cognitoRegisterProps) {
   return new Promise(async (resolve, reject) => {
    const userPool: CognitoUserPool = await createUserPool();
    const attributeList: CognitoUserAttribute[] = [
        new CognitoUserAttribute({ Name: "email", Value: username }),
        new CognitoUserAttribute({ Name: "family_name", Value: familyName })
    ]
    userPool.signUp(username, password, attributeList, [], (err, result) => {
        if(err) {
            console.log("Cognito Register Error", err);
            reject(new Error(err.message||"Cognito Register Failed!"));
        }
        console.log("Cognito Registeration Result", result);
        const response = {
            userConfirmed: result?.userConfirmed,
            userSub: result?.userSub
        }
        // Own Database - here if we did not want to use Cognito DB and user our own DB to store users.
        resolve(response);
    })
   })
}