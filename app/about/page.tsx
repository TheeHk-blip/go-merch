import { Button, Link, Navbar, NavbarContent } from '@nextui-org/react';
import Image from 'next/image';
import { NavbarBrand } from 'react-bootstrap';
import { GoMerch } from '../store/GoMerchLogo';

export default function About(){
    return(
    <>
        <Navbar style={{boxShadow:"0px 0px 4px black"}}>
            <NavbarContent>
                <NavbarBrand>
                    <GoMerch/>
                </NavbarBrand>
            </NavbarContent>
            <Button as={Link} href="/" variant="ghost" color='secondary'>Home</Button>
            <Button as={Link} href="/store" variant='ghost' color='secondary'>Store</Button>
        </Navbar>
        <div>
            <p><b>Created and Designed by:</b><i>theeBlip</i>
            <Image src="/blip.jpg" width="200" height="0" alt={''}/>
            </p>
            <p><b>Contact Us:</b><i>theehkblip@gmail.com</i></p>
        </div>
    </>
    )
}