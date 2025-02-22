function Experience() {
    const data = [
        {
            role: "Software Engineer",
            company: "ByConsult",
            company_logo: "../assets/cbs.jpg",
            description: "Crafts advanced ERP and CRM solutions that help businesses optimize operations, strengthen customer relationships, and grow successfully.",
            date: "Dec 2024 - Present",
            location: "Remote",
        },
        {
            role: "Computer Science Teacher",
            company: "Ministry of Education",
            company_logo: "../assets/moe.jpg",
            description: "Educated computer science and digital skills to 10th and 11th-grade students enrolled BTEC in Engineering program.",
            date: "Aug 2024 - Dec 2024",
            location: "Tafilah, Jordan",
        },
        {
            role: "Summer Intern",
            company: "Tafila Technical University",
            company_logo: "../assets/ttu.jpg",
            description: "Troubleshooted and resolved critical issues in a university clinic's biometric attendance system.",
            date: "Jul 2023 - Aug 2023",
            location: "Tafilah, Jordan",
        },
    ]

    return (
        <ul className="mt-12 space-y-6">
            {data.map((item, idx) => (
                <li key={idx} className="rounded-md bg-white p-5 shadow-sm">
                    <div className="justify-between sm:flex">
                        <div className="flex-1">
                            <div className="flex items-center gap-x-3">
                                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border bg-white">
                                    <img className="h-full w-full" src={item.company_logo} />
                                </div>
                                <div>
                                    <span className="block text-sm font-medium text-indigo-500">{item.company}</span>
                                    <h3 className="text-xl font-medium text-gray-800">{item.role}</h3>
                                </div>
                            </div>
                            <p className="mt-2 pr-2 text-gray-700">{item.description}</p>
                        </div>
                    </div>
                    <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                        <span className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {item.date}
                        </span>
                        <span className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {item.location}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Experience
