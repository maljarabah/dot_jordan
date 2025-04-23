import { Link, NavLink, useNavigate } from "react-router"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Avatar from "@radix-ui/react-avatar"

// assets
import icon from "../assets/icon.png";

// utils
import getLocalStorageData from "../utils/getLocalStorageData"
import getInitials from "../utils/getInitials"

function Sidebar() {
    const user = getLocalStorageData("user")
    const navigate = useNavigate()

    const navigation = [
        {
            href: "/dashboard",
            name: "Projects",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
            ),
        },
        {
            href: "/team",
            name: "Team",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            ),
        },
    ]

    const handleClick = () => {
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload()
    }

    return (
        <>
            <nav className="sticky left-0 top-0 h-screen w-20 space-y-8 border-r bg-white">
                <div className="flex h-full flex-col">
                    <div className="flex h-20 items-center justify-center px-8">
                        <Link to="/" className="flex-none">
                            <img src={icon} width={35} className="mx-auto" />
                        </Link>
                    </div>
                    <div className="flex h-full flex-1 flex-col">
                        <ul className="flex-1 px-4 text-sm font-medium">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="mb-2">
                                    <NavLink to={item.href} className={({ isActive }) => `group relative flex items-center justify-center gap-x-2 rounded-lg p-2 duration-150 hover:bg-gray-50 active:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`}>
                                        <div className="text-gray-500">{item.icon}</div>
                                        <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-gray-800 p-1 px-1.5 text-xs text-white duration-150 group-hover:inline-block group-focus:hidden">{item.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <div className="relative border-t px-4 py-4">
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger className="outline-none">
                                        <Avatar.Root>
                                            <Avatar.Image className="flex h-12 w-12 cursor-pointer items-center gap-x-4 rounded-full ring-gray-800 ring-offset-2 duration-150 focus:ring-2" src={user.picture} alt={user.fullname} />
                                            <Avatar.Fallback className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-sm font-medium text-white" delayMs={600}>
                                                {getInitials(user.fullname)}
                                            </Avatar.Fallback>
                                        </Avatar.Root>
                                    </DropdownMenu.Trigger>

                                    <DropdownMenu.Portal>
                                        <DropdownMenu.Content className="absolute bottom-4 left-10 w-64 rounded-lg border bg-white p-2 text-sm text-gray-600 shadow-md">
                                            <span className="block p-2 text-gray-500/80">{user.email}</span>
                                            <DropdownMenu.Item asChild className="outline-none">
                                                <a href="/dashboard" className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100">
                                                    Change Profile Picture
                                                </a>
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item asChild className="outline-none">
                                                <button className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100" onClick={handleClick}>
                                                    Logout
                                                </button>
                                            </DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Portal>
                                </DropdownMenu.Root>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar
