// import Counter from 'components/Restaurants/Counter'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4} from 'uuid'
// import Basket from "components/Restaurants/Basket"
// import Button from "./Button"

export type ItemType = {
    id: number
    restaurantId: number
    name: string
    slug: string
    image: string
    price: number
    description: string
    
}

export type CartItemType ={
  id: string
  itemId: number
  quantity: number
  restaurantId: number
  name: string
  slug: string
  image: string
  price: number
  description: string
}

const MenuOfRestaurant = () => {
    const {slug} = useParams()
    const [items, setItems] = useState<ItemType[]>([])
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then((response) => response.json())
        .then((data) => setItems(data))
    },[slug])

    useEffect(() => {
      localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (item: ItemType): void => {
      const currentCartItem = cartItems.find(cartItem => cartItem.itemId === item.id)
    
      if (currentCartItem) {
        const newCartItem: CartItemType = {
          ...currentCartItem,
          quantity: currentCartItem.quantity + 1
        }
        let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)
        setCartItems([...newItems,newCartItem])
      }else {
        const newCartItem: CartItemType = {
          ...item,
          id: uuidv4(),
          itemId: item.id,
          quantity: 1,
          restaurantId: item.restaurantId
        }
        setCartItems([...cartItems, newCartItem])
      }
    }

    const reduceQuantity = (item: ItemType): void => {
      const currentCartItem = cartItems.find(cartItem => cartItem.itemId === item.id)
      if (currentCartItem) {
        if (currentCartItem.quantity > 0 ) {
          const newCartItem: CartItemType = {
          ...currentCartItem,
          quantity: currentCartItem.quantity - 1
        }

        let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)
        setCartItems([...newItems,newCartItem])
      }
    }else {
        const newCartItem: CartItemType = {
          ...item,
          id: uuidv4(),
          itemId: item.id,
          quantity: 1,
          restaurantId: item.restaurantId
        }
        setCartItems([...cartItems, newCartItem])
      }
    }
    
    const findCurrentItem = (item: ItemType) => {
      return cartItems.find( c => c.itemId === item.id)

    }

    // const [total, setTotal] = useState(
    //   cartItems.length > 0
    //     ? cartItems.reduce(
    //       (sum: number,item: CartItemType) => sum + item.quantity, 0
    //     )
    //   :0
    // )

    // useEffect(() => {
    //   setTotal(
    //     cartItems.length > 0
    //     ? cartItems.reduce(
    //       (sum: number,item: CartItemType) => sum + item.quantity, 0
    //     )
    //   :0
    //  )
    // }, [cartItems])

    return (
      <div className='flex'>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
         {items.map((item) => {
          return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src={item.image} alt=""
              className="object-cover w-full h-full rounded-2xl"
              />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="h-14"><p className="text-lg font-semibold  ">{item.name}</p></div>
              <p className="h-36 overflow-y-scroll text-sm text-gray-900 ">{item.description}</p> 
              <p className="leading-5 text-black text-2xl  font-bold sm:text-3xl ">{Math.round (item.price) } ₽</p>
            </div>
            <div>
              { findCurrentItem(item) && 
              findCurrentItem(item)?.quantity !== 0 ? (
              
              <div 
                className="flex justify-center py-2 gap-5 rounded-b-xl items-center text-xl">
                 <div className="flex gap-4 text-xl justify-center">
           <button title="-" onClick={() => reduceQuantity(item)}  className="mx-10 bg-orange-500 rounded-lg text-white text-xl px-4 shadow-md" />
           {findCurrentItem(item) && (
               <div>{findCurrentItem(item)?.quantity}</div>)}
           <button title="+" onClick={() => addToCart(item)}  className="mx-10 bg-orange-500 rounded-lg text-white text-xl px-4 shadow-md"/>
        </div>
               
              </div>
              ):(
                <button className='hover:text-black font-bold' onClick={() => addToCart(item)}>
                  Заказать

                </button>
              )}
            </div>
          </div>
        </div>
        )})}
        </div>
        </div>
)
}

export default MenuOfRestaurant