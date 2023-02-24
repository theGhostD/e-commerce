import { useState } from "react"
import { createDocumentFromRes } from "../../Asset/firebase"
import { signupWithEP } from "../../Asset/firebase"
import "../signUp/signUp.css"
import { Link } from "react-router-dom"
const TheSignUp = () => {
    const detailsF = {
        displayName: "",
        email: "",
        password: "",
        confirmPass: ""
    }
    const [FormDetails, setFormDetails] = useState(detailsF)
    const { displayName, email, password, confirmPass } = FormDetails

    const formReset = () => {
        setFormDetails(detailsF)
    }
    const theOnchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormDetails({ ...FormDetails, [name]: value })

    }
    const submitBtn = async (e) => {
        e.preventDefault();
        if (password !== confirmPass) {
            alert("jjj")
        }
        try {
            const { user } = await signupWithEP(email, password);
            user.displayName = FormDetails.displayName;
            formReset()
            
        } catch (error) {
            console.log("this is the error", error)
        }
    }
    return (
        <div className="CoverAll">
            <div className="designWrapper">
                <div className="signUp_container">
                    <h1>Create Account!</h1>
                    <form onSubmit={submitBtn}>

                        <div className="form-container">

                            <input id="name" type="text" required onChange={theOnchange} name="displayName" value={displayName} />
                            <label>Enter display name </label>
                        </div>

                        <div className="form-container">

                            <input id="email" type="email" required onChange={theOnchange} name="email" value={email} />
                            <label >Enter your email address </label>
                        </div>

                        <div className="form-container">

                            <input id="password" type="password" required onChange={theOnchange} name="password" value={password} />
                            <label>Enter your password</label>
                        </div>

                        <div className="form-container">

                            <input id="confirm" type="password" required onChange={theOnchange} name="confirmPass" value={confirmPass} />
                            <label>Confirm Password</label>
                        </div>


                        <button type="submit" className="btn2">submit</button>
                    </form>
                </div>

                <div className="addContent">
                    <h2>Welcome Back!</h2>
                    <p>To Keep connected to us please login with your credentials </p>
                    <button className="btn4"><Link to='/SignIn' className="BtnLink">Sign In</Link></button>
                </div>

            </div>
        </div>

    )
}

export default TheSignUp