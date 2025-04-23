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

    const sendEmail = (e) => {
        e.preventDefault()

        setIsLoading(true)

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log("EmailJS: SUCCESS!")
                    form.current.reset()
                    setIsLoading(false)
                    setBtnText("Successfully sent :)")
                },
                (err) => {
                    console.log("EmailJS: FAILED...", err.text)
                    setIsLoading(false)
                    setBtnText("Failed to submit :(")
                }
            )

        setTimeout(() => setBtnText("Submit"), 4000)
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
                <p className="mx-auto max-w-lg space-y-3 text-center">Feel free to reach out! Whether you have a question, an opportunity, or just want to say hello, I'd love to hear from you.</p>
                <div className="mx-auto mt-12 max-w-lg">
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <div>
                            <label htmlFor="user_name" className="font-medium">
                                Name
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
    )
}

export default Contact
