const mockedProducts = [
  {
    id: "1",
    type: "GPS Receiver",
    brand: "Texas Instruments",
    model: "F-235",
  },
  {
    id: "2",
    type: "GPS Receiver",
    brand: "U-Blox",
    model: "gh8372-fn",
  },
  {
    id: "3",
    type: "GPS Transmitter",
    brand: "Hub & Son",
    model: "One",
  },
];

interface ProductsOfTypeArgs {
  type: string;
}

export const resolvers = {
  Query: {
    async products() {
      return mockedProducts;
    },
    async productsOfType(_: unknown, args: ProductsOfTypeArgs) {
      return mockedProducts.filter((p) => p.type === args.type);
    },
  },
};
