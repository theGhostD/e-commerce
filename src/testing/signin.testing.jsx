import { SigninUser,creatingUser } from "./firebaseTesting/firebasetest"
import SignUpPage from "./signUp.testing"
const SignInPage = () => {

    const OnclickFun = () => {
        const response =  SigninUser()
        response.then(function(result){
            console.log(result)
            creatingUser(result)
        })
    }


    return (
        <div>
            <p>this is the signIn page</p>
            <button onClick={OnclickFun}>SignInWith Popup</button>
            <div><SignUpPage /></div>
        </div>
    )
}
export default SignInPage