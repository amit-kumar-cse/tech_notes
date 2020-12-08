## Types

object types

```typescript
const product: {
                   id: string;
                   price: number;
                   tags: string[];
                   details: {
                       title: string;
                       description: string;
                   }
               } = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

//Though such an expression is not required due to type inference.

```
