import { Link } from "react-router-dom";

const NavBar = () => {

return (
    <div className='max-w-7xl mx-auto shadow-md rounded-md'>
    <div className="flex justify-between p-4 bg-orange-400">
        <nav className='gap-8 justify-between text-center flex mx-auto  text-xl font-extrabold tracking-tight text-white'>
            {/* <Link to='/restaurant/:slug'>Рестораны</Link> */}
            <Link to='/'>Главная страница</Link>
        </nav>
    </div>
    </div>
)
}
export default NavBar;