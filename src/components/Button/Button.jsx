

const Button = ({label, callback, color}) => {

    return (
        <>
            <button style={{backgroundColor:color}} className="w-36 rounded-lg p-2 text-white border-1 border-slate-800" onClick={()=>callback()}>{label}</button>
        </>
    )
}

export default Button