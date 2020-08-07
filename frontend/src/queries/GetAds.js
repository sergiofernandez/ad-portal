import { gql } from "@apollo/client";

export const GET_ADS = gql`
  query GetAds {
    ads(minScore: 40) {
      id
      type
      score
      description
      images {
        id
        url      
      }
    }
  }
`;
