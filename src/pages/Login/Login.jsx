import iconSamba from "../../assets/iconSamba.svg"
import { Link} from "react-router-dom";

export default function Login(){
    return(
        <section className="flex w-screen h-screen bg-customServer items-center">
            <div className="w-1/2 flex justify-center">
                <div className="bg-white w-[480px] h-[520px] flex flex-col items-center text-customBlack">
                    <h1 className="text-[32px] mt-16 font-secular">Welcome to Samba Server!</h1>
                    <img src={iconSamba} alt="" className="w-[100px] h-[100px] mt-10" />
                    <h4 className="text-base text-center font-roboto p-14">
                        This Samba Server website will allow you to manage and display shared resources, through an intuitive graphical interface, for OpenSUSE which is a Linux distribution
                    </h4>
                </div>
            </div>
            <div className="bg-green-70 w-1/2 h-screen flex items-center justify-center">
                <div className=" flex flex-col items-center">
                    <h2 className="font-secular text-2xl">Login</h2>
                    <div>
                        <h4 className="text-base mt-10 font-secular">User</h4>
                        <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your username"
                        className="w-64 h-9 mt-3 border-b-[1px] border-r-[1px] border-customBlack rounded-lg focus:outline-none p-1 font-roboto text-sm bg-white"
                        />
                        <h4 className="text-base mt-14 font-secular">Password</h4>
                        <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="w-64 h-9 mt-3 border-b-[1px] border-r-[1px] border-customBlack rounded-lg focus:outline-none p-1 font-roboto text-sm bg-white"
                        />
                    </div>
                    <Link to={"/Navbar/Start-Up"} className="bg-customBlack font-roboto mt-14 w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
                        <p>Send</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}