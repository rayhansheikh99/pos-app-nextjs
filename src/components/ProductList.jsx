
import React from 'react'
import Product from './Product';

const ProductList = ({ products, searchResult, searchTxt }) => {
  return (
    <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2">
      {(searchResult?.length >=0 && searchTxt) ?
        <>
          {searchResult?.map((product, i) => {
            return <Product key={i} product={product} />;
          })}
        </> :
        <>
          {products.map((product, i) => {
            return <Product key={i} product={product} />;
          })}
        </>}
    </div>
  )
}

export default ProductList