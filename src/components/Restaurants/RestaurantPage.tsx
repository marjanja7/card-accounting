import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuOfRestaurant from "components/Restaurants/MenuOfRestaurant"

type RestaurantType = {
    id: number
    name: string
    slug: string
    phone: number
    email: string
    address: string
    cuisine: string
    image: string
    openAt: Date
    closeAt: Date
    description: string
}

const RestaurantPage = () => {

    const {slug} = useParams()
    const [restaurant, setRestaurant] = useState<RestaurantType>()

    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
        .then((response) => response.json())
        .then((data) => setRestaurant(data))
    },[slug])

    return (
        <>
        <div className="max-w-7xl mx-auto shadow-md rounded-md py-2 font-serif">
         
            <div className=' flex flex-col relative'>
                <img 
                    src={restaurant?.image} alt=""
                    className="opacity-60 shadow-orange-100 h-72 object-cover object-center w-full shadow-md"
                />
                <div className="text-4xl font-bold text-white bg-orange-400 p-2">{restaurant?.name}</div>
                <p className="text-lg text-centr text-orange-500">{restaurant?.description}</p>
                
                <div className="flex font-sans italic font-medium tracking-tight ">
                    <p>{restaurant?.address}</p>
                    <p>{restaurant?.phone}</p> 
                    
                </div>
         <MenuOfRestaurant/>  
         </div> 
         </div> 
        </>
    )
}


export default RestaurantPage