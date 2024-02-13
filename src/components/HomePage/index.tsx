import Restaurants from "components/Restaurants/index";


const HomePage = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto shadow-md rounded-md py-2 font-serif">
        <h1 className="text-centr text-grey-500 text-2xl font-bold p-2">Рестораны</h1>
        <Restaurants/>
        
        </div>
        </>
    )
}
export default HomePage;