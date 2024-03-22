import { Link } from "react-router-dom";

const NavBar = () => {

return (
    <div className='max-w-7xl mx-auto shadow-md rounded-md'>
    <div className="flex justify-between p-4 bg-orange-400">
        <nav className='gap-52 justify-between text-center flex mx-auto  text-xl font-extrabold tracking-tight text-white'>
            
            <Link to='/'>Bon Appetit</Link>
            <Link to='/Cart/index'>Корзина</Link>
        </nav>
    </div>
    </div>
)
}
export default NavBar;