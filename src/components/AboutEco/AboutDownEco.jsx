import React from 'react'
import img4 from '../../assets/about-img/2.svg'
import { Box, Typography } from '@mui/material'
const AboutDownEco = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <Box display="flex" flexDirection="column">
                        <Typography fontSize={40} color={'black'}>Projetos de Créditos de Carbono
                        </Typography>
                       
                    </Box>
                    <p class="leading-relaxed"><span className='font-bold'>Ecodots:</span> Nós desenvolvemos projetos de Créditos de Carbono para indústrias de reciclagem.</p>
                    <p class="leading-relaxed">Com nossa expertise e abordagem inovadora, ajudamos você a maximizar a sustentabilidade e a lucratividade do seu negócio, enquanto contribui para a redução das emissões globais de carbono</p>
                    <div class="flex justify-center mt-6">
                        <a target='_blank' class="inline-flex cursor-pointer text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Acesse já</a>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={img4} />
                </div>
            </div>
        </section>
    )
}

export default AboutDownEco