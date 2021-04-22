import React from 'react'
import data from '../../assets/products.json'
import Product from '../product'

const Products = () => {

    return <div>
        <table>
            <thead>
            <tr>
            <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
                
            </thead>
            <tbody>
                {data.length && data.map((p, i) => <Product key={i} product={p} />)}
            </tbody>
        </table>
          </div>
}

export default Products