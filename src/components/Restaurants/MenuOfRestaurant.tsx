import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from "./Button"

type ItemType = {
    id: number
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

    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then((response) => response.json())
        .then((data) => setItems(data))
    },[slug])

        return (
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
         {items.map((item) => {
            return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src={item.image} alt=""
              className="object-cover w-full h-full rounded-t"
              />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">{item.name}</div>
              <p className="text-sm text-gray-900">{item.description}</p>
              <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              {Math.round (item.price) } ₽
              </div>
            </div>
            <Button/>
            {/* <button className="leading-5 bg-blue-600 rounded text-white text-xl shadow-md py-2">
                                     Корзина
                                 </button> */}
          </div>
        </div>
        )})}
        </div>
        

)
}

export default MenuOfRestaurant