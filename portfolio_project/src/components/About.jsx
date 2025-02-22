import Markdown from "react-markdown"

function About() {
    const data = {
        img: "../assets/avatar.jpg",
        content: "Mohammad Aljarab'ah is a Jordanian [Software Engineer](https://www.linkedin.com/in/mohjarabahh) at [ByConsult](https://www.cbs.jo), hails from [Tafilah](https://en.wikipedia.org/wiki/Tafilah) town in southwestern Jordan. He obtained a BSc in Intelligent Systems Engineering from [Tafila Technical University](https://www.ttu.edu.jo/en). He is passionate about innovative projects, delivering quality work, and refining his skills to achieve impactful results. Mohammad thrives in collaborative environments and seeks to learn from experienced professionals while contributing to advanced initiatives.",
    }

    return (
        <div className="flex flex-col items-center gap-12 px-3 lg:flex-row lg:px-16 xl:px-20">
            <img className="max-w-60 rounded-full md:max-w-64" src={data.img} />
            <Markdown className="markdown px-2 text-center leading-6 sm:px-8 sm:text-lg md:px-14 lg:px-4 lg:text-left xl:px-10 xl:text-justify">{data.content}</Markdown>
        </div>
    )
}

export default About
