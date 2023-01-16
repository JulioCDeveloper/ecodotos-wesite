import React, { Fragment } from 'react'
//import AboutEco from '../../components/AboutEco'
import FooterPage from '../../components/Footer'
import HeaderLayout from '../../components/Header'
import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
import UsePlatafotm from '../../components/UsePlataform'
//import WhyPlataform from '../../components/WhyPlataform'

const Home = () => {
  return (
    <Fragment >
      <Navbar />
      <HeaderLayout />
      <Services />
      <UsePlatafotm />
      {/* <WhyPlataform /> */}
      {/* <AboutEco /> */}
      <FooterPage />
    </Fragment>
  )
}

export default Home