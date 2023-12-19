function Button({title, handleClick,type} ){

    return (
        <button type={type} onClick={event =>handleClick(event)} className='no-underline group inline-flex justify-center items-center rounded-md shadow-sm font-medium px-4 py-2 focus:outline-none transition-all duration-200 disabled: opasity-50 w-full bg-primary-600 hover:bg-primary-700 text-white disabled:bg-primary-200'>
            {title}
        </button>
    )
}

export default Button;