const ProducModel = {
  id: '66a405cb-ec37-4a6b-b91f-a2c979002ba6',
  name: 'Bolo de Laranja',
  value: 38.5,
  description: 'Bolo de Laranja sem cobertura',
  image: 'iVBORw0KGgoAAAANSUhEUgAAAZAAAADSCAMAAABThmYtAAAAXVB',
};
const DeliverymanModel = {
  id: 'ac105d65-7c26-479c-94a3-cdac214016d2',
  name: 'Pedro Bastos',
};

const OrderModel = {
  id: 'ad8459be-00a3-4d4b-9cb7-aea0063d5116',
  products: [
    {
      id: '66a405cb-ec37-4a6b-b91f-a2c979002ba6',
      name: 'Bolo de Laranja',
      value: 38.5,
    },
  ],
  address: 'Rua Dionéis, 25 - Rocinha - RJ',
};

const DeliveryModel = {
  id: '117983ee-54f5-41d5-84ad-5c0a8f51fc2d',
  order: {
    id: 'ad8459be-00a3-4d4b-9cb7-aea0063d5116',
    products: [
      {
        id: '66a405cb-ec37-4a6b-b91f-a2c979002ba6',
        name: 'Bolo de Laranja',
        value: 38.5,
      },
    ],
    address: 'Rua Dionéis, 25 - Rocinha - RJ',
  },
  deliveryman: {
    id: 'ac105d65-7c26-479c-94a3-cdac214016d2',
    name: 'Pedro Bastos',
  },
};

// 1 Order => n Products
// 1 Delivery => 1 Order
// 1 Delivery => 1 Deliveryman

const models = {
  ProducModel,
  DeliverymanModel,
  OrderModel,
  DeliveryModel,
};

export default models;
