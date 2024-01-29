import { Link } from "react-router-dom";

const Header = () => {

return (
    <div className="flex justify-between px-10">
        <nav className='gap-8 justify-between text-center flex mx-auto my-12 text-2xl font-extrabold tracking-tight text-gray-700'>
            <Link to='/expenses'>Учет расходов</Link>
            <Link to='/income'>Учет доходов</Link>
        </nav>
    </div>
)
}
export default Header;