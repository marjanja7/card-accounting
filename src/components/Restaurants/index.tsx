import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
// import Button from "./Button"

// import { useParams } from "react-router-dom"

type RestaurantsType = {
    id: number
    cuisine: string
    name: string
    image: string
    description: string
    slug: string

}
const Restaurants = () => {
       const [restaurants, setRestaurants] = useState<RestaurantsType[]>([])
    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
        .then((response) => response.json())
        .then((data) => setRestaurants(data))
    },[])

    
    return (
        <>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
               
                    {restaurants.map((restaurant) => (
                        
                        <div key={restaurant.id} className='flex flex-col p-4 m-2 border rounded-xl bg-white gap-4 relative'>
                            <div className="relative">
                                <img src={restaurant?.image} alt=""
                                    className="h-48 object-cover object-center w-full shadow-md rounded-xl"
                                />
                            </div>
                            <div className="absolute rounded-xl border top-0 left-0 text-white bg-orange-400  px-3 ">
                                <span className="text-md ">{restaurant?.cuisine}</span>
                            </div>
                            <div className="h-12"><p className="text-xl font-bold rounded-xl border px-2 text-black bg-orange-400">{restaurant?.name}</p></div>
                            <p className="h-36 overflow-y-scroll overscroll-none text-centr text-sm leading-5 text-grey-500">{restaurant?.description}</p>
                            <Link to={`/restaurant/${restaurant.slug}`}>
                               
                                <button className="w-full leading-5 bg-orange-500 rounded text-white text-xl shadow-md py-2 mt-1 mb-4 mr-1">
                                     Выбрать
                                 </button> 
                            </Link>

                         </div>
                    
                    ))}
                    

            </div>

            
        </>
    )

}



export default Restaurants