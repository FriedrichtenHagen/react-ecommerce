import { Button } from "../ui/button"
import { useNavigate } from 'react-router-dom';

export function LoginSuggestion({item}){
    const navigate = useNavigate()

    function handleLoginRedirect(){
        navigate({pathname: '/loginpage'})
    }
    
    return(
        <div className="loginSuggestion">
            <div className="lsHeader">If you log in, you can save your {item} for next time.</div>
            <Button text="Log in" clickHandler={handleLoginRedirect}/>
        </div>
    )
}