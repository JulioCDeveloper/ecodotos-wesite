import React from 'react'

const ContatoPage = () => {
    return (
        <section class="text-gray-600 body-font relative">
            <div class="absolute  inset-0 bg-[url('/src/assets/eco.gif')]">

            </div>
            <div class="container px-5 py-24 mx-auto flex">
                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Entre em contato</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Fique avontade para entrar em contato conosco.</p>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Mensagem</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <a target="_blank" href="mailto:paulo@ecodots.com.br" class="text-white bg-[#1DB3A4] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</a>
                    <p class="text-xs text-gray-500 mt-3">Responderemos em até 42 horas.</p>
                </div>
            </div>
        </section>
    )
}

export default ContatoPage