import { useState } from "react";
import { LoginUser } from "../../Asset/firebase";
const ExistUserSignIn = () => {
  const initialLogDetails = {
    Email: "",
    Password: "",
  };
  const [NewLogDetails, setNewLogDetails] = useState(initialLogDetails);
  const { Email, Password } = NewLogDetails;

  const formReset = () => {
    setNewLogDetails(initialLogDetails);
  };
  const OnchangeHandlerInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewLogDetails({ ...NewLogDetails, [name]: value });
  };

  console.log(NewLogDetails);

  const TheSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await LoginUser(Email, Password);

      formReset();
    } catch (error) {
      console.log("this is the error encounter ", error);
    }
  };
  return (
    <div>
      <h1>Login To Your Account</h1>
      <form onSubmit={TheSubmitHandler}>
        <div className="form-container">
          <input
            type="email"
            name="Email"
            onChange={OnchangeHandlerInput}
            value={Email}
          />
          <label>enter your email</label>
        </div>

        <div className="form-container">
          <input
            type="password"
            name="Password"
            onChange={OnchangeHandlerInput}
            value={Password}
          />
          <label>enter your Password</label>
        </div>

        <button type="submit" className="btn1">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default ExistUserSignIn;
