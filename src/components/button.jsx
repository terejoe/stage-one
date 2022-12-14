import { FaGithub } from 'react-icons/fa'
import slackIcon from '../assets/slack.svg'
import Profile from './profile';
import {Link} from "react-router-dom"
 
const Button = () => {
  return (
    <div className=''>
      <Profile/>
      <div className="mt-4 mx-4">
        <div className="grid grid-rows gap-4 max-w-[1152px] mx-auto">
          <a href="https://twitter.com/tere__joe?s=09" id="twitter"className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Twitter Link</a>
          <a href="https://training.zuri.team/" id="btn__zuri" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Zuri Team</a>
          <a href="https://books.zuri.team" id="books" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=Terejoe" id="book__python" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Python Books</a>
          <a href="https://background.zuri.team" id="pitch" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Background Check for Coders</a>
          <a href="https://books.zuri.team/design-rules" id="book__design" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Design Books</a>
          <Link to="/contact" id="contact" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Contact Me</Link>
        </div>

        <div className="flex mt-6">
          <div className='mx-auto flex'>
            <img src={slackIcon} className="mr-4" alt='Slack Icon'></img>
            <FaGithub size={25}/>
          </div>
        </div>
      </div>
    </div> 
    
  );
}
 
export default Button;