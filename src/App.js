import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import routes from './routes'

export default function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Navbar />
      {router}
      <Footer />
    </>
  )
}
