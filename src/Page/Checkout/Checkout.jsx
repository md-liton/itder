import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const navigate = useNavigate()
    const notify = () => toast("");


    const [fullname,setFullname]=useState('')
    const [formno,setFormno]=useState('')
    const [parentname,setParentname]=useState('')
    const [number,setNumber]=useState('')
    const [collegename,setCollegename]=useState('')
    const [jobinfo,setJobinfo]=useState('')
    const [email,setEmail]=useState('')
    const [praddress,setPraddress]=useState('')
    const [paaddress,setPaaddress]=useState('')
    const [nidnumber,setNidnumber]=useState('')
    const [mobile,setMobile]=useState('')
    const [lparent,setLparent]=useState('')
    const [birth,setBirth]=useState('')

    const handleSubmit =()=>{

        if(fullname && formno && parentname && number && collegename && jobinfo && email && praddress && paaddress && nidnumber && mobile && lparent && birth){
            toast.success("Successfully Done")

            setTimeout(() => {
                navigate('/order-details')
            }, 2000);

        }else{

            if(!fullname){
                toast.error('please give your full name');
            }
            if(!formno){
                toast.error('please give your form no');
            }
            if(!parentname){
                toast.error('please give your Father/Mother Name');
            }
            if(!number){
                toast.error('please give your number');
            }
            if(!collegename){
                toast.error('please give your School/College');
            }
            if(!jobinfo){
                toast.error('please give your Job Information');
            }
            if(!email){
                toast.error('please give your email');
            }
            if(!paaddress){
                toast.error('please give your Present Address');
            }
            if(!praddress){
                toast.error('please give your Permanent Address');
            }
            if(!nidnumber){
                toast.error('please give your NID Number/Birth Certificate Number');
            }
            if(!mobile){
                toast.error('please give your Mobile No');
            }
            if(!lparent){
                toast.error('please give your Local Guardian’s Name:');
            }
            if(!birth){
                toast.error('please give your Date of Birth');
            }
    



        }

       
        
      

    }

    




    
    return (
        <div className="  mt-5 border mx-2">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div class="bg-[#6f42c1] text-white p-6 text-center mb-5">
                <h2 className='text-5xl font-bold'>Trainee Admission Form</h2>
            </div>
            <form className="bg-white shadow-md rounded-lg p-6">
                {/* Trainee Information Section */}
                <div className="form-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="fullName" className="block font-semibold text-base mb-2">Full Name:</label>
                            <input
                            onChange={(e)=>setFullname(e.target.value)}
                                type="text"
                                id="fullName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="formNo" className="block font-semibold text-base mb-2">Form no:</label>
                            <input
                            onChange={(e)=>setFormno(e.target.value)}
                                type="text"
                                id="formNo"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="parentName" className="block font-semibold text-base mb-2">Father/Mother Name:</label>
                            <input
                            onChange={(e)=>setParentname(e.target.value)}
                                type="text"
                                id="parentName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="parentNumber" className="block font-semibold text-base mb-2">Number:</label>
                            <input
                            onChange={(e)=>setNumber(e.target.value)}
                                type="text"
                                id="parentNumber"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="school" className="block font-semibold text-base mb-2">School/College:</label>
                            <input
                            onChange={(e)=>setCollegename(e.target.value)}
                                type="text"
                                id="school"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="jobInfo" className="block font-semibold text-base mb-2">Job Information:</label>
                            <input
                            onChange={(e)=>setJobinfo(e.target.value)}
                                type="text"
                                id="jobInfo"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-base mb-2">Email:</label>
                            <input
                            onChange={(e)=>setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block font-semibold text-base mb-2">Gender:</label>
                            <select
                                id="gender"
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="presentAddress" className="block font-semibold text-base mb-2">Present Address:</label>
                            <textarea
                            onChange={(e)=>setPraddress(e.target.value)}
                                id="presentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="permanentAddress" className="block font-semibold text-base mb-2">Permanent Address:</label>
                            <textarea
                            onChange={(e)=>setPaaddress(e.target.value)}
                                id="permanentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nid" className="block font-semibold text-base mb-2">NID Number/Birth Certificate Number:</label>
                            <input
                            onChange={(e)=>setNidnumber(e.target.value)}
                                type="text"
                                id="nid"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block font-semibold text-base mb-2">Mobile No:</label>
                            <input
                            onChange={(e)=>setMobile(e.target.value)}
                                type="text"
                                id="mobile"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="guardianName" className="block font-semibold text-base mb-2">Local Guardian’s Name:</label>
                            <input
                            onChange={(e)=>setLparent(e.target.value)}
                                type="text"
                                id="guardianName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block font-semibold text-base mb-2">Date of Birth:</label>
                            <input
                            onChange={(e)=>setBirth(e.target.value)}
                                type="date"
                                id="dob"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="bloodGroup" className="block font-semibold text-base mb-2">Blood Group:</label>
                            <select
                                id="bloodGroup"
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="" disabled selected>Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="m-mt_16px">


                    <div className="pt-p_16px">
                        <div className="lg:flex items-start gap-3">
                            <div className="w-full lg:w-[58%] bg-white border-2">
                                <table className=" overflow-x-auto  w-full">
                                    <thead>
                                        <tr className="border-b-4 border-gray-300">
                                            <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                                                Course
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Price
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Quantity
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Sub Total
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="overflow-x-auto ">

                                        <tr className="border-b border-gray-300 overflow-x-auto">
                                            <td>
                                                <div className="flex items-center justify-center ">
                                                    <div className="w-[20%] text-center flex items-center justify-center ">
                                                        <RiDeleteBin5Line
                                                            className="text-xl hover:text-footer_color cursor-pointer"

                                                        />
                                                    </div>
                                                    <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
                                                        <div className="mask">
                                                            <img
                                                                className="h-[40px] w-[70px]"
                                                                src=''
                                                                alt='Course'
                                                            />
                                                        </div>
                                                        <p className="text-[14.4px] px-[7px] text-center flex ">
                                                            Course name  <span className="hidden lg:flex ">- unit name</span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    discount price
                                                </p>
                                            </td>
                                            <td>
                                                <div className="flex justify-center">
                                                    <div className="border">
                                                        <button
                                                            className="px-4 w-[30px] font-bold font_standard my-1.5"

                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                    <div className="border-y">
                                                        <input
                                                            type="number"
                                                            className="font-bold w-[30px] lg:w-[60px] font_standard px-2 text-center mx-auto h-full"

                                                        />
                                                    </div>
                                                    <div className="border">
                                                        <button
                                                            className="px-4 w-[30px] font-bold font_standard my-1.5"

                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">

                                                    discount price * quantity
                                                </p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:w-[41%] bg-white border-2 ">
                                <div className="px-[30px]">
                                    <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                        Cart Summary
                                    </h2>
                                    <div className="py-3 flex justify-between border-b border-gray-300">
                                        <p className="text-black font-bold">Total Price</p>
                                        <p className="text-black font-bold">

                                        </p>
                                    </div>

                                    <div className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full" onClick={handleSubmit}>
                                        submit
                                    </div>
                                    {/* <Link
                                    onClick={handleSubmit}
                                    to='/order-details'
                                     state={"bdt"}
                                     className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                                    >
                                        Submit
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

           
        </div>
    );
};

export default Checkout;
