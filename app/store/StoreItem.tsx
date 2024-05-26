'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Button, Image } from '@nextui-org/react'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    const quantity = 2
    return(
    <>
    <Card
    className="column"
    radius='lg'
    shadow='sm'
    >
        
        <Image
            isZoomed
            alt=""
            className="object-cover h-full img"
            src={imgUrl}
            width={250}
        />
    <CardBody className="py-2 ">
        
        <CardFooter className="justify-between d-flex flex-column">
            <div className="text">
            <span className="text-l">{name}</span>
            <span className="text-base ml-3 price">{formatCurrency(price)}
            </span>
            </div>
        </CardFooter>
        <div className="mt-auto">
            {quantity === 2 ?(
            <Button
            className="button" variant='ghost' color='secondary' size="sm">+Add To Cart</Button>
            ):(
                <div>
                <div>hi</div>
                lo
                </div>
            )}
        </div>
    </CardBody>
    </Card>
    </>
    )
}