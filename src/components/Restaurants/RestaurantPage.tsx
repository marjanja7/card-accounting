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
        <div className="gap-4 flex">
         
            <div className='flex flex-col relative'>
                <img 
                    src={restaurant?.image} alt=""
                    className=" object-cover object-center w-full shadow-md"
                />
                <div className="text-xl text-blue-700 ">{restaurant?.name}</div>
                <p className="text-lg text-centr text-blue-500">{restaurant?.description}</p>

            </div>  
            
          
         </div> 
         <MenuOfRestaurant/>  
        </>
    )
}


export default RestaurantPage