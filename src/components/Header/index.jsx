import React from 'react'

/* bg-[url('/src/assets/amazon.gif')] */

const HeaderLayout = () => {
    return (
        <section class="text-gray-600 bg-gray-200   h-max p-20 bg-cover body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Seja bem vindo ao nosso site.
                        <br class="hidden lg:inline-block " />Acesse nossa plataforma
                    </h1>
                    <p class="mb-8 leading-relaxed text-green-400 font-bold">Ecodots &copy; </p>
                    <div class="flex justify-start">
                        <button className="inline-flex animate-bounce text-gray-200 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded shadow-xl text-lg">NOSSA PLATAFORMA</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderLayout;