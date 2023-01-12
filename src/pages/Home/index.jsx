import React, { Fragment } from 'react'
import AboutEco from '../../components/AboutEco'
import HeaderLayout from '../../components/Header'
import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
import WhyPlataform from '../../components/WhyPlataform'

const Home = () => {
  return (
    <Fragment >
      <Navbar />
      <HeaderLayout />
      <Services />
      <WhyPlataform />
      <AboutEco />
    </Fragment>
  )
}

export default Home