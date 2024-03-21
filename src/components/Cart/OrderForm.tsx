import { useState, useEffect } from "react"
import Button from "components/Restaurants/Button"
import {CartItemType} from "components/Restaurants/MenuOfRestaurant"


export type OrderType = {
    customerName: string
    phone: number
    email: string
    restaurantId: number
    cartItems: [item : { itemId: number; quantity: number; price: number}]
}

const OrderForm = () => {
    const [cartItems] = useState(
        JSON.parse(localStorage.getItem('cart')!) || []
    )


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const[customerName, setCustomerName] = useState<string>('')
    const[customerNameError, setCustomerNameError] = useState(false)

    const[phone, setPhone] = useState<string>('')
    const[phoneError, setPhoneError] = useState(false)
    
    const[email, setEmail] = useState<string>('')
    const[emailError, setEmailError] = useState(false)
    // let [isOpen, setIsOpen] = useState(false)
    // let [warning, setWarning] = useState(false)

    const handleSubmitForm = (event: any) => {
        event.preventDefault()

        const reguestBody = {
            customerName,
            phone,
            email,
            restaurantId: cartItems[0].restaurantId,
            cartItems: cartItems.map((item: CartItemType) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
            }))
        }
        
        if (customerName === '') {
            setCustomerNameError(true)
          return
        }
        if (phone === '') {
            setPhoneError(true)
          return
        }
        if (email === '') {
            setEmailError(true)
          return
        }
        if (customerName === '' || phone === '' || email === '') {
            return
        }
               
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/order`, {
            method: 'POST',
            body: JSON.stringify(reguestBody)
        })
        .then (resronce => {
            if (resronce.ok) {
                alert ('Ваш заказ успешно оформлен')
                
                clearCart()

            }else {
                alert ('Произошла ошибка')
            }
               })
    }


    const clearCart = () => {
        cartItems([]) 
    }


    return (
        
        <div className=" flex items-center justify-center">
            <div className="flex flex-col bg-white py-8 px-10 h-4/5 w-4/5 md:w-3/4 lg:w-2/4 gap-5 relative overflow-auto rounded-3xl">
                {/* <p className="text-md md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
                    Проверьте Ваш заказ и заполните форму
                </p> */}
                {/* <div className="flex flex-col gap-10">
                    <div className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between">
                        {cartItems.map((item: CartItemType) => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div className="flex gap-5 ">
                                    <img src={item.image} alt=""
                                         className="object-cover object-center rounded-3xl w-20 lg:w-32 lg:h-32 md:w-24 md:h-24" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-lg md:text-xl lg:text-2xl pb-1 md:pb-2 font-bold text-slate-800">
                                            {item.name}
                                        </p>
                                        <p className="text=sm md:text-base font-bold text-orange-500">
                                            Цена: {item.price}
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm md:text-base font-medium text-slate-600">
                                                Колличество: {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <form onSubmit={handleSubmitForm}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">
                                Фамилия Имя <span className="text-orange-400">*</span>
                            </p>
                            {customerNameError &&
                                <p className="text-sm text-orange-400">Заполните поле</p>
                            }
                            <input type="text"
                                   value={customerName}
                                   onFocus={() => setCustomerNameError(false)} 
                                   onChange={(event) => setCustomerName(event.target.value)}
                                   name="customerName"
                                   placeholder="Введите фамилию и имя"
                                   className="text-slate-900 bg-slate-100 rounded-xl py-3 px-4 outline-0 text-base"
                            />
                            
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">
                                Телефон <span className="text-orange-400">*</span>
                            </p>
                            {phoneError &&
                                <p className="text-sm text-orange-400">Заполните поле</p>
                            }
                            <input type="text"
                                   value={phone}
                                   onFocus={() => setPhoneError(false)}
                                   onChange={(event) => setPhone(event.target.value)}
                                   name="phone"
                                   placeholder="Введите телефон"
                                   className="text-slate-900 bg-slate-100 rounded-xl py-3 px-4 outline-0 text-base"
                            />
                            
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">
                                E-mail <span className="text-orange-400">*</span>
                            </p>
                            {emailError &&
                                <p className="text-sm text-orange-400">Заполните поле</p>
                            }
                            <input type="text"
                                   value={email}
                                   onFocus={() => setEmailError(false)}
                                   onChange={(event) => setEmail(event.target.value)}
                                   name="email"
                                   placeholder="Введите e-mail"
                                   className="text-slate-900 bg-slate-100 rounded-xl py-3 px-4 outline-0 text-base"
                            />
                            
                        </div>
                        <p className="text-xs text-center font-medium text-slate-900 py-3 px-4 border border-red-200 rounded-xl">
                            Ожидайте Ваш заказ в ближайшее время!
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center pt-3">
                        <Button
                        
                        title='Отправить'
                        type='submit'
                        variant='orange'
                        />
                    </div>
                </form>
            </div>
        </div>
   

    )
}

export default OrderForm