"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center rounded-b-lg shadow-md backdrop-blur-[4px] bg-white/10"
                style={{
                    transform: 'translateY(-100%)',
                    animation: 'slideDown 0.6s ease 0.6s forwards',
                }}
            >
                <Link href="/"><img src="/logo.png" alt="" className="w-25 rounded bg-white p-2 transition-transform duration-400 hover:scale-110" /></Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white inline-block transition-transform duration-400 hover:scale-110">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white inline-block transition-transform duration-400 hover:scale-110">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white inline-block transition-transform duration-400 hover:scale-110">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <style>{`
                @keyframes slideDown {
                    from { transform: translateY(-100%); }
                    to   { transform: translateY(0); }
                }
            `}</style>
        </>
    );
}