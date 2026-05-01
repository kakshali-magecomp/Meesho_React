import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({setResponse}) => {
    const navigate = useNavigate();
    const [number, setNumber] = useState("");
    const [Country, setCountry] = useState("");
    const [loading, setLoading] = useState(false);

    const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    if((number.length != 10 || Country.length == 0)){
      alert("Invalid! Please try again.");
      setLoading(false);
      return;
    }

    const res = await fetch( //res is the response from the API not the actual data
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // tells the server that I'm sending data in json format
        },
        body: JSON.stringify({
          Name: number,
          Country: Country,
          userId: 1
        })
      }
    );
        const data = await res.json(); //data is the actual data from the API       
        console.log(data);
        alert("Login successful!");
        setResponse(data);
        setLoading(false);
        navigate("/home");
    }

    return(
        <div className="w-full h-auto flex items-center justify-center bg-pink-100">
            <div className="w-110 h-auto border-none rounded-lg flex flex-col items-center justify-center gap-5 bg-white mt-30 mb-10">
                <div className=" w-full h-full flex items-center justify-center border-r-2 border-gray-300">
                    <img src='upperimg.webp' className="w-full h-full rounded-t-lg border-r-2 border-none"/>
                </div>
                <div className="w-full h-full items-center justify-center p-4 w-80 m-0-auto pl-10">
                    <div><h2 className="text-[#353543] font-bold text-2xl font-family: 'Merriweather', serif;">Sign up To view your Profile</h2></div>
                    <div className="pt-10"><span className="text-gray-500 text-sm font-normal text-sm ">Country</span></div>
                    
                    <form onSubmit={sendData}>
                    <div className="pt-3 flex items-center justify-start">
                    <select className="border-b border-gray-300 px-2 py-2 w-20 ml-2 focus:outline-none" onChange={(e) => setCountry(e.target.value)}>
                        <option value="India" selected>🇮🇳+91</option>
                        <option value="USA">🇺🇸+1</option>
                        <option value="UK">🇬🇧+44</option>
                        <option value="Australia">🇦🇺+61</option>
                    </select>
                    <input type="number" value={number} placeholder="Phone Number" className="border-b border-gray-300 px-4 py-2 w-80 ml-5 focus:outline-none " onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="w-90 m-0-auto ">
                        <button className="bg-fuchsia-800 text-white  py-3 rounded-md w-90 mt-10 " type="submit"><b>Continue</b></button>
                    </div>
                    </form>
                
                </div>
                <div className="h-[200px] w-[90%] mx-auto mt-5 pt-[115px] pl-[75px] pr-[70px] text-center text-sm">
                    <span className="text-gray-500 text-sm font-light text-sm font-family: 'Merriweather', serif; fh">By continuing, you agree to Meesho's <a href="#" className="text-fuchsia-800 font-bold">Terms of Use</a> and <a href="#" className="text-fuchsia-800 font-bold">Privacy Policy</a>.</span>
                </div>
            </div>
        </div>
    )       
}
export default Login

