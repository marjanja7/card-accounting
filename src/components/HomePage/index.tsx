import Restaurants from "components/Restaurants/index";

const HomePage = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto shadow-md rounded-md px-6 py-2">
        <h1 className="text-centr text-red-600 text-6xl">Home Page</h1>
        <Restaurants/>
        </div>
        </>
    )
}
export default HomePage;