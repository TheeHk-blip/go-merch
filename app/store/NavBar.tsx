import { Avatar, Button, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { NavbarBrand } from 'react-bootstrap';
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    return(
        <Navbar className="fixed navbar ">
            <NavbarContent>
                <NavbarBrand>
                    <GoMerch/>
                </NavbarBrand>
                <NavbarItem>
                    <Button as={Link} href="/" variant="flat" color="secondary" >Home</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="navcontent">
                <NavbarItem className="flex gap-3 items-center">
                    <Avatar src="/blip.jpg" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}