import React from 'react'

const Herosection = () => {
    return (
        <div>
            <section class="bg-gradient-to-r from-pink-300 to-sky-300  py-10 sm:py-16 ">
                <div data-aos={"fade-up"} class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p class="text-2xl font-semibold tracking-wider text-blue-600 uppercase">All-In-One Web Hosting Platform</p>
                            <h3 class="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Welcome to Hostinger.</h3>
                            <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your business fast with right hosting Platform.</p>

                            <a href="#" title="" class=" lg:text-xl inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                                Get   Started
                                <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>

                        </div>

                        <div>
                            <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Herosection