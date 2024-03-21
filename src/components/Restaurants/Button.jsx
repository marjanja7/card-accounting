import classnames from 'classnames'
 function Button(props) {
     const {onClick,variant, title} =props

     return (
         <button onClick={onClick} className={classnames("w-full leading-5 bg-orange-500 rounded text-white text-xl shadow-md py-2 ",
         {
            'bg-orange-500': variant === 'default',
            'bg-orange-400': variant === 'orange',
            'bg-slate-200': variant === 'delete',
         },
     )}>{title}
         </button>
     )
 }

 export default Button