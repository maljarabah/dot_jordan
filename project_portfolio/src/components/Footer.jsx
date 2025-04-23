import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

function Footer() {
    const socials = [
        {
            name: "GitHub",
            link: "https://github.com/maljarabah",
            icon: <FaGithub className="h-6 w-6 duration-150 hover:text-gray-500" />,
        },
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/maljarabah",
            icon: <FaLinkedin className="h-6 w-6 duration-150 hover:text-gray-500" />,
        },
    ]

    return (
        <footer>
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t py-10 sm:flex-row">
                    <p className="flex items-center gap-2 text-gray-600">
                        Made with <FaHeart className="text-indigo-600 hover:animate-ping" title="Follow me on LinkedIn and GitHub :)" /> by Mohammad
                    </p>
                    <div className="flex items-center gap-x-6 text-gray-400">
                        {socials.map((item, idx) => (
                            <a key={idx} href={item.link} title={item.name} target="_blank">
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
