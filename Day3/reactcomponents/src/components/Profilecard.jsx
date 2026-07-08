import profile from "../assets/react.svg";
import "./Profilecard.css";
const Profilecard=()=>{
    return(<>
    
    <div className="profile-card">
      <img src={profile} alt="Profile" />

      <h2>Lokesh</h2>

      <p>Frontend Developer</p>
    </div>
    </>)
}
export default Profilecard;