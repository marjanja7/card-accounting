import { useEffect,useState } from "react"
// import { useParams } from "react-router-dom"

type RestaurantsType = {
    id: number
    name: string
    image: string
    description: string
    price: number

}
const Restaurants = () => {
    // const {slug} = useParams()
    const [restaurants, setRestaurants] = useState<RestaurantsType[]>([])
    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/`)
        .then((response) => response.json())
        .then((data) => setRestaurants(data))
    },[])

    
    return (
        <>
            <div className="flex gap-4">
                <div className="w-3/4 ml-20 gap-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    {restaurants.map((restaurant) => (
                         <div className="flex flex-col m-2 border rounded-xl bg-white gap-4">
                         <div key={restaurant.id} className='flex flex-col relative'>
                             <img src={restaurant?.image} alt=""
                                 className="h-72 object-cover object-center w-full shadow-md"
                             />
                             <div className="text-xl text-blue-700 ">{restaurant?.name}</div>
                             <p className="text-lg text-centr text-blue-500">{restaurant?.description}</p>

                         </div>
                     </div>
                    ))}
                       
                        

                </div>

            </div>
        </>
    )

}



export default Restaurants