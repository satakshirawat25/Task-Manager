// import React, { useState } from 'react'
// import AuthLayout from '../../components/layouts/AuthLayout'
// import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector'

//  export const SignUp = () => {

//   const [profilePic,setProfilePic] = useState(null)
//   const [fullName,setFullName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const [adminInviteToken,setAdminInviteToken] = useState('')
//   const[error,setError]=useState(null)

//   //hanle signup form submit
//    const handleSignUp = async(e)=>{
//     e.preventDefault()

//     if(!fullName){
//       setError("please enter full name")
//     }

//     if(!validateEmail(email)){
//       setError("Please enter the valid email address")
//       return;
//     }
//     if(!password){
//       setError("Please enter the password")
//       return
//     }
//     setError("")

//     //Signup API call
 
//   return (
//     <AuthLayout>
//       <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center '>
//         <h3 className='text-xl font-semibold text-black'>Create an account</h3>
//         <p className='text-xs text-slate-700 mt-[5px] mb-6'>
//           Join us today by entering your details below
//         </p>
//       )}
//         <form onSubmit={handleSignUp}>
//           <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'></div>
//         </form>
//       </div>
//     </AuthLayout>
//   )

//  }




import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import Input from "../../components/inputs/Input";
import { Link } from "react-router-dom";

// ✅ email validator
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(null);

    // Signup API call here
  };

  return (
    <AuthLayout>
      <div className="lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Create an account
        </h3>

        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <ProfilePhotoSelector
            image={profilePic}
            setImage={setProfilePic}
          />

          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Inputs will go here */}

            <Input
            value={fullName}
            onChange={({target})=>setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
            />

             <Input
        value={email}
        onChange={({target})=>setEmail(target.value)}
        label="Email Address"
        placeholder="sona@gmail.com"
        type="text"
        
        />

          <Input
        value={password}
        onChange={({target})=>setPassword(target.value)}
        label="Password"
        placeholder="Min 8 character"
        type="password"
        
        />

          <Input
        value={password}
        onChange={({target})=>setPassword(target.value)}
        label="Admin Invite Token"
        placeholder="6 digit code"
        type="text"
        
        />  </div>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button type="submit" className='btn-primary'>
          SIGN UP
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>
         Already an account?{""}
          <Link className="font-medium text-[#2563EB] underline" to="/login">
          Login</Link>
        </p>
        


        
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
