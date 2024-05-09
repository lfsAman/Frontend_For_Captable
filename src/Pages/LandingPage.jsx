import React from "react";
import { useNavigate } from "react-router-dom";
import { Connect } from "../Connect.jsx";
import logo from '../assets/logo.png'
const LandingPage = () => {
    const navigate=useNavigate()
    const handleCreateComapny=async()=>{
          navigate('/createCompany')
    }
    const handleEmploy=()=>{
      navigate('/employeeLogin')
    }

  return (
    <div className="z-50 mt-[1%]">
      <div className="flex items-center justify-between">
      <img onClick={()=>navigate('/')} className="p-3 cursor-pointer" src={logo} alt="" />
      <div className="flex items-end justify-end">
      <Connect>{(account, provider) => null}</Connect> 
      </div>
      </div>
      
      
      <div className="border-t ">
        <div className=" h-full mt-[10%] ml-[10.28%] flex flex-col items-center  w-[79.44%]  justify-center mb-[5%]">
          <h1 className="font-source-code-pro text-[450%] text-[#212427]">
            Private Captable
          </h1>
          <h1 className="font-source-code-pro text-[450%] text-[#3A74F2]">
            Built on FHE
          </h1>
          <h1 className="font-source-code-pro text-[130%] text-center text-[#BDBDBD]">
            Fully Homomorphic Encryption (FHE) enables secure computation on
            encrypted data, safeguarding sensitive ownership information in cap
            tables. It ensures privacy while facilitating essential operations
            like equity allocation and reporting.
          </h1>
          
          <div className="flex gap-[1.11vw] mt-[2.78%]">
            <h1 onClick={handleCreateComapny} className="w-[250px] font-[500] flex items-center justify-center text-[16px] font-source-code-pro cursor-pointer rounded-xl bg-[#3A74F2]  text-[#FFFFFF]">
              For Company Owner
            </h1>
            <h1 onClick={handleEmploy} className="w-[250px]  font-[500] flex items-center justify-center font-source-code-pro cursor-pointer rounded-lg bg-[#FFFFFF] border border-[#3A74F2] px-[1.67vw] py-[1.11vw] text-[#3A74F2]">
              For Employee
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
