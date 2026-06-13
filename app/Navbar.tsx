"use client"

import React from 'react'
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";



const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);


    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"},
    ];
    

  return (
    <nav className="flex px-10 border-b mb-5 py-5 gap-10 items-center">
    <Link href="/"><FaBug /></Link>
    <ul className="flex gap-10">
        {links.map((link) => (
            <li key={link.href}>
                <Link  className={classNames({
                    'text-zinc-900': pathname === link.href,
                    'text-zinc-500': pathname !== link.href,
                    'hover:text-zinc-800 transition-all': true
                })} href={link.href}>
                    {link.label}
                </Link>
            </li>
        ))}
    </ul>
    </nav>
  )
}

export default Navbar