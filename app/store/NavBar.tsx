import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from 'next/link';
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    return(
        <>
        <Navbar className="navbar">
            <NavbarBrand>
                <GoMerch/>
            </NavbarBrand>
            <NavbarContent className="space-x-1">
                <Link href="/">Home</Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Log In</Link>
                <Button variant="outlined">
                    <ShoppingCartIcon/>
                    <div>2</div>
                </Button>
            </NavbarContent>
        </Navbar>
        </>
    )
}