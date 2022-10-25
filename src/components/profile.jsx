import avatar from '../assets/avatar.jpg'
import shareButton from '../assets/share_button.svg'
import mobileShareButton from '../assets/mobile_share_button.svg'

const Profile = () => {
    return ( 
        <div className='profile'>
            <div className="flex flex-col justify-center items-center">
                <div className='mt-1'>
                    <img className="inline object-cover w-16 h-16 mr-2 rounded-full mt-10" src={avatar} alt="Profile" id="profile_img"></img>
                
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold text-[#101828]' id="twitter">Tere-joe</h2>
                        <h2 className='text-xl font-bold text-[#101828] mt-2 hidden' id="slack">Tere-joe</h2>
                    </div>
                </div>

                <div className='absolute top-0 left-[68%] mt-3 hidden md:flex'>
                    <button><img className="inline mt-2 w-10 h-10" src={shareButton} alt="Avatar Share Button"></img></button>
                </div>

                <div className='absolute top-0 right-0 pr-4 mt-3 md:hidden'>
                    <button><img className="inline mt-2 w-10 h-10" src={mobileShareButton} alt="Avatar Share Button"></img></button>
                </div>
                
            </div>
                
    
        </div>
        
    
     );
}
 
export default Profile;