import Link from 'next/link'
import { Navbar } from 'react-bootstrap'

export default function SignUp(){
    return(
    <>
        <Navbar>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/signup">Sign Up</Link>
        </Navbar>
    </>
    )
}