const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-black px-8 md:px-[100px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p>Talk it out is an online platorm to freely express your emotions and feelings.</p>
         <p>No one to judge you. You can hide your identity and feel safe.</p>
         <p>  Connect to a worldwide community and find solutions to your problems.</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Share Your Feeling</p>
         <p>Submit an Article</p>
         <p>About Us</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Privacy Policy</p>
         <p>Terms & Conditions</p>
         <p>Terms of Service</p>
       </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Talk It Out 2024</p>
    </>
    
  )
}

export default Footer