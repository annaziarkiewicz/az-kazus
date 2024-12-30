export type Book = {
  id: number;
  title: string;
  cover: string;
  price: {
    value: number;
    currency: "PLN";
  };
};
