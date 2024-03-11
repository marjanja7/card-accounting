
 function Button(props) {
     const {onClick, title} =props

     return (
         <button onClick={onClick} className="w-full leading-5 bg-orange-500 rounded text-white text-xl shadow-md py-2 ">{title}
         </button>
     )
 }

 export default Button