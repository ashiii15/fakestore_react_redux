import React from 'react'
import IndividualProduct from './IndividualProduct'
import { useFetch } from '../Hook/useFetch'

function AllProducts() {
const products = useFetch("https://fakestoreapi.com/products")
console.log(products);
  return (
    <div>
        <h4>all products</h4>
        <IndividualProduct/>

    </div>
  )
}

export default AllProducts