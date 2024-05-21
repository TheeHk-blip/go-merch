import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@nextui-org/button";
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    const quantity = 1
    return(
        <>
        <Navbar className="navbar">
            <NavbarBrand>
                <GoMerch/>
            </NavbarBrand>
            <NavbarContent>
                <Button href="/" as={Link} color="primary">Home</Button>
                <Button href="/signup" as={Link} isBlock showAnchorIcon color="secondary" size='sm' variant='bordered' >Sign Up</Button>
                <Button href="/login" as={Link} isBlock showAnchorIcon variant='bordered' color='secondary' size='sm'>Log In</Button>
                <Button color='secondary'>
                    <ShoppingCartIcon/>
                </Button>
            </NavbarContent>
        </Navbar>
        </>
    )
}