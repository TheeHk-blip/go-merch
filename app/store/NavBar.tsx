import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@nextui-org/button";
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    return(
        <>
        <Navbar className="navbar">
            <NavbarBrand>
                <GoMerch/>
            </NavbarBrand>
            <NavbarContent className="space-x-1">
                <Button href="/" as={Link} color="primary">Home</Button>
                <Button href="/signup" as={Link} isBlock showAnchorIcon color="secondary" size='sm' variant='bordered' >Sign Up</Button>
                <Button href="/login" as={Link} isBlock showAnchorIcon variant='bordered' color='secondary' size='sm'>Log In</Button>
                <Button variant="bordered" color="secondary" radius='lg'>
                    <ShoppingCartIcon/>
                    <div>2</div>
                </Button>
            </NavbarContent>
        </Navbar>
        </>
    )
}