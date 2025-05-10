// components
import Sidebar from "../components/Sidebar"

function Team() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="px-6 pt-10">
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">🚧 Feature Coming Soon</h1>
                <p className="mt-2 text-gray-600">We're working on this feature. Stay tuned for updates!</p>
            </div>
        </div>
    )
}

export default Team
