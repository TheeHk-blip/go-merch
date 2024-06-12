import { Button, Navbar, NavbarContent } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarBrand } from 'react-bootstrap'
import { GoMerch } from './store/GoMerchLogo'

export default function App(){
    return(

        
        <>
        <Navbar style={{ boxShadow: "0px 0px 4px black" }} isBlurred={false}>
            <NavbarContent>
                <NavbarBrand style={{ marginBottom: "2px" }}>
                    <GoMerch />
                    <p className="fashion"><b>Fashion Creates Confidence</b></p>

                </NavbarBrand>
            </NavbarContent>
            <Button href="/store" as={Link} color='secondary' size='sm' variant='ghost'>Store</Button>
            <Button href="/about" as={Link} color='secondary' size='sm' variant='ghost'>About</Button>
        </Navbar><div className='ml-auto mr-auto'>
                <b className='tex m-auto'>Fashion in the 21st Century: Evolution, Trends, and the Future.</b><br />
                <div className='fashion'>
                <Image className='fashion' alt={''} src={'/peakpx.jpg'} width={200} height={0} />
                </div>
                <b className='tex'>Introduction</b><br />
                <div>
                    Fashion in the 21st century is a fascinating study of contrasts and innovation. This period has seen rapid changes driven by technological advancements, shifts in cultural norms, and a growing awareness of environmental issues. From the rise of fast fashion to the increasing focus on sustainability, fashion today is a complex and dynamic industry that reflects broader societal trends. This blog explores the major trends, transformations, and future directions of fashion in the 21st century.<br />

                    <b>Section 1: The Early 2000s – A New Millennium of Style</b><br />
                    <div className='styles'>
                        <Image alt={''} src={'/fash.png'} width={200} height={0} />
                        <Image alt={''} src={'/fas.jpeg'} width={200} height={0} />
                    </div>
                    Y2K Fashion
                    The turn of the millennium brought a unique aesthetic known as Y2K fashion. Characterized by metallic fabrics, futuristic silhouettes, and an overall tech-inspired look, this trend was a reflection of society’s optimism and fascination with the future. Popular items included low-rise jeans, crop tops, and platform sneakers.<br /><br />

                    <b>The Influence of Pop Culture.</b>
                    The early 2000s were heavily influenced by pop culture icons like Britney Spears, Jennifer Lopez, and the Spice Girls. Their styles were widely emulated, leading to trends such as velour tracksuits, trucker hats, and oversized sunglasses. Music videos, movies, and television shows played a significant role in shaping fashion trends during this period.<br />

                    <b>The Birth of Fast Fashion</b>
                    The early 2000s also saw the rise of fast fashion brands like Zara, H&M, and Forever 21. These companies revolutionized the fashion industry by offering trendy, affordable clothing at a rapid pace. However, this model raised concerns about labor practices and environmental sustainability, issues that would become increasingly prominent in the following years.<br /><br />

                    <b>Section 2: The 2010s – Digital Revolution and Diversity</b><br />
                    <div>
                        <Image alt={""} src={"/fa.jpeg"} width={200} height={0} />
                        <Image alt={""} src={"/f.jpeg"} width={200} height={0} />
                    </div>
                    <b>The Impact of Social Media:</b>
                    The 2010s marked the era of social media, profoundly influencing how fashion was consumed and promoted. Platforms like Instagram, Pinterest, and later TikTok became essential tools for fashion marketing. Influencers emerged as new trendsetters, often eclipsing traditional celebrities in their impact on fashion trends.<br />

                    <b>Streetwear and the Rise of Athleisure:</b>
                    Streetwear, characterized by casual, comfortable clothing often inspired by sportswear, became a dominant trend. Brands like Supreme, Off-White, and Adidas capitalized on this movement, blurring the lines between high fashion and everyday wear. Athleisure, a style that combines athletic wear with leisure attire, also gained popularity, reflecting a broader societal shift towards health and fitness.<br />

                    <b>Emphasis on Diversity and Inclusion:</b>
                    The 2010s saw a growing emphasis on diversity and inclusion within the fashion industry. There was a notable increase in representation of different body types, ethnicities, and gender identities on runways and in advertising campaigns. This period also witnessed the rise of plus-size models and androgynous fashion, challenging traditional beauty standards.<br />

                    <b>Sustainable Fashion Movement:</b>
                    In response to the negative impacts of fast fashion, the sustainable fashion movement gained momentum. Consumers became more aware of the environmental and ethical issues associated with fashion production, leading to increased demand for sustainable practices. Brands like Patagonia, Stella McCartney, and Everlane championed eco-friendly materials and ethical labor practices, setting new industry standards.<br />

                    <b>Section 3: The 2020s – Innovation and Conscious Consumption</b><br />
                    <div>
                        <Image alt={""} src={"/fashi.jpeg"} width={200} height={0} />
                        <Image alt={""} src={"/fashio.jpeg"} width={200} height={0} />
                    </div>
                    <b>Technological Advancements</b>
                    The 2020s have seen significant technological advancements that continue to reshape the fashion industry. 3D printing, AI-driven design, and virtual fashion are becoming more prevalent, allowing for greater creativity and efficiency. Virtual fashion shows and digital garments, which gained prominence during the COVID-19 pandemic, have become more mainstream.<br />

                    <b>The Metaverse and Digital Fashion:</b>
                    The concept of the metaverse, a virtual shared space, has introduced new possibilities for fashion. Digital fashion, where clothing exists solely in the virtual realm, is gaining traction. This trend reduces physical waste and offers endless creative possibilities. Designers like Balenciaga and Gucci are experimenting with virtual collections and collaborations within gaming environments.<br />

                    <b>Sustainable and Ethical Practices:</b>
                    Sustainability remains a central theme in the 2020s, with consumers increasingly prioritizing ethical and eco-friendly practices. The fashion industry is seeing a rise in circular fashion models, where products are designed for reuse and recycling. Brands are adopting transparent supply chains, ensuring that their materials and labor practices are environmentally and socially responsible.<br />

                    <b>Gender Fluidity and Inclusivity:</b>
                    The fashion industry is increasingly embracing gender fluidity, with more brands offering unisex collections and non-binary fashion. This shift reflects a broader cultural movement towards inclusivity and acceptance of diverse gender identities. Designers are challenging traditional norms, creating clothing that transcends gender boundaries.<br />

                    <b>The Role of Influencers and Digital Platforms:</b>
                    Influencers and digital platforms continue to play a significant role in shaping fashion trends. TikTok, in particular, has become a powerful tool for fashion discovery and promotion. Micro-influencers, individuals with smaller but highly engaged followings, are increasingly influential, offering authentic and relatable content.<br />

                    <b>Section 4: Key Trends and Styles of the 21st Century</b><br />
                    <div>
                        <Image alt={""} src={"/fashion.jpeg"} width={200} height={0} />
                        <Image alt={""} src={"/shi.jpeg"} width={200} height={0} />
                    </div>
                    <b>Revival of Past Decades</b>
                    Fashion in the 21st century has been marked by the revival of trends from previous decades. The 90s, 80s, and even the 70s have made comebacks, with styles like mom jeans, neon colors, and retro sportswear becoming popular once again. This cyclical nature of fashion highlights its nostalgic appeal and the continuous reinterpretation of past styles.<br />

                    <b>Minimalism and Maximalism:</b>
                    The 21st century has seen the coexistence of two contrasting trends: minimalism and maximalism. Minimalism, characterized by clean lines, neutral colors, and simple designs, emphasizes quality over quantity. Maximalism, on the other hand, celebrates bold colors, patterns, and eclectic combinations. Both trends cater to different tastes and reflect the diversity of contemporary fashion.<br />

                    <b>Functional Fashion:</b>
                    The emphasis on functionality is evident in the rise of utilitarian fashion. Practicality and versatility are key, with designs featuring multiple pockets, convertible elements, and durable materials. This trend is a response to the fast-paced, dynamic lifestyles of modern consumers who value convenience and adaptability.<br />

                    <b>Personalization and Customization:</b>
                    Advancements in technology have enabled greater personalization and customization in fashion. Brands are offering bespoke services, allowing consumers to design their own clothing and accessories. This trend caters to the desire for unique, individualized fashion and enhances the overall customer experience.<br />

                    <b>Section 5: The Future of Fashion
                        Sustainable Innovation</b><br />
                    <div>
                        <Image alt={""} src={"/shifo.jpeg"} width={200} height={0} />
                        <Image alt={""} src={"/shif.jpeg"} width={200} height={0} />
                    </div>
                    The future of fashion lies in sustainable innovation. As technology continues to evolve, the fashion industry will likely see the development of new materials and processes that further reduce environmental impact. Biodegradable fabrics, zero-waste manufacturing, and closed-loop systems are some of the advancements that will shape the future of sustainable fashion.<br />

                    <b>Integration of AI and Big Data</b>
                    Artificial intelligence and big data will play a crucial role in the future of fashion. AI can streamline the design process, predict trends, and optimize supply chains. Big data analytics will provide insights into consumer preferences and behaviors, allowing brands to create more targeted and efficient marketing strategies.<br />

                    <b>Expansion of Digital Fashion</b>
                    Digital fashion will continue to expand, offering new opportunities for creativity and sustainability. Virtual reality and augmented reality technologies will enhance the online shopping experience, allowing consumers to try on clothes virtually before making a purchase. The integration of digital and physical fashion will create a more immersive and interactive experience.<br />

                    <b>Continued Emphasis on Inclusivity</b>
                    Inclusivity will remain a central focus, with the fashion industry striving to represent and celebrate diversity in all its forms. Brands will continue to push boundaries, creating fashion that is accessible and inclusive for all. This shift towards inclusivity will foster a more equitable and representative fashion landscape.<br />

                    <b>Global Collaboration and Cultural Exchange</b>
                    The future of fashion will be characterized by global collaboration and cultural exchange. Designers from different parts of the world will collaborate, merging diverse styles and techniques. This cross-cultural exchange will enrich the fashion industry, fostering creativity and innovation.<br />

                    <b>Conclusion</b><br />
                    Fashion in the 21st century is a dynamic and ever-evolving industry that reflects broader societal changes and technological advancements. From the rise of fast fashion to the growing emphasis on sustainability and inclusivity, fashion today is more than just clothing; it is a powerful form of self-expression and a reflection of our times. As we look to the future, the fashion industry will continue to innovate and adapt, embracing new technologies and practices that align with the values and needs of modern consumers.<br /><br />
                </div>
                <p>
                    Did you know? The fashion industry is increasingly focusing on sustainable practices, from eco-friendly fabrics to circular fashion initiatives. 🌿🌎

                    If you have any specific fashion queries or want more trend insights, feel free to ask!
                </p>
                </div></>
        )
    }