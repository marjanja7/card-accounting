import {  useState, useEffect } from "react"
// import { CartItemType } from "./MenuOfRestaurant"
import { Link } from "react-router-dom"
import OrderForm from "./OrderForm"
import Button from "components/Restaurants/Button"



const Cart = () => {

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems'))|| [] )  
  useEffect(() => {
    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
  }, [cartItems])

  const [totalCost, setTotalCost] = useState(
      cartItems.length > 0
          ? cartItems.reduce((sum, item) =>sum + Math.round(item.price * item.quantity),0
          ) : 0  
  ) 

  useEffect(()=> { 
    setTotalCost (cartItems.length > 0 
      ? cartItems.reduce( (sum, item) =>sum + Math.round(item.price * item.quantity),0
    ) :0
    )},[cartItems])

    const deleteCart = (ItemId) => {
        const filteredItems = cartItems.filter ((item) => item.id !== ItemId)
        setCartItems(filteredItems)
    
    localStorage.setItem('cartItems' , JSON.stringify(filteredItems));
    }

//     const [modalIsOpen, setModalIsOpen] = useState(false)
  
//     const openModal = () => {
//     setModalIsOpen(true) 
// }  
//     const closeModal = () => {
//     setModalIsOpen(false) 
// }  
    
    return (
        <div>
           
            {setCartItems.length === 0? (
                <div className="max-w-4xl m-avto bg-indigo-50 m-5 flex justify-evenly rounder-md shadow-md py-6 md:px-4 lg:px-2 xl:px-0 py-4">
                  <div className='flex flex-col items-center gap-10'>
                    <p className='text-3xl text-orange-600 font-bold'>ВАША КОРЗИНА ПУСТА</p>
                    <p className='text-2xl text-orange-400 font-bold'>ВАША КОРЗИНА ПУСТА</p>
                    <Link to={'/'}>
                        <Button
                            title={'Вернуться на главную'}
                            description={'Перейти на главную'}
                            variant='orange'
                        />
                    </Link>
                  </div> 
                </div>
                ):(
                <div className="max-w-4xl m-auto px-6 py-10 ">
                    <p className="text-3xl pb-10 text-center font-bold text-grey-400">Ваш заказ:</p>
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col gap-4 px-4 py-5 bg-slate-100 rounded-2xl justify-between ">
                            {cartItems.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex gap-5">
                                        <img alt='' src={item.image} className="object-cover object-center rounded-xl w-32 h-32"></img>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xl text-slate-800 py-1 font-bold">{item.name}</p>
                                            <p className="text-base text-orange-500 py-1 font-bold">Цена:{''} {item.price} ₽</p>
                                            <p className="text-sm text-slate-600 py-2 font-medium">Колличество: </p>
                                            <p className="text-base text-orange-500 py-3 font-bold">
                                              Сумма:{''} {(item.price * item.quantity).toFixed(2)} ₽
                                            </p> 
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                    <Button onClick={() => deleteCart(item.id)}
                                         title={'Удалить'} 
                                         variant='orange'
                                    />
                                    </div>
                                </div>
                            )})}
                            <div className='text-right text-xl font-semibold px-4 mt-6 mb-2'>
                               Итого: {totalCost}  ₽
                            </div>
                        </div>
                       <div className='w-full my-4'>
                              <p className="pl-4 py-1 md: text-center text-xl font-bold ">
                              Оформить   заказ
                             </p> 
                             <OrderForm></OrderForm>
                         
                             {/* <Button
                                 title={'Оформить заказ'}
                                 description={'Оформить заказ'}
                                 variant='default'
                                 onClick={openModal}
                             /> */}
                         </div>    
                         
                        
                    </div>
                        
                </div> )
         }
       
        </div>  )
                          
    }   


 export default Cart