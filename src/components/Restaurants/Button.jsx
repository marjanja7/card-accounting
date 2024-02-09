
 function Button(props) {
     const {changeCount} =props

     return (
         <button onClick={changeCount} className="leading-5 bg-orange-600 rounded text-white text-xl shadow-md py-2">
         </button>
     )
 }

 export default Button