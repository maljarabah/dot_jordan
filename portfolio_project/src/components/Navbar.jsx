import { useState } from "react"

function Navbar() {
    const [state, setState] = useState(false)

    const navigation = [
        { title: "About", path: "#about" },
        { title: "Experience", path: "#experience" },
        { title: "Projects", path: "#projects" },
        { title: "Testimonials", path: "#testimonials" },
        { title: "Contact ", path: "#contact" },
    ]

    return (
        <nav className="sticky left-0 top-0 z-50 w-full border-b bg-white shadow-sm md:border-0">
            <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:block md:py-5">
                    <a className="text-lg" href="#">
                        <strong className="text-indigo-500">Mohammad</strong> Jarab'ah
                    </a>
                    <div className="md:hidden">
                        <button className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400" onClick={() => setState(!state)}>
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${state ? "block" : "hidden"}`}>
                    <ul className="items-center justify-end space-y-8 pb-4 md:flex md:space-x-6 md:space-y-0 md:pb-0">
                        {navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="text-center text-gray-600 hover:text-indigo-500">
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
