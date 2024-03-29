import React from 'react';
import { Card } from 'antd';
import { popularProducts } from '../content/data'; // Assuming this import is necessary
const { Meta } = Card;

const SearchItem = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {popularProducts.map(product => (
      <Card
        key={product.id}
        style={{ width: 200, margin: "20px" }}
        cover={<img alt="example" src={product.img} 
        style={{ width: "100%", height: "auto", marginBottom: "1rem" }} />}
      >
        <Meta
          description={`Price: ${product.price}`}
        />
      </Card>
    ))}
  </div>
);

export default SearchItem;
