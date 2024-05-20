import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from 'next/link';
import { GoMerch } from './GoMerchLogo';

export  function NavBar() {

    return (
    <Navbar isBordered className="navbar">
        <GoMerch/>
        <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <p className="font-bold text-inherit">GoMerch</p>
        </NavbarBrand>
        </NavbarContent>

    <NavbarContent justify="end">
        <NavbarItem>
        
        </NavbarItem>
        <NavbarItem>
            <Link href="/">Home</Link>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">LogIn</Link>
            <Link href="/about">About</Link>

        </NavbarItem>
    </NavbarContent>
    </Navbar>
);
}
