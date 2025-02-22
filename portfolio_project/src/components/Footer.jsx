import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

function Footer() {
    const socials = [
        {
            icon: <FaGithub className="h-6 w-6 duration-150 hover:text-gray-500" />,
            link: "https://github.com/mohjarabahh",
        },
        {
            icon: <FaLinkedin className="h-6 w-6 duration-150 hover:text-gray-500" />,
            link: "https://www.linkedin.com/in/mohjarabahh/",
        },
    ]

    return (
        <footer>
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t py-10 sm:flex-row">
                    <p className="flex items-center gap-2 text-gray-600">
                        Made with <FaHeart className="text-indigo-500 hover:animate-spin" title="Follow me on LinkedIn and GitHub :)" /> by Mohammad Aljarab'ah.
                    </p>
                    <div className="flex items-center gap-x-6 text-gray-400">
                        {socials.map((item, idx) => (
                            <a key={idx} href={item.link} target="_blank">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
