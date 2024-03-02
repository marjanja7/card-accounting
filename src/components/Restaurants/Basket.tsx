import {  useState, useEffect } from "react"
import  {BasketItemType, ItemType } from "./MenuOfRestaurant"
import { Link } from "react-router-dom"
import Button from "./Button"
import Counter from "./Counter"


const Basket = () => {

  const [items, setItems] = useState<ItemType[]>([])  
  const [baskets, setBasketItems] = useState<BasketItemType[]>([])

    

     const deleteItem = (id) => {
         const filteredItems = items.filter (item => item.id !== id)
          setItems(filteredItems)
       }
  
    return (
        <div>
            {setBasketItems.length === 0? (
                <div className="max-w-4xl m-avto bg-indigo-50 m-5 flex justify-evenly rounder-md shadow-md py-6 md:px-4 lg:px-2 xl:px-0 py-4">
                  <div className='flex flex-col items-center gap-10'>
                    <p className='bg-blue-100 text-3xl text-rose-600 font-bold'>ВАША КОРЗИНА ПУСТА</p>
                    <p className='bg-blue-100 text-2xl text-rose-400 font-bold'>ВАША КОРЗИНА ПУСТА</p>
                    <Link to={'/'}>
                        <Button
                            title={'Вернуться на главную'}
                            description={'Перейти на главную'}
                            variant='default'
                        />
                    </Link>
                  </div> 
                </div>
            ):
            <div max-w-4xl m-auto px-6 py-10 >
               <p className="text-3xl pb-10 font-bold text-slate-400">Ваш заказ</p>
               <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col gap-4 px-4 py-5 bg-slate-100 rounded-2xl justify-between ">
                     {setBasketItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex gap-5">
                                <img alt='' src={item.image} className="object-cover object-center w-44 h-44"></img>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xl text-slate-800 py-3 font-bold">{item.name}</p>
                                    <p className="text-base text-orange-500 py-3 font-bold">Цена:{item.price}</p>
                                    <p className="text-sm text-slate-600 py-3 font-medium">Колличество: <Counter /></p>
                                </div>
                            </div>
                      
                            <div className="flex flex-col gap-2">
                                {/* <Button onClick={() => deleteFromBasket(item.id)}
                                    title={'Удалить'} 
                                    variant='delete'
                                /> */}
                            </div>
                        </div>
                     ))}
                    </div>
                </div>    
            </div> 
        }
        </div>  
    )                 
}      
    


// export default Basket