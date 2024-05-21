import Image from 'next/image';
import Link from 'next/link';

export default function About(){
    return(
    <>
        <div className='about'>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/about">About</Link>
        </div>
        <div>
            <p><b>Created and Designed by:</b><i>theeBlip</i>
            <Image src="/blip.jpg" width="200" height="0" alt={''}/>
            </p>
            <p><b>Contact Us:</b><i>theehkblip@gmail.com</i></p>
        </div>
    </>
    )
}