import Markdown from "react-markdown"

function About({ data }) {
    return (
        <div className="flex flex-col items-center gap-12 px-3 lg:flex-row lg:px-16 xl:px-20">
            <img className="max-w-60 rounded-full md:max-w-64" src={data.img} />
            <Markdown className="markdown px-2 text-center leading-6 sm:px-8 sm:text-lg md:px-14 lg:px-4 lg:text-left xl:px-10 xl:text-justify">{data.content}</Markdown>
        </div>
    )
}

export default About
