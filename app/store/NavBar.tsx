'use client'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Drawer, List } from '@mui/material';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { GoMerch } from './GoMerchLogo';
import { Shoppingcart } from './Shoppincart';
import { useStoreItem } from './StoreItemContext';


export function NavBar(){
    const {cartQuantity, cartItems} = useStoreItem()
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen:boolean) =>() => {
        setOpen(newOpen);
    }

    return(
        <>
        <Navbar className="fixed navbar ">
            <NavbarContent>
                <NavbarBrand className="sm">
                    <GoMerch />
                </NavbarBrand>
            <NavbarItem>
                <Button as={Link} href="/" variant="flat" color="secondary">Home</Button>
            </NavbarItem>
            </NavbarContent>
            <NavbarContent className="navcontent">
            <NavbarItem className="flex gap-3 items-center">
                
                <Button color="primary" variant="ghost" onClick={toggleDrawer(true)} >
                    <ShoppingCartIcon />
                        {cartQuantity > 0 && (
                            <>{cartQuantity}</>
                        )}
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}><Box sx={{width:300}} role="presentation">
                    <div className="text-center text-lg" >CART</div>
                    <List>
                        <Shoppingcart/>
                    </List>
                </Box>
                </Drawer>
            </NavbarItem>
            <NavbarItem>
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
                        src="/blip.jpg" />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions">
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
                        <DropdownItem key="helpandfeedback" color="secondary" className="font-semibold">
                            Help and Feedback
                        </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </NavbarContent>
            </Navbar></>
    )}