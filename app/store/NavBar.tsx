'use client'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { NavbarBrand } from 'react-bootstrap';
import { GoMerch } from './GoMerchLogo';

export function NavBar(){
    return(
        <Navbar className="fixed navbar ">
            <NavbarContent>
                <NavbarBrand className="sm">
                    <GoMerch/>
                </NavbarBrand>
                <NavbarItem>
                    <Button as={Link} href="/" variant="flat" color="secondary" >Home</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="navcontent">
                <NavbarItem className="flex gap-3 items-center">
                    <Button color="primary" variant="ghost">
                        <ShoppingCartIcon/>
                    </Button>
                </NavbarItem>
                <Dropdown className="dropdown">
                    <DropdownTrigger>
                        <Avatar
                        className="transition-transform"
                        isBordered
                        as="button"
                        color="success"
                        name="HK"
                        size="sm"
                        src="/blip.jpg"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" >
                        <DropdownItem key="Profile">
                            <p>Signed in as:</p>
                            <p className="font-semibold">theeblip@gmail.com</p>
                        </DropdownItem>
                        <DropdownItem key="login" color="primary" href="/login" variant='bordered' className='login'>
                            Log In
                        </DropdownItem>
                        <DropdownItem key="settings">
                            Settings
                        </DropdownItem>
                        
                        <DropdownItem key="helpandfeedback"   color="secondary" className="font-semibold">
                            Help and Feedback
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}