import { isObjWithField } from "../utils/typeguards.js";

const mockedProducts = [
  {
    id: "1",
    type: "GPS_Receiver",
    brand: "Texas Instruments",
    model: "F-235",
    interfaces: ["USB"],
  },
  {
    id: "2",
    type: "GPS_Receiver",
    brand: "U-Blox",
    model: "gh8372-fn",
    interfaces: ["USB-C"],
  },
  {
    id: "3",
    type: "Servo",
    brand: "Hub & Son",
    model: "One",
  },
];

interface ProductsByArgs {
  fieldName: string;
  fieldValue: string;
}

const isTypeOf = (type: string) => (obj: unknown) => {
  return isObjWithField("type", obj) && obj?.type === type;
};

export const resolvers = {
  GPSReceiver: {
    __isTypeOf: isTypeOf("GPS_Receiver"),
  },
  Servo: {
    __isTypeOf: isTypeOf("Servo"),
  },
  Query: {
    async products() {
      return mockedProducts;
    },
    async productsBy(_: unknown, args: ProductsByArgs) {
      return mockedProducts.filter(
        (p: Record<PropertyKey, unknown>) =>
          p[args.fieldName] === args.fieldValue
      );
    },
  },
};
