import { gql } from "@apollo/client";

export const GET_AD = (id) => gql`
  query GetAd {
    ad(id: ${ id }) {
      id
      type
      description
      score
      size
      height
      km
      color
      fabricant
      images {
        id
        url
        quality
      }
    }
  }
`;
