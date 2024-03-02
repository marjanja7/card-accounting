import Counter from 'components/Restaurants/Counter'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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

export type BasketItemType ={
  id: number
  itemId: number
  quantity: number
}

const MenuOfRestaurant = () => {
    const {slug} = useParams()
    const [items, setItems] = useState<ItemType[]>([])
    const [basketItems, setBasketItems] = useState<BasketItemType[]>([])

    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then((response) => response.json())
        .then((data) => setItems(data))
    },[slug])

    const addToBasket = (item: ItemType): void => {
      const currentBasketItem = basketItems.find(basketItem => basketItem.itemId === item.id)
    
      if (currentBasketItem) {
        const newBasketItem: BasketItemType = {
          ...currentBasketItem,
          quantity: currentBasketItem.quantity + 1
        }
        let newItems = basketItems.filter(basketItem => basketItem.itemId !== currentBasketItem.itemId)
        setBasketItems([...newItems,newBasketItem])
      }else {
        const newBasketItem: BasketItemType = {
          id: 123,
          itemId: item.id,
          quantity: 1
        }
        setBasketItems([...basketItems, newBasketItem])
      }
    }
    const findCurrentItem = (item: ItemType) => {
      return basketItems.find( c => c.itemId === item.id)
    }
        return (
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
              <div>{findCurrentItem(item)?.quantity}</div>
              }
              <button 
                className="leading-5 bg-orange-500 rounded text-black text-2xl shadow-md py-2 mt-1 mb-4 mr-1 font-bold sm:text-3xl"
                onClick={() => addToBasket(item)} ><Counter/> 
              </button>
            </div>
          </div>
        </div>
        )})}
        </div>
        

)
}

export default MenuOfRestaurant