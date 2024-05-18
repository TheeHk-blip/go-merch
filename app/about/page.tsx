import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';

export default function About(){
    return(
    <>
        <Navbar>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/about">About</Link>
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