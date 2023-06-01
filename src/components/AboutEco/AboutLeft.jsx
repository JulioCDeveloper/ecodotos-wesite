import React from 'react'
import img1 from '../../assets/about-img/1.svg'

const AboutLeft = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-8/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={img1} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Saiba com que a
                        <br class="hidden lg:inline-block" />Ecodots trabalha.
                    </h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        <a target='_blank' class="inline-flex cursor-pointer text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Acesse já</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutLeft