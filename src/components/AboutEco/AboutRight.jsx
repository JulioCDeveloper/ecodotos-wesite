import React from 'react'
import img3 from '../../assets/about-img/3.svg'
import { Box, Typography } from '@mui/material'

const AboutRight = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={img3} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <Box display="flex" flexDirection="column">
                        <Typography fontSize={40} color={'black'}>Inventário completo das Emissões de GEE.
                        </Typography>
                      
                    </Box>
                    <p class="mb-8 leading-relaxed">Oferecemos um inventário completo das suas emissões de GEE. Com precisão e eficiência, ajudamos você a entender e reduzir sua pegada de carbono.</p>
                    <div class="flex justify-center">
                        <a target='_blank' class="inline-flex cursor-pointer text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Acesse já</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutRight