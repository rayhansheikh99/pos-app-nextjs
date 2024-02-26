
import React from 'react'
import Product from './Product';

const ProductList = ({products}) => {
  return (
    <div className="grid grid-cols-5 gap-2">
         {products.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  )
}

export default ProductList