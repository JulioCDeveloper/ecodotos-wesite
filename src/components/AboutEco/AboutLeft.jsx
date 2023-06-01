import React from 'react'
import img1 from '../../assets/about-img/1.svg'
import { Box, Typography } from '@mui/material'

const AboutLeft = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-8/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={img1} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <Box display="flex" flexDirection="column">
                        <Typography fontSize={40} color={'black'}>Transforme seus resíduos
                        </Typography>
                        <Typography fontSize={40} color={'black'}>em fonte de renda.
                        </Typography>
                    </Box>

                    <p class="mb-8 leading-relaxed">Transforme resíduos em receita com a Ecodots. Nossa plataforma inovadora monetiza seus resíduos, criando um fluxo de renda adicional e promovendo a sustentabilidade. Com a Ecodots, lucro e responsabilidade ambiental caminham juntos</p>
                    <div class="flex justify-center">
                        <a target='_blank' href='http://ecodots.com.br' class="inline-flex cursor-pointer text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Acesse já</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutLeft