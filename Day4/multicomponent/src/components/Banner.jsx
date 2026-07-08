import Bannerimage from '../assets/1.jpg'
import Cardone from '../assets/2.jpg'
const Banner = () => {
  return (
    <>
    <div>
        <img className='w-full h-70 p-3' src={Bannerimage} alt="Banner Image" />
    </div>
    </>
  )
}

export default Banner

export const Cardsdisplay=()=>{
    return (
        <>
        <div className="p-10">
            <div className="bg-amber-300 p-5 h-90 flex justify-between gap-5 flex-wrap">
                <div className=" p-5 rounded-lg h-80 w-60 bg-white">
                    <img src={Cardone} alt="" />
                    <h2>Piece Name</h2>
                    <p>Piece Detail</p>
                    <button className='bg-blue-300 text-white w-50 mt-2 flex justify-center text-center'>Play Now</button>
                </div>
                <div className=" p-5 rounded-lg h-80 w-60 bg-white">
                    <img src={Cardone} alt="" />
                    <h2>Piece Name</h2>
                    <p>Piece Detail</p>
                    <button className='bg-blue-300 text-white w-50 mt-2 flex justify-center text-center'>Play Now</button>
                </div>
                <div className=" p-5 rounded-lg h-80 w-60 bg-white">
                    <img src={Cardone} alt="" />
                    <h2>Piece Name</h2>
                    <p>Piece Detail</p>
                    <button className='bg-blue-300 text-white w-50 mt-2 flex justify-center text-center'>Play Now</button>
                </div>
                <div className=" p-5 rounded-lg h-80 w-60 bg-white">
                    <img src={Cardone} alt="" />
                    <h2>Piece Name</h2>
                    <p>Piece Detail</p>
                    <button className='bg-blue-300 text-white w-50 mt-2 flex justify-center text-center'>Play Now</button>
                </div>
                <div className=" p-5 rounded-lg h-80 w-60 bg-white">
                    <img src={Cardone} alt="" />
                    <h2>Piece Name</h2>
                    <p>Piece Detail</p>
                    <button className='bg-blue-300 text-white w-50 mt-2 flex justify-center text-center'>Play Now</button>
                </div>
            </div>
        </div>
        
        </>
    )
}