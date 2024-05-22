'use client'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@nextui-org/button";
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { NavbarItem } from '@nextui-org/react';
import React from 'react';
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const menuItems =[
        "Profile",
        "Settings",
        "Sign up",
        "Log In",
        "Help & Feedback"
    ];
    const quantity = 1
    return(
        <>
        <Navbar className="navbar" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                arial-label={isMenuOpen ? "close menu" : "open menu"}
                className="sm:hidden"
                />
            <NavbarBrand>
                <GoMerch/>
            </NavbarBrand>
            </NavbarContent>

            <NavbarContent>
                <NavbarItem className="align-center">
                <Button href="/" as={Link} color="primary">Home</Button>
                <Button color='secondary'>
                    <ShoppingCartIcon/>
                </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) =>(
                    <NavbarMenuItem key={'${item}-${index}'}>
                        <Link
                        href="login"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        </>
    )
}