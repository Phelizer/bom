export const typeDefs = `#graphql
  enum ProductType {
    GPS_Receiver
    Servo
  }

  interface Product {
    id: ID!
    type: ProductType!
    brand: String!
    model: String!
    manufacturerCountry: String
  }

  type GPSReceiver implements Product {
    id: ID!
    type: ProductType!
    brand: String!
    model: String!
    manufacturerCountry: String
    interfaces: [String!]
  }

  type Servo implements Product {
    id: ID!
    type: ProductType!
    brand: String!
    model: String!
    manufacturerCountry: String
    power: Float!
  }

  type Query {
    products: [Product!]
    productsBy(fieldName: String, fieldValue: String): [Product!]
  }
`;
