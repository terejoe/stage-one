import zuriLogo from "../assets/zuri_logo.svg"
import ingreLogo from "../assets/ingre_logo.svg"

const Footer = () => {
    return (  
        <div className="footer max-w-[90%] mx-auto mt-14">
            <div>
                <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>

            <div className="md:flex justify-between mb-4">
                <img src={zuriLogo} alt="Zuru Icon" className="mb-3"></img>
                <p className="text-[#667085] font-normal text-base mb-3">HNG Internship 9 Frontend Task</p>
                <img src={ingreLogo} alt="Zuru Icon" className="mb-3"></img>
            </div>
        </div>
    );
}
 
export default Footer;