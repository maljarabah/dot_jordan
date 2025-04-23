import { Link } from "react-router"

// components
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex h-screen items-center justify-center">
                <div className="px-4 pb-4 sm:px-8">
                    <div className="space-y-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
                            Stay on Track.
                            <span className="text-blue-600"> Work Smarter.</span>
                        </h1>
                        <p className="mx-auto max-w-xl leading-relaxed text-gray-500">Taskly is your all-in-one project management tool bullt for teams who value clarify, speed, and results. From tasks to timelines. Taskly helps you organize workt collaborate effortlessly, and deliver projects with confidence.</p>
                    </div>
                    <div className="mt-12 items-center justify-center space-y-3 sm:flex sm:space-x-6 sm:space-y-0">
                        <Link to="/dashboard" className="block w-full rounded-md bg-blue-600 px-10 py-3.5 text-center text-white shadow-md sm:w-auto">
                            Get started
                        </Link>
                        <Link to="#features" className="block w-full rounded-md border px-10 py-3.5 text-center text-gray-500 duration-300 hover:text-blue-600 hover:shadow sm:w-auto">
                            Features
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
