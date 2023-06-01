import { Box, Typography } from '@mui/material';
import React from 'react'
import './styles.css'
/* bg-[url('/src/assets/amazon.gif')] */
/* bg-[url('/src/assets/eco.gif')] */

const HeaderLayout = () => {
    return (

        <section class="text-gray-600 h-full bg-cover bg-[url('https://ecodots-media.s3.sa-east-1.amazonaws.com/uploads/ecodots.gif')]">

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
        </section>
    )
}

export default HeaderLayout;