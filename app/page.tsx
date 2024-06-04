import { Button, Navbar, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'
import { NavbarBrand } from 'react-bootstrap'
import { GoMerch } from './store/GoMerchLogo'

export default function App(){
    return(
        <>

        <Navbar style={{boxShadow:"0px 0px 4px black"}}>
            <NavbarContent>
                <NavbarBrand style={{marginBottom:"2px"}}>
                    <GoMerch/><p><b>Fashion Creates Confidence</b></p>
                    
                </NavbarBrand>
            </NavbarContent>
            <Button href="/store" as={Link} color='secondary' size='sm' variant='ghost'>Store</Button>
            <Button href="/about" as={Link} color='secondary' size='sm' variant='ghost'>About</Button>
        </Navbar>
        
    </>
    )
}