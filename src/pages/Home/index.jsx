import React, { Fragment } from 'react'
//import AboutEco from '../../components/AboutEco'
import FooterPage from '../../components/Footer'
import HeaderLayout from '../../components/Header'
import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
import UsePlatafotm from '../../components/UsePlataform'
// import WhyPlataform from '../../components/WhyPlataform'
import AboutEco from '../../components/AboutEco'
import AboutLeft from '../../components/AboutEco/AboutLeft'
import AboutRight from '../../components/AboutEco/AboutRight'
import AboutDownEco from '../../components/AboutEco/AboutDownEco'
import IntroEco from '../../components/Services/Components/IntroEco'
import PartnesSection from '../../components/Services/Components/PartnesSection'
import ContatoPage from '../../components/Contact'

const Home = () => {
  return (
    <Fragment >
      {/* <Navbar /> */}
      <HeaderLayout />
      <IntroEco />
      <AboutLeft />
      <AboutEco />
      <AboutRight />
      <AboutDownEco />
      <PartnesSection />
      <ContatoPage />
      {/* <Services /> */}
      {/* <UsePlatafotm /> */}
      {/* <WhyPlataform /> */}
      <FooterPage />
    </Fragment>
  )
}

export default Home