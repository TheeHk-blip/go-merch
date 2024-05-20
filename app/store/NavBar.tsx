import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Navbar } from "@nextui-org/react";
import Link from "next/link";

export function NavBar(){
    return(
        <Navbar className="navbar">
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/about">About</Link>
            <Button style={{position:"relative", marginLeft:"10rem"}} variant="outlined">
                <ShoppingCartIcon/>
            </Button>
        </Navbar>
    )
}