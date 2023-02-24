

const GoogleBtn = (props) => {
    return (
        <div className="theOther">
            <p>or </p>
            <button onClick={props.theHandler} className="btn3">SignIn With Google</button>
        </div>

    )
}

export default GoogleBtn