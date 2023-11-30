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
    type: "GPS Receiver",
    brand: "Hub & Son",
    model: "One",
  },
];

export const resolvers = {
  Query: {
    products() {
      return mockedProducts;
    },
  },
};
