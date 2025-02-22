function Card({ project }) {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md">
            <p className="h-4 w-full" style={{ backgroundColor: project.color }}></p>
            <div className="p-8">
                {project.link ? (
                    <a href={project.link} target="_blank" className="mt-1 block text-lg font-medium leading-tight text-black hover:text-indigo-500 hover:underline">
                        {project.name}
                    </a>
                ) : (
                    <p className="mt-1 block text-lg font-medium leading-tight text-black">{project.name}</p>
                )}
                <p className="mt-2 text-slate-500">{project.description}</p>
                <ul className="mt-5 flex gap-3">
                    {project.tools.map((item, idx) => (
                        <li key={idx}>
                            <img className="h-5 w-5" src={item.icon} title={item.name} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Projects() {
    const data = [
        {
            color: "#38bdf8",
            link: "",
            name: "ReactJS-based Personal Portfolio Website",
            description: "A ReactJS-based portfolio website was built with ReactJS, Tailwind CSS, and Float UI for a modern, responsive, and visually appealing design. It integrates EmailJS for a seamless contact form and was deployed on Vercel for fast performance, scalability, security, and continuous deployment.",
            tools: [
                {
                    name: "ReactJS",
                    icon: "../assets/reactjs.svg",
                },
                {
                    name: "Tailwind CSS",
                    icon: "../assets/tailwindcss.svg",
                },
                {
                    name: "Float UI",
                    icon: "../assets/floatui.svg",
                },
                {
                    name: "EmailJS",
                    icon: "../assets/emailjs.svg",
                },
                {
                    name: "Vercel",
                    icon: "../assets/vercel.svg",
                },
            ],
        },
        {
            color: "#6706ce",
            link: "",
            name: "Advanced Deep Learning Techniques for US Road Sign Detection and Segmentation",
            description: "A collection of deep learning models and experiments for the US road signs detection and segmentation problems. It was submitted as a graduation project under the supervision of Prof. Jafar Abukhait, in partial fulfillment of the requirements for a bachelor's degree.",
            tools: [
                {
                    name: "Python",
                    icon: "../assets/python.svg",
                },
                {
                    name: "TensorFlow",
                    icon: "../assets/tensorflow.svg",
                },
                {
                    name: "Roboflow",
                    icon: "../assets/roboflow.svg",
                },
            ],
        },
        {
            color: "#000000",
            link: "",
            name: "Aqsa Bot: AI-powered Image Generation and Enhancement Telegram Chatbot",
            description: "An AI-powered image generation and enhancement Arabic Telegram chatbot developed using Python, Telegram Bot API, and generative AI models. It allowed users to generate images from text prompts, and produce clearer photos from image prompts.",
            tools: [
                {
                    name: "Python",
                    icon: "../assets/python.svg",
                },
                {
                    name: "Python Telegram Bot",
                    icon: "../assets/pythontelegrambot.png",
                },
                {
                    name: "Replicate",
                    icon: "../assets/replicate.svg",
                },
            ],
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, idx) => (
                <Card key={idx} project={item} />
            ))}
        </div>
    )
}

export default Projects
