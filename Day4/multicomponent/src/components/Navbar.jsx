import { Link } from "./Link"


const Navbar = () => {
  return (
  <>
    <div className="bg-blue-600 text-white flex justify-between p-5 items-center">
        <Logo />
        <Link />
    </div>
    
  </>
  )
}

export default Navbar

const Logo =()=>{
    return (
        <>
            <div className="bg-white text-black w-30 h-15 flex justify-center items-center mx-10 rounded-2xl">
                Logo
            </div>        
        </>
    )
}