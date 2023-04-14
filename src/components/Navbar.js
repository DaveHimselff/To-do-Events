import Link from "next/link"

export default function Navbar({ link }) {
    
    
    return (
        <div className="flex gap-5 pb-10 font-bold text-2xl">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/todo">Todo</Link>
        </div>
    )
}