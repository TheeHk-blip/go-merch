'use client'

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Button, Image } from '@nextui-org/react';
import { formatCurrency } from '../utilities/formatCurrency';
import { useStoreItem } from './StoreItemContext';

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useStoreItem()
    const quantity = getItemQuantity(id)
    return(
    <div className='store'>
    <div className='space'></div>
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
            <span className="text-l">{name}</span>
            <span className="text-base price ml-3">{formatCurrency(price)}
            </span>
        </CardFooter>
        <div className="mt-auto">
            {quantity === 0 ? (
                <Button variant='bordered' color='primary' style={{width:"100%"}} 
                onClick ={() => increaseCartQuantity(id)} > + Add To Cart</Button>
            ):(
            <div>
                <div>
                    <Button variant='solid' color='primary' size='sm'
                    onClick ={() => decreaseCartQuantity(id)}>-</Button>
                        <span>
                            {quantity}
                        </span>
                    <Button variant='solid' color='primary' className='mb-2' size='sm' style={{float:"right"}}
                    onClick ={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="solid" color='danger' size='sm' className='text-center' style={{marginLeft:"3.5rem", padding:'0'}}
                onClick ={() => removeFromCart(id)}>Remove</Button>
            </div>)}
        </div>
    </CardBody>
    </Card>
    </div>
    )
}