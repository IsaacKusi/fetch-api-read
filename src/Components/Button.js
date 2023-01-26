
import './button.css'

const Button = ({buttonText, changePostHandler, value})=>{
    return <>
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
            <button value={value}  onClick={changePostHandler}>{buttonText}</button>
        </form>
    </>
}

export default Button;