import { useState } from "react"

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const data = [
        {
            avatar: "../assets/drzeyad.jpg",
            name: "Dr. Zeyad Alodat",
            title: "Assistant Professor at Tafila Technical University",
            quote: "Mohammad is an exceptional student who consistently demonstrates a strong work ethic, intellectual curiosity, and a deep understanding of complex concepts. He consistently ranks among the top students in his class, and his contributions to class discussions are insightful and thought-provoking. His ability to grasp new concepts quickly and apply them creatively sets him apart from his peers.",
        },
        {
            avatar: "../assets/drnaeem.jpg",
            name: "Dr. Naeem Alodat",
            title: "Associate Professor at Tafila Technical University",
            quote: "Aljarab'ah exhibited excellent teamwork and communication skills. He was always willing to help his peers with their coursework and projects, and he collaborated effectively with his classmates on group assignments. His positive attitude and adaptability to new challenges make him an excellent candidate for any environment.",
        },
    ]

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
