// import React from 'react'
// import UI_IMG from '../../assets/images/image.png'

// const AuthLayout = ({children}) => {
//   return (
//     <div className='flex'>
//         <div className='w-screen h-screen md:w-[60w] px-12 pt-8 pb-12'>
//             <h2 className='text-lg font-medium text-black'>Task manager</h2>
//             {children}
//         </div>
//         <div className='hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/image.png')] bg-cover bg-no-repeat bg-cnter overflow-hidden>
//         <img src={UI_IMG} className='w-64 lg:w-[90%]'
//         </div>
        
      
//     </div>
//   )
// }

// export default AuthLayout


import React from "react";
import UI_IMG from "../../assets/images/image.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      {/* Right section */}
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 overflow-hidden">
        <img
          src={UI_IMG}
          alt="Auth Illustration"
          className="w-64 lg:w-[90%]"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

