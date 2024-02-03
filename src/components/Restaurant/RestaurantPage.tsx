import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        .then(res => res.json())
        .then(data => setRestaurant(data))
    },[slug])

    return (
        <>
            <div className='flex flex-col relative '>
                <img 
                    src={restaurant?.image} alt=""
                    className="h-72 object-cover object-center w-full shadow-md"
                />
                <div className="text-xl text-blue-700 ">{restaurant?.name}</div>
                <p className="text-lg- text-centr text-blue-500">{restaurant?.description}</p>

            </div>
        </>
    )
}


export default RestaurantPage