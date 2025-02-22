import { useState } from "react"

function Testimonials({ data }) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <ul>
                        {data.map((item, idx) =>
                            currentTestimonial == idx ? (
                                <li key={idx}>
                                    <figure>
                                        <blockquote>
                                            <p className="text-xl font-light text-gray-800 sm:text-2xl">“{item.quote}“</p>
                                        </blockquote>
                                        <div className="mt-16">
                                            <img src={item.avatar} className="mx-auto h-16 w-16 rounded-full" />
                                            <div className="mt-3">
                                                <span className="block font-semibold text-gray-800">{item.name}</span>
                                                <span className="mt-0.5 block text-sm text-gray-600">{item.title}</span>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            ) : (
                                ""
                            )
                        )}
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex justify-center gap-x-3">
                        {data.map((_, idx) => (
                            <li key={idx}>
                                <button className={`h-2.5 w-2.5 rounded-full ring-indigo-600 ring-offset-2 duration-150 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`} onClick={() => setCurrentTestimonial(idx)}></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
