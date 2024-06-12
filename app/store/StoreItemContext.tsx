'use client'

import { ReactNode, createContext, useContext, useState } from 'react';


type StoreItemPoviderProps = {
    children: ReactNode
}

type StoreItem ={
    id:number
    quantity:number

}

type StoreItemContext = {
    openCart:()=> void
    closeCart: ()=> void
    getItemQuantity: (id:number)=> number
    increaseCartQuantity: (id:number)=>void
    decreaseCartQuantity: (id:number)=>void
    removeFromCart: (id:number)=> void
    cartQuantity: number
    cartItems: StoreItem[]
}

const StoreItemContext = createContext({} as StoreItemContext)

export function useStoreItem(){
    return(
        useContext (StoreItemContext)
    )
}

export function StoreItemPovider ({ children}:StoreItemPoviderProps) {
    const [StoreItem, setStoreItem] = useState<StoreItem[]>([])

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<StoreItem[]>([])

    const cartQuantity = StoreItem.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id:number){
        return(
            StoreItem.find(item=> item.id === id)?.quantity || 0
        )
    }

    function increaseCartQuantity(id:number){
        setStoreItem(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return [ ...currItems, {id, quantity:1}]
            } else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return { ...item, quantity:item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        } )
        
    }

    function decreaseCartQuantity(id:number) {
        setStoreItem(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item=> item.id !== id)
            } else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return { ...item, quantity:item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        } )
    }

    function removeFromCart(id:number){
        setStoreItem( currItems =>{
            return(
                currItems.filter( item => item.id !== id)
            )
        })
    }



    return(
        <><StoreItemContext.Provider value={{ increaseCartQuantity, decreaseCartQuantity, removeFromCart, getItemQuantity, cartItems, openCart, closeCart, cartQuantity}}>
            {children}
        </StoreItemContext.Provider></>
    )
}