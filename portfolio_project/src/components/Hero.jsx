function Hero() {
    return (
        <div className="hero_container relative flex items-center justify-center overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-[url('/assets/bg.svg')] before:bg-top before:bg-no-repeat">
            <div className="mx-auto h-fit max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8">
                <div className="mx-auto mt-5 max-w-3xl text-center">
                    <h1 className="block px-0 text-4xl font-bold text-gray-800 sm:px-32 md:text-5xl lg:px-0 lg:text-6xl">Motivated Engineer, Dedicated Educator & Lifelong Learner</h1>
                </div>

                <div className="mx-auto mt-5 max-w-3xl text-center">
                    <p className="text-lg text-gray-600">
                        Hi, I'm Mohammad Aljarab'ah. I'm interested in
                        <br />
                        Technology, Software Engineering, and AI.
                    </p>
                </div>

                <div className="mt-8 flex justify-center gap-3">
                    <a className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:from-violet-600 focus:to-blue-600 focus:outline-none active:scale-95" href="#about">
                        Discover Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
