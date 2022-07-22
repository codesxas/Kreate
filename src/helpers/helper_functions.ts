import { ProductInterface } from "../interfaces";

export const getProductData = (imageData: any): Array<ProductInterface> => {
  const data = imageData.results.map((item: any) => setProductData(item));

  return data;
};

const setProductData = (item: any): ProductInterface => {
  const actual_price = priceGenerator();

  return {
    url: item.urls.regular,
    alt_description: item.alt_description,
    description: item.description,
    owner_name: item.user.username,
    actual_price,
    discounted_price: priceGenerator(actual_price),
  };
};

const priceGenerator = (existing_price: number | undefined = 0): number => {
  let min = 100;
  let max = existing_price ? existing_price : 1000;

  if (existing_price) {
    if (shouldGeneratePrice()) {
      return calcPrice(min, max - min + 1);
    } else {
      return 0;
    }
  }

  return calcPrice(min, max);
};

const shouldGeneratePrice = (): boolean => {
  const prob = Math.round(Math.random());
  return prob === 1;
};

const calcPrice = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};
