export type Item = {
  id: string;
  title: string;
  seller: Seller;
  price: number;
  currency_id: string;
  pictures?: Picture[];
  condition: string;
  thumbnail: string;
  category_id: string;
  sold_quantity: number;
  shipping: {
    free_shipping: boolean;
  };
};

export type Picture = {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
};

export type Seller = {
  id: number;
};

export type ProductsResponse = {
  results: Item[];
};

export type CurrencyResponse = {
  id: string;
  symbol: string;
  description: string;
  decimal_places: number;
};

export type CategoryResponse = {
  id: string;
  name: string;
  path_from_root: Category[];
};

export type ItemDescriptionResponse = {
  plain_text: string;
};

export type Category = {
  id: string;
  name: string;
};

export type FindUserResponse = {
  id: number;
  nickname: string;
};

export type FindItemResponse = Omit<Item, 'seller'> & {
  seller_id: number;
};
