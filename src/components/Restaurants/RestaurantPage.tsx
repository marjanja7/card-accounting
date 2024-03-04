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
        <div className="flex">
        <div className="relative max-w-7xl mx-auto shadow-md rounded-md font-serif">
         
            <div className=' flex flex-col relative p-4 m-2 bg-white'>
                <div className="relative ">
                    <img 
                        src={restaurant?.image} alt=""
                        className="h-72 object-cover object-center w-full shadow-md rounded-xl"
                    />
                    <div className="absolute top-12 left-0 text-black bg-orange-400 px-4 py-2 rounded-xl">
                        <span className="text-4xl font-bold">{restaurant?.name}</span>
                    </div>
                    <div className="absolute top-40 right-0 bg-white opacity-70 left-80 text-orange-500 text-right px-2 rounded-xl">
                        <span className="text-lg text-orange-500">{restaurant?.description}</span>
                    </div>
                </div>
                
                <div className="h-8 my-5  w-full font-sans italic font-medium tracking-tight bg-yellow-200 border rounded-xl">
                    <div className="flex justify-between ">
                        <div>{restaurant?.address}</div>
                        <div>{restaurant?.phone}</div> 
                        <div>{restaurant?.email}</div>
                    </div>   
                </div>
            <MenuOfRestaurant/>  
            </div>
            </div> 
        </div> 

        </>
    )
}


export default RestaurantPage