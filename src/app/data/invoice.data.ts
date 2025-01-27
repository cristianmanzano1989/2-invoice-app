export const invoiceData = {
  id: 1,
  name: 'Office Supplies Invoice',
  client: {
    name: 'John',
    lastname: 'Doe',
    address: {
      country: 'United States',
      city: 'New York',
      street: 'Broadway',
      number: 123,
    },
  },
  company: {
    name: 'Tech Solutions Inc.',
    fiscalNumber: 123456789,
  },
  items: [
    {
      id: 1,
      product: 'Laptop',
      price: 1200.0,
      quantity: 2,
    },
    {
      id: 2,
      product: 'Mouse',
      price: 25.0,
      quantity: 5,
    },
    {
      id: 3,
      product: 'Monitor',
      price: 300.0,
      quantity: 3,
    },
  ],
  total: 0,
};
