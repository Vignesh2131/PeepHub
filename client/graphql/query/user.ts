import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(
  `
    #graphql

    query VerifyGoogleUserToken($token: String!) {
      verifyGoogleToken(token: $token)
    }
  `
);
