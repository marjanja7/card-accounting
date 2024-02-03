import { Link } from "react-router-dom";

const NavBar = () => {

return (
    <div className='max-w-7xl mx-auto shadow-md rounded-md px-6 py-2'>
    <div className="flex justify-between px-10 bg-green-100">
        <nav className='gap-8 justify-between text-center flex mx-auto my-12 text-2xl font-extrabold tracking-tight text-gray-700'>
            <Link to='/restaurant/:slug'>Меню</Link>
            <Link to='/'>Главная страница</Link>
        </nav>
    </div>
    </div>
)
}
export default NavBar;