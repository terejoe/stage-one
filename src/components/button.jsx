import { FaGithub } from 'react-icons/fa'
import slackIcon from '../assets/slack.svg'
 
const Button = () => {
  return ( 
    <div className="mt-4 mx-3">
      <div className="grid grid-rows gap-4 max-w-[1152px] mx-auto">
        <a href="https://twitter.com" id=""className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Twitter Link</a>
        <a href="https://training.zuri.team/" id="btn__zuri" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Zuri Team</a>
        <a href="https://books.zuri.team" id="books" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<terejoe>" id="book__python" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Python Books</a>
        <a href="https://background.zuri.team" id="pitch" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" className="bg-[#EAECF0] hover:bg-[#D0D5DD] px-8 py-6 text-sm md:text-lg font-medium text-[#101828] rounded-lg border-solid text-center">Design Books</a>
      </div>

      <div className="hidden md:flex mt-4">
        <div className='mx-auto flex'>
          <img src={slackIcon} className="mr-4" alt='Slack Icon'></img>
          <FaGithub size={25}/>
        </div>
      </div>
    </div>
  );
}
 
export default Button;