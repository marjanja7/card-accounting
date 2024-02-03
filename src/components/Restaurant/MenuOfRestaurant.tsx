import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

type MenuItemType = {
    id: number
    name: string
    image: string
    description: string
    price: number

}
const MenuOfRestaurant = () => {
    const {slug} = useParams()
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
    
    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then(res => res.json())
        .then(data => setMenuItems(data))
    },[slug])

    console.log(menuItems)
    return (
        <>
            <div className="flex gap-4">
                <div className="w-3/4 ml-20 gap-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    
                            <div className="flex flex-col m-2 border rounded-xl bg-white gap-4"></div>
                        

                </div>

            </div>
        </>
    )

}
export default MenuOfRestaurant