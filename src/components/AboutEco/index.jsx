import React from 'react'
import img2 from '../../assets/about-img/4.svg'
import { Box, Typography } from '@mui/material'

const AboutEco = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <Box display="flex" flexDirection="column">
                        <Typography fontSize={40} color={'black'}>Blockchain para rastreabilidade 
                        </Typography>
                        <Typography fontSize={40} color={'black'}>de resíduos.
                        </Typography>
                    </Box>
                    <p class="mb-8 leading-relaxed">Rastreabilidade total dos seus resíduos com a Ecodots. Graças à tecnologia blockchain, garantimos transparência e responsabilidade em cada etapa até o destino final!</p>
                    <div class="flex justify-center ">
                        <a target='_blank' href="http://ecodots.com.br" class="inline-flex cursor-pointer text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Acesse já</a>


                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={img2} />
                </div>
            </div>
        </section>
    )
}

export default AboutEco