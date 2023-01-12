import React from 'react'
import startup from '../../assets/startup.svg'

const AboutEco = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sobre a Ecodots &copy;
                    </h1>
                    <div className="justify-center flex flex-wrap">
                        <div className="w-32 rounded h-2  bg-green-400 "></div>
                    </div>
                    <p class="mb-8 mt-10 leading-relaxed">Somos uma empresa........</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-gray-700 shadow-md bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Fazer Login</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={startup} />
                </div>
            </div>
        </section>
    )
}

export default AboutEco