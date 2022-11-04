import { useState } from "react";

const Contact = () => {
    const [msgValue, setMsgValue] = useState("")
    const [error, setError] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    
    
    const handleChange =(e) =>{
        e.preventDefault();
        msgValue === "" ? setError(true): setError(false)
        setLastName("")
        setFirstName("")
        setEmail("")
        setMsgValue("")
       
    }


    return ( 
        <div className="contact">
            <div className="block p-6 mt-8 rounded-lg bg-white md:max-w-[80%] m-auto">
                <form action="" onSubmit={(e) => handleChange(e)} >
                    <div className="mb-4">
                        <p className="text-4xl font-semibold text-[#101828]">Contact Me</p>
                        <div className="mt-3">
                            <p className="font-normal text-[#475467] text-xl">Hi there, contact me to ask me about anything you have in mind.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="form-group mb-6">
                            <label for="name" className="font-medium text-sm text-[#344054]">First name</label>
                            <input type="text" name="name" 
                            required className="form-control block w-full px-3.5 py-2.5 text-base font-normal text-[#101828] placeholder:text-[#667085] bg-white border border-solid border-[#D0D5DD] rounded-lg focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-[0px_0px_0px_4px_#D1E9FF]" 
                            id="first_name"
                            placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            
                        </div>
                        <div className="form-group mb-6">
                            <label for="name" className="font-medium text-sm text-[#344054]">Last name</label>
                            <input type="text" required className="form-control block w-full px-3.5 py-2.5 text-base font-normal text-[#101828] placeholder:text-[#667085] bg-white bg-clip-padding border border-solid border-[#D0D5DD] rounded-lg focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-[0px_0px_0px_4px_#D1E9FF]" id="last_name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        
                    </div>
                    <div className="form-group mb-6">
                        <label for="email" className="font-medium text-sm text-[#344054]">Email</label>
                        <input type="email" required className="form-control block w-full px-3.5 py-2.5 text-base font-normal text-[#101828] placeholder:text-[#667085] bg-white bg-clip-padding border border-solid border-[#D0D5DD] rounded-lg focus:text-[#101828] focus:bg-white focus:border-[#84CAFF] focus:outline-none focus:shadow-[0px_0px_0px_4px_#D1E9FF]" id="email" placeholder="yourname@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <span className="text-sm text-[#475467]">This is a hint text to help user.</span>
                    </div>
                    <div className="form-group mb-6">
                        <label for="text" className="font-medium text-sm text-[#344054]">Message</label>
                        <textarea className={error ? "focus:border-red-500 form-control w-full p-2 text-base font-normal text-[#101828] placeholder:text-[#667085] border border-solid border-[#D0D5DD] rounded-lg focus:outline-none focus:shadow-[0px_0px_0px_4px_#F69697]"  : "form-control w-full p-2 text-base font-normal text-[#101828] placeholder:text-[#667085] border border-solid border-[#D0D5DD] rounded-lg focus:border-blue-600 focus:outline-none focus:shadow-[0px_0px_0px_4px_#D1E9FF]"} rows="4"id="message" placeholder="Send me a message and I'll reply you as soon as possible.." value={msgValue} onChange={(e) =>setMsgValue(e.target.value)}/>
                        <p className={error ? "mb-3 text-normal text-red-500" : "hidden"}>Please enter a message</p>

                    </div>
                    

                    <div className=" form-group flex mb-6 form-check">
                        <input type="checkbox" className="form-check-input h-4 w-4 border border-[#D0D5DD] rounded-md bg-white checked:bg-[#1570EF] checked:border-[#1570EF] mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                        <label className="form-check-label inline-block text-base font-normal text-[#475467]">You agree to providing your data to Terejoe who may contact you.</label>
                    </div>
                    
                    
                    <button type="submit" className="disabled w-full mb-4 bg-[#1570EF] hover:border-[#175CD3] hover:bg-[#175CD3] focus:border-[#175CD3] focus:bg-[#175CD3] disabled:bg-[#B2DDFF] disabled:border-[#B2DDFF] border border-solid shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05)] py-3 px-5 rounded-lg text-white text-base font-semibold" id="btn__submit" >Send message</button>
                </form>
            </div>
            
        </div>
    );
    
}
 
export default Contact;