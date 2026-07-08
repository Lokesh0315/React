import heroImage from "../assets/hero.png"
import "./Herobanner.css"
const Herobanner=()=>{
    return(<>
    
    <div className="hero">

            <img src={heroImage} alt="" />

            <div className="content">

                <h1>Welcome To React</h1>

                <button>Explore</button>

            </div>

        </div>
    </>)
}
export default Herobanner