import "./body.css"
import Tierlist from "./components/Tierlist"
import Cardbank from "./components/Cardbank"
import Annotation from "./components/Annotation"

const Body = () => {
  return (
    <div className='BodyContainer'>
        <Cardbank/>
        <Tierlist/>
        <Annotation/>
    </div>
  )
}

export default Body