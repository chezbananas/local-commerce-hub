import { ObjectId } from "mongodb";

export interface businessCollection {
  _id: ObjectId;
  businessName: string;
  address: string;
  phone: number;
  menuItems: Array<Record<string, number>>; // array of {name: price}
}
