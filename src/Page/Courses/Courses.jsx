import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartlist } from "../../slices/cartSlice";


const Courses = () => {
    const cartData =useSelector(state=>console.log(state))

    const dispatch = useDispatch()
    const [data,setData]=useState([])

    useEffect(() => {
        const allData = async () => {
            try {
                const response = await fetch('https://itder.com/api/get-course-list');
                const json = await response.json();
                setData(json)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        allData();
        

    }, []);

    const handleAdd =(item)=>{
        dispatch(cartlist(item))
        
    }

    

    
    


    return (
        <div className="m-mt_16px">
          

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

               {
                data.courseData?.map((item)=>(
                    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative">
                            <img src={item.photo} alt="" className=" h-[250px]"/>
                            <div className="absolute top-0 left-0 p-2">
                                <h3 className="text-white text-xl font-bold">Data Entry</h3>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-gray-800 text-lg font-semibold mb-2">{item.course_name}</h2>
                            <div className="flex items-center justify-between mb-4">

                                <span className="flex text-blue-500 text-md">★★★★★</span>
                                <span className="ml-2 text-gray-600 text-md font-bold">{item.trainer_data.name}</span>
                            </div>
                            <p className="text-gray-600 text-md mb-4">
                           Course Details <span className="text-blue-500">Show Details</span>
                            </p>
                            <hr />
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <span className="line-through text-gray-400 text-sm">Tk {item.discount_price}</span>
                                    <span className="text-green-600 text-md font-bold ml-2">-70%</span>
                                    <span className="text-black text-lg font-bold ml-2">Tk {item.discount_price-item.discount_price/100*70}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 w-full font-bold text-md" onClick={()=>handleAdd(item)}>Add To Cart</button>

                            </div>
                        </div>
                    </div>
                ))
               }

    
            </div>
        </div>
    );
};

export default Courses;