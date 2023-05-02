export interface Subscription {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  additionalAddress?: string;
  postalCode: number;
  city: string;
  numTel: string;
  visitDates: Date[]; // add this line
  planName?: string;
  price?: number;
}
