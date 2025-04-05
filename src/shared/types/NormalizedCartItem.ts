export type NormalizedCartItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};
export type CartInfo = {
  totalAmount: number;
  items: NormalizedCartItem[];
};
