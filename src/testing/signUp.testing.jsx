import { useState } from "react"
import {createUserWithEmailAndPass,creatingUser} from "../testing/firebaseTesting/firebasetest"

const SignUpPage = () => {


    const initailDetails = {
        DisplayName: "",
        Email: "",
        Password: "",
        ConfirmPass: ""
    }

    const [formDetails, setFormDetails] = useState(initailDetails);
    const { DisplayName,Email,Password,ConfirmPass } = formDetails

    console.log(formDetails)

    const OnChangeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormDetails({...formDetails,[name] : value})
    }

    const onSubmitHandler= (e)=>{
        e.preventDefault();
        if(Password !== ConfirmPass){
            alert("incorrect pass")
            return
        }

        try{
            const response = createUserWithEmailAndPass(Email,Password);
            response.then(function(result){
                const {DisplayName} = result
                console.log(result)
                creatingUser(result,DisplayName)
            })
        }catch(e){

        }

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>display Name </label>
                <input  required type="text" name="DisplayName" onChange={OnChangeHandler} value={DisplayName} />

                <label>Email</label>
                <input  required type="Email" name="Email" onChange={OnChangeHandler} value={Email} />

                <label>Enter Password</label>
                <input  required type="password" name="Password" onChange={OnChangeHandler} value={Password} />

                <label>Confirm Password</label>
                <input  required type="password" name="ConfirmPass" onChange={OnChangeHandler} value={ConfirmPass} />

                <button type="submit">submit form </button>
            </form>
        </div>
    )
}
export default SignUpPage