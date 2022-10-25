import zuriLogo from "../assets/zuri_logo.svg"
import ingreLogo from "../assets/ingre_logo.svg"

const Footer = () => {
    return (  
        <div className="footer max-w-[80%] mx-auto mt-14">
            <div>
                <hr class="hidden md:flex my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>

            <div className="hidden md:flex justify-between mb-4">
                <img src={zuriLogo} alt="Zuru Icon"></img>
                <p className="text-[#667085] font-normal text-base">HNG Internship 9 Frontend Task</p>
                <img src={ingreLogo} alt="Zuru Icon"></img>
            </div>
        </div>
    );
}
 
export default Footer;