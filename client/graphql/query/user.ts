import { graphql } from "graphql";

export const verifyGoogleUserToken = graphql(
  `
    #graphql
    query VerifyGoogleUserToken($token: String!) {
      verifyGoogleToken(token: $token)
    }
  `
);
