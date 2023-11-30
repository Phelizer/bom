export const typeDefs = `#graphql
  type Product {
    id: ID!
    type: String!
    brand: String!
    model: String!
  }

  type Query {
    products: [Product!]
  }
`;
