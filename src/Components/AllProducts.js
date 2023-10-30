import React from 'react'
import IndividualProduct from './IndividualProduct'
import { useFetch } from '../Hook/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux/action/productAction'

function AllProducts() {
  let data = useSelector((state)=>state)
  const dispatch = useDispatch()
const products = useFetch("https://fakestoreapi.com/products")
dispatch(setProducts(products));
  return (
    <div>
        <h4>all products</h4>
        <IndividualProduct/>

    </div>
  )
}

export default AllProducts