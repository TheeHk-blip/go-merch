'use client'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/react'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    const quantity = 1
    return(
    <>
    <Card
    className="column"
    isFooterBlurred
    radius='lg'
    shadow='sm'
    >
        
        <Image
            isZoomed
            alt=""
            className="object-cover h-full"
            src={imgUrl}
            width={250}
        />
    <CardBody className="py-2 ">
        
        <CardFooter className="justify-between d-flex flex-column">
            <span className="text-xl">{name}</span>
            <span className="float-left text-base ml-3">{formatCurrency(price)}
            </span>
        </CardFooter>
        <div className="mt-auto">
            {quantity === 1 ?(<Button className="button" variant='solid' color='secondary' size="sm">+Add To Cart</Button>
            ):<><div>hi</div><div>lo</div></>}
            
        </div>
    </CardBody>
    </Card>
    </>
    )
}