import gql from "graphql-tag";

const GET_TODO = gql`
  {
    allPosts(orderBy: updatedAt_DESC, first: 7){
       id
       title
       user {
        id
        name
       }
    }
  }
`;

export { GET_TODO }