import React from 'react'
import Header from '../Components/Header/Header'
import Categories from '../Components/Categories/Categories'
import AllProducts from '../Components/AllProducts/AllProducts'
import Advertisment from '../Components/Advertisment/Advertisment'

export default function Index() {
  return (
    <>
      <Header />
      <Categories />
      <AllProducts />
      <Advertisment />
    </>
  )
}
