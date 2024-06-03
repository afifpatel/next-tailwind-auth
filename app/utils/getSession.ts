import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession } from "amazon-cognito-identity-js";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, Session, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import createUserPool from "./cognitoUserPool";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials?: Record<string, string>){
                if(!credentials || !credentials.username || !credentials.password) {
                    throw new Error('Username and password are not defined correctly');
                }
                const userpool: CognitoUserPool = await createUserPool();
                const cognitoUser: CognitoUser = new CognitoUser({
                    Username: credentials.username,
                    Pool: userpool
                });
                const authenticationDetails: AuthenticationDetails = new AuthenticationDetails({
                    Username: credentials.username,
                    Password: credentials.password
                });
                return new Promise((resolve, reject) => {
                   cognitoUser.authenticateUser(authenticationDetails, {
                        onSuccess: (result: CognitoUserSession) => {
                            console.log("Cognito Login Success: ", result);
                            resolve({
                                id: credentials.username,
                                email: credentials.username,
                            });
                        },
                        onFailure: (err) => {
                            console.log("Cognito Login Failure: ", err);
                            if(err.code==='UserNotConfirmedException') {
                                resolve({
                                    id: credentials.username,
                                    email: "NOTVERIFIED",
                                })
                            }
                            reject(new Error(err.message)||"Cognito Email Auth Failed!");
                        }
                });
            });}
        })
    ],
    pages: {
        signIn: '/login'
    }
}

export function getSession(...args:[GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []){
    return getServerSession(...args, authOptions);
}