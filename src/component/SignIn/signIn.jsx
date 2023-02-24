import { SigninwithGooglePopUp, createDocumentFromRes } from "../../Asset/firebase"
import TheSignUp from "../signUp/signUp.component"
import "../SignIn/SigninPage.css"
import ExistUserSignIn from "../LogInexisting/existingUser.component"
import GoogleBtn from "./GoogleSignIn.component"
import { Link } from "react-router-dom"
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await SigninwithGooglePopUp();
        console.log(user.uid)
    }

    return (
        <div className="CoverAll">
            <div className="designWrapper">
                <div className="addContent">
                    <h2>New here??</h2>
                    <p>fill the form with your credentials and start a journey with us</p>
                    <button className="btn4"><Link to="/SignUp" className="BtnLink">Sign Up</Link> </button>
                </div>


                <div className="exist_container">
                    <ExistUserSignIn />
                    <GoogleBtn theHandler={logGoogleUser} />
                </div>

                {/* </div> */}
            </div>
        </div>



    )
}
export default SignIn;