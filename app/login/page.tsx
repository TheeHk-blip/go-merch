import Link from 'next/link'
import { Navbar } from 'react-bootstrap'

export default function Login(){
    return(
    <>
        <Navbar>
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
            <Link href="/login">LogIn</Link>
        </Navbar>
        <h1>LogIn</h1>
    </>
    )
}