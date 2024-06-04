'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Button from 'react-bootstrap/Button';

type StoreItemProps = {
    isOpen: boolean
}

export function Shoppingcart(){
    return(
        <div>
                <Popover>
                    <PopoverTrigger>
                        <Button/>
                    </PopoverTrigger>
                    <PopoverContent>
                        Cart
                    </PopoverContent>
                </Popover>
        </div>
    )
}
