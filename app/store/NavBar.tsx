import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from 'next/link';
import { GoMerch } from './GoMerchLogo';

export  function NavBar() {

    return (
    <Navbar isBordered className="shadow mb-4 ">
        <GoMerch/>
        <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <p className="font-bold text-inherit">GoMerch</p>
        </NavbarBrand>
        </NavbarContent>

    <NavbarContent justify="end">
        <NavbarItem className="place-content-between">
            <Link href="/">Home</Link>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">LogIn</Link>
            <Link href="/about">About</Link>
            <Button style={{position:"absolute",right:"16px" ,bottom:"6px"}} variant="outlined">
                <ShoppingCartIcon/>
            </Button>
        </NavbarItem>
    </NavbarContent>
    </Navbar>
);
}
