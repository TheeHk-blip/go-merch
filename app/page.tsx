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
                <NavbarBrand style={{ marginBottom: "1px" }}>
                    <GoMerch />Fashion Creates Confidence
                </NavbarBrand>
            </NavbarContent>
            <Button href="/store" as={Link} color='secondary' size='sm' variant='ghost'>Store</Button>
            <Button href="/about" as={Link} color='secondary' size='sm' variant='ghost'>About</Button>
        </Navbar>
        <div>
            <h1 className='text-xl text-center' >FASHION TRENDS IN 2024: A COMPREHENSIVE GUIDE</h1><br/>
            <div className='landing'>
                <Image alt={''} src={'/peakpx.jpg'} width={800} height={0} className='coverimage' />
                <div className='table'>
                    <h1 className="text-center" >TABLE OF CONTENTS</h1>
                    <ol>
                        <li>INRODUCTION</li>
                        <li>1.SUSTAINABLE FASHION
                            <li>a. Organic and Recycled Materials</li>
                            <li>b. Circular Fashion</li>
                            <li>c. Transparent Supply Chains</li>
                        </li>
                        <li>2.TECH INFUSED FASHION</li>
                            <li>a. Wearable Technology</li>
                            <li>b. Augmented Reality Shopping</li>
                            <li>c. 3D Printing</li>
                        <li>3.GENDER FLUID FASHION </li>
                        <li>4.NOSTALGIC REVIVALS</li>
                        <li>5.MINIMALISM AND MAXIMALISM</li>
                        <li>CONCLUSION</li>
                    </ol>
                </div>
            </div>
            <div>
                <h1><strong>Introduction: The Future of Fashion</strong></h1>
                <p>Fashion is a dynamic and ever-evolving industry, with each year bringing new trends and styles. As we step into 2024, the fashion world is witnessing an exciting blend of technology, sustainability, and innovation. From eco-friendly fabrics to futuristic designs, this year&apos;s trends reflect a shift towards conscious consumption and technological integration. In this blog post, we&apos;ll explore five key trends that are defining the fashion landscape in 2024.</p><br/>
                <h2><em>1. Sustainable Fashion: Eco-Friendly Fabrics and Ethical Practices.</em></h2>
                <p>Sustainability continues to be a dominant theme in 2024, with designers and consumers alike prioritizing eco-friendly materials and ethical practices. Here are some of the standout trends in sustainable fashion:</p>
                <h3><em>a.Organic and Recycled Materials</em></h3>
                <p>Brands are increasingly using organic cotton, bamboo, and recycled polyester. These materials not only reduce environmental impact but also offer comfort and durability. For instance, Tencel, made from sustainably sourced wood pulp, is gaining popularity for its softness and biodegradability.</p>
                <h3><em>b. Circular Fashion</em></h3>
                <p>Circular fashion focuses on extending the lifecycle of garments through recycling, upcycling, and resale. Brands like Patagonia and Eileen Fisher are leading the way by offering take-back programs and producing garments that can be easily recycled or repurposed.</p>
                <h3><em>c. Transparent Supply Chains</em></h3>
                <p>Consumers are demanding transparency about where and how their clothes are made. Brands are responding by providing detailed information about their supply chains, from raw material sourcing to manufacturing conditions. This transparency helps build trust and encourages responsible consumption.</p><br/>
                <h2><em>2. Tech-Infused Fashion: The Rise of Smart Clothing</em></h2>
                <p>The integration of technology into fashion is creating smart garments that offer functionality beyond traditional clothing. Here&apos;s how tech is transforming fashion in 2024:</p>
                <h3><em>a. Wearable Technology</em></h3>
                <p>Smart clothing equipped with sensors and connectivity features is becoming more mainstream. From fitness trackers embedded in activewear to heated jackets that adapt to weather conditions, wearable tech is enhancing the practicality of fashion.</p>
                <h3><em>b. Augmented Reality (AR) Shopping</em></h3>
                <p>AR is revolutionizing the shopping experience by allowing customers to virtually try on clothes. Brands like Gucci and Nike have developed AR apps that enable users to see how products will look and fit without visiting a physical store, making shopping more convenient and personalized.</p>
                <h3><em>c. 3D Printing</em></h3>
                <p>3D printing is pushing the boundaries of fashion design, allowing for the creation of intricate and customized pieces. Designers are experimenting with 3D-printed accessories, shoes, and even entire outfits, offering a new level of creativity and precision.</p><br/>
                <h2><em>3. Gender-Fluid Fashion: Breaking Traditional Boundaries</em></h2>
                <p>Fashion in 2024 is increasingly embracing gender fluidity, with designers creating collections that transcend traditional gender norms. This inclusive approach reflects broader societal shifts towards acceptance and diversity.</p>
                <h3><em>a. Unisex Collections</em></h3>
                <p>Many brands are launching unisex collections that cater to all genders. These collections often feature neutral colors, versatile silhouettes, and inclusive sizing, making fashion accessible to everyone.</p>
                <h3><em>b. Breaking Stereotypes</em></h3>
                <p>Designers are challenging gender stereotypes by blending traditionally masculine and feminine elements. For example, skirts and dresses are being reimagined for men, while women&apos;s suits are taking on bolder, more structured forms.</p>
                <h3><em>c. Celebrity Influence</em></h3>
                <p>Celebrities and influencers are playing a crucial role in popularizing gender-fluid fashion. Figures like Harry Styles and Billie Eilish are known for their eclectic styles that defy gender norms, inspiring fans to embrace a more fluid approach to fashion.</p>
                <h2><em>4. Nostalgic Revivals: A Modern Twist on Retro Styles</em></h2>
                <p>Nostalgia continues to influence fashion trends, with designers drawing inspiration from past decades and giving them a contemporary twist. In 2024, we&apos;re seeing a resurgence of several iconic styles:</p>
                <h3><em>a. 90s Grunge</em></h3>
                <p>The grunge aesthetic of the 1990s is making a comeback with oversized flannel shirts, ripped jeans, and combat boots. This trend appeals to those who appreciate a laid-back, edgy look with a hint of rebellion.</p>
                <h3><em>b. Y2K Revival</em></h3>
                <p>The early 2000s are back in vogue, with low-rise jeans, crop tops, and chunky sneakers dominating the scene. Brands are also reviving accessories like butterfly clips and baguette bags, adding a playful touch to modern outfits.</p>
                <h3><em>c. Vintage Sportswear</em></h3>
                <p>Vintage sportswear from the 80s and 90s is being reimagined with modern fabrics and fits. Think retro tracksuits, windbreakers, and graphic tees, often paired with contemporary pieces for a fresh, nostalgic look.</p><br/>
                <h2><em>5. Minimalism and Maximalism: A Tale of Two Extremes
                </em></h2>
                <p>Fashion in 2024 is embracing both minimalism and maximalism, catering to diverse tastes and preferences.</p>
                <h3><em>a. Minimalism</em></h3>
                <p>Minimalism is all about simplicity and functionality. Clean lines, neutral colors, and high-quality materials define this trend. Capsule wardrobes, consisting of versatile and timeless pieces, are becoming increasingly popular as consumers seek to reduce clutter and focus on essentials.</p>
                <h3><em>b. Maximalism</em></h3>
                <p>On the other end of the spectrum, maximalism celebrates bold colors, patterns, and textures. Layering, eclectic prints, and statement accessories are key components of this trend. Maximalism encourages self-expression and creativity, allowing individuals to showcase their unique style.</p>
                <h2><strong>conclusion: Embracing the Future of Fashion</strong></h2>
                <p>Fashion in 2024 is a blend of sustainability, technology, inclusivity, nostalgia, and diverse aesthetics. These trends reflect the evolving values and preferences of consumers, who are seeking not just style but also meaning and functionality in their wardrobes. As the fashion industry continues to innovate and adapt, one thing is clear: the future of fashion is bright, dynamic, and inclusive. Whether you&apos;re drawn to the simplicity of minimalism or the boldness of maximalism, there&apos;s something for everyone in the fashion landscape of 2024.</p>

            </div>
        </div>
    </>
    )
}