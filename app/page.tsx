import Image from 'next/image'
import Link from 'next/link'

export default function App(){
    return(
    <>
    <div className="stick">
        <div className="top">
            <Image src="/go-merch.png" alt={''} width="200" height="0" className="image"></Image>
        </div>
        <div className="nav">
            <ul>
            <li>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/about">About</Link>
            </li>
            </ul>
        </div>
        </div>
        <div>
            
            <h1 className="text-xl">Who Are We?</h1>
            <p>Go-merch is an e-commerce website that integrates a store and a home section where we provide you with latest trends in fashion and events revolving around it.</p><br/>
            <section>
            In this week&apos;s feed we&apos;ll talk about the <b>Met Gala 2024.</b><br/>
            The Met Gala is a black tie extravaganza held the first Monday of May to raise money for the Metropolitan Museum of Art Costume Institute fashion wing. Celebrities always make their presence felt through their on-theme outfits. Some outfits are good and others are wierd.<br/>
            Here are some of the fits that caught our eye;<br/>
            <div>
            <b>1.LANA DEL REY</b>
            <Image src="/lana.png" alt={""} width="250" height="100" />
            The tree branches poking out of the tulle canopy and potentially causing a safety hazard on the red carpet took this look from good to great.
            </div>
            <div>
                <b>2.JENNIFER LOPEZ</b>
                < Image src="/jlo.png" alt={''} width="250" height="0" />This look is quintessential J.Lo at her best: sexy, glamorous, and covered in rhinestones. She looks more fashion-forward than years past, thanks to the structured shoulders and soft glam.

            </div>
            <div>
                <b>3.DOJA CAT</b>
                < Image src='/doja.png' alt={''} width="250" height="0" />After pulling up to the famed Mark Hotel wearing nothing but a plastic bag earlier today, the singer changed into a wet T-shirt dress by Vetements for the red carpet. Her glitter tears, thick black eyeliner, and bleach-blonde pixie cut made the unconventional look feel even more edgy.

            </div>
            </section>
            
        </div>
    </>
    )
}