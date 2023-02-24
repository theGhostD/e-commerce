import { useNavigate } from "react-router-dom"

// import "./App.js"
const Container2 = ({ theVAlue }) => {
    const theNavigate = useNavigate()
    return (
        <div onClick={()=>theNavigate(theVAlue.route)} className="inner-container" style={
            { backgroundImage: `url(${theVAlue.imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className="small-Box" >
                <h1 >{theVAlue.title}</h1>
                <p>Shop Now</p>
            </div>
        </div>
    )

}
export default Container2