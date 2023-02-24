import Container2 from "./container"

const Directory = (props) => {
    const { theArr } = props
    return (
        <div className="main-container">
            {
                theArr.map((value) => {
                    return (
                        <Container2 theVAlue={value} key={value.id} />
                    )
                })
            }

        </div>
    )

}
export default Directory;