import React from 'react'
import { Product } from './Product'

export type Package = {
  id: string;
  name: string;
  description: string;
  products: Product[];
  price: number;
}
