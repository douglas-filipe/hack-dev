export interface PrizesProviderData {
  prizes: PrizesData[];
  getPrizes: () => Promise<void>;
}

export interface PrizesData {
  id: number;
  name: string;
  price: number;
  amout: number;
}
