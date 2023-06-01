import React from 'react'
import img1 from '../../../assets/partners/1.svg'
import img2 from '../../../assets/partners/2.svg'
import img3 from '../../../assets/partners/3.svg'
import img4 from '../../../assets/partners/4.svg'
import img5 from '../../../assets/partners/5.svg'
import img6 from '../../../assets/partners/6.svg'
import img7 from '../../../assets/partners/7.svg'
import img8 from '../../../assets/partners/8.svg'

const PartnesSection = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h1 class="text-2xl font-medium title-font  text-gray-900">Instituições Parceiras.</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Conheça alguns parceiros da Ecodots.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://idesam.org'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img1} />
                            </a>

                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://cide.org.br'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img2} />
                            </a>


                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://www.gov.br/suframa/pt-br'>


                                <img alt="team" class="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4" src={img3} />
                            </a>

                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://ppbio.inpa.gov.br'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img4} />
                            </a>


                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://www.fujifilm.com/br/pt-br'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img5} />
                            </a>



                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://www.flex-am.com.br'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img6} />
                            </a>


                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://www.goldstandard.org'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img7} />
                            </a>


                        </div>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">

                            <a href='https://www.btgpactual.com'>

                                <img alt="team" class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img8} />
                            </a>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PartnesSection