import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

// import { useParams } from "react-router-dom"

type RestaurantsType = {
    id: number
    name: string
    image: string
    description: string
    price: number
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
                         <div className="flex flex-col  p-5m-2 border rounded-xl bg-white gap-4">
                         <div key={restaurant.id} className='flex flex-col relative'>
                             <img src={restaurant?.image} alt=""
                                 className="h-48 object-cover object-center w-full shadow-md rounded-xl"
                             />
                             <div className="text-xl text-blue-700 mb-2 font-bold">{restaurant?.name}</div>
                             <p className="text-centr text-sm leading-5 text-blue-500">{restaurant?.description}</p>
                             <Link to={`/restaurant/${restaurant.slug}`}>
                                 <button className="leading-5 bg-blue-600 rounded text-white text-xl shadow-md py-2">
                                     Выбрать
                                 </button>
                            </Link>

                         </div>
                     </div>
                    ))}
                    

            </div>

            
        </>
    )

}



export default Restaurants