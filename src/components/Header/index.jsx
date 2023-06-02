import { Box, Typography } from '@mui/material';
import React from 'react'
import './styles.css'
import { Navbar } from '@material-tailwind/react';
import logo from '../../assets/logo-text.svg'
/* bg-[url('/src/assets/amazon.gif')] */
/* bg-[url('/src/assets/eco.gif')] */

const HeaderLayout = () => {
    return (
        <section class="text-gray-600 h-full bg-cover bg-[url('https://ecodots-media.s3.sa-east-1.amazonaws.com/uploads/ecodots.gif')]">
            <div class="bg-gradient-to-r from-black ">
                <div className="mx-auto max-w-7xl -4 sm:px-6">
                    <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start ml-20 lg:w-0 lg:flex-1">
                            <a href="#">
                                {/* <h1 className='text-white text-[24px] font-bold body-font'>Ecodots &copy;</h1> */}
                                <img
                                    className="w-[160px] sm:h-10"
                                    src={logo}

                                    alt="Ecodots" />
                            </a>
                        </div>

                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <div className='space-x-4'>
                                <a target='_blank'
                                    href="http://ecodots.com.br/auth/login"
                                    className="shadow-xs inline-flex shadow-xl text-sm items-center justify-center bg-[#1DB3A4] whitespace-nowrap rounded-md  px-10 py-2 font-medium text-white hover:text-grey-400 shadow-sm hover:bg-[#0E9384] hover:border-none"
                                >
                                    Login
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">

                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <div className=''>
                            <Box display="flex" flexDirection="column" className='typewriter-text'>

                                <h1 class="title-font sm:text-4xl text-3xl  font-bold text-gray-200 ">
                                    Ecodots a sustentabilidade ao
                                </h1>
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-200">
                                    alcance de todos!
                                </h1>
                            </Box>

                            <div className='flex flex-col w-[100%]'>
                                <Typography color="white" fontSize={22}>Transformamos resíduos em receita
                                </Typography>
                                <Typography color="white" fontSize={22}>com responsabilidade e rastreabilidade blockchain.
                                </Typography>
                                <Typography color="white" fontSize={22}> Gerenciamos emissões de GEE e desenvolvemos
                                </Typography>
                                <Typography color="white" fontSize={22}> projetos de Créditos de Carbono voltados à cadeia de reciclagem de resíduos!
                                </Typography>

                            </div>

                        </div>
                        <div class="flex mt-8 justify-start">

                            <a href="https://ecodots.com.br/auth/cadastro" className="inline-flex text-[14px] text-gray-200 bg-teal-500 border-0 py-4 px-12 focus:outline-none hover:bg-gray-200 hover:text-teal-500 rounded shadow-xl ">CADASTRE-SE</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderLayout;