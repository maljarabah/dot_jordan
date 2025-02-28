import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const LoadingSvg = () => (
    <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

function Contact() {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [btnText, setBtnText] = useState("submit")

    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            contact: "mohjarabah@gmail.com",
            link: "mailto:mohjarabah@gmail.com",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            contact: "+962 797974426",
            link: "tel:+962797974426",
        },
    ]

    const sendEmail = (e) => {
        e.preventDefault()

        setIsLoading(true)

        emailjs
            .sendForm("service_yparckw", "template_3bap7zm", form.current, {
                publicKey: "y_Pt1zAd7ieqq8sNI",
            })
            .then(
                () => {
                    console.log("EmailJS: SUCCESS!")
                    form.current.reset()
                    setIsLoading(false)
                    setBtnText("Successfully sent :)")
                },
                (error) => {
                    console.log("EmailJS: FAILED...", error.text)
                    setIsLoading(false)
                    setBtnText("Failed to submit :(")
                }
            )

        setTimeout(() => setBtnText("Submit"), 4000)
    }

    return (
        <main className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
                <div className="mx-auto max-w-lg justify-between gap-12 lg:flex lg:max-w-none">
                    <div className="mb-16 max-w-lg space-y-3">
                        <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">Get in touch!</p>
                        <p>Feel free to reach out! Whether you have a question, an opportunity, or just want to say hello, I'd love to hear from you.</p>
                        <div>
                            <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
                                {contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-gray-400">{item.icon}</div>
                                        <a href={item.link}>{item.contact}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 sm:max-w-lg lg:max-w-md">
                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <label htmlFor="user_name" className="font-medium">
                                    Full name
                                </label>
                                <input type="text" name="user_name" id="user_name" required className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600" />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="font-medium">
                                    Email
                                </label>
                                <input type="email" name="user_email" id="user_email" required className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600" />
                            </div>
                            <div>
                                <label htmlFor="user_message" className="font-medium">
                                    Message
                                </label>
                                <textarea name="user_message" id="user_message" required className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-indigo-600"></textarea>
                            </div>
                            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
                                {isLoading ? (
                                    <>
                                        <LoadingSvg />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    btnText
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
