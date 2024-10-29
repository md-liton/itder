import { MdMenu } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useUser from "../../Security/useUser";
import { FaUserCircle } from "react-icons/fa";
import useSmallScreen from "../../Hooks/useSmallScreen";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";


const NavbarTop = () => {

  const cartData =useSelector(state=>console.log(state.cartDetails.value,'ddd'))
  
  
  
  const { open, setOpen, sidebarRef } = useContext(OrderContext);
  const [isSmallScreen] = useSmallScreen();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [userData, ,refetch] = useUser();
  const imgUrl = `https://littleaccount.com/uploads/userProfile/`

  const [cart ,setCart]=useState(false)


  const handleLogout = async () => {
    try {
      const res = await axiosSecure('/api/logout')
    if(res.data){
      navigate('/login')
      localStorage.removeItem('token')
      toast.success('Logout Successfully')
      window.location.reload();
      refetch()
    }
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

 
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
  if(isSmallScreen){
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }
  }, [open, isSmallScreen]);

  useEffect(() => {
    if(isSmallScreen){
      setOpen(false)
    } else{
      setOpen(true)
    }
  }, [isSmallScreen, setOpen])

  return (
    <div className="bg-white py-pt_primary text-_white w-full shadow-md border-b-1 ">
      <ul className="flex gap-gap_primary justify-end px-pt_secondary ">
        <div className="flex items-center gap-gap_primary text-text_sm font-semibold  lg:hidden">
          <MdMenu
            onClick={() => setOpen(!open)}
            className="text-text_xxl cursor-pointer text-black"
          />
        </div>
        <div className="hidden lg:block"></div>

        <div className="relative" onClick={()=>setCart(!cart)}>
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-[20px] bg-black cursor-pointer">
          <FaCartShopping  className=""/>
          </div>
          <div className="bg-red-500 h-[20px] w-[20px] rounded-full flex justify-center items-center absolute top-[-2px] right-[-6px]">0</div>
          <div className={`bg-red-500  absolute bottom-[-190px] left-[-250px] w-[350px] p-[20px] rounded-lg z-[999] ${!cart && 'hidden' }`}>
            <div className="flex gap-[10px]  items-center">
              <div className="bg-yellow-500 h-[80px] w-[110px] rounded-lg">img</div>
              <div>
                <p>course name</p>
                <p>$100</p>
              </div>
            </div>
            <div className="flex gap-[20px] mt-[20px]">
              <Link to='/cart' className="py-[10px] px-[15px] border-[1px] rounded-lg cursor-pointer">View Cart</Link>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center text-text_sm font-semibold relative group">
          
          <div className="flex items-center gap-8">
          <h1 className="text-blue-500 text-xl font-medium">{userData?.userData.name}</h1>
         {userData?.userData.image ? 
         <img
            className="w-[40px] h-[40px] rounded-full"
            src={`${imgUrl}${userData.userData.image}`}
            alt=""
          /> : 
          <FaUserCircle className="w-[40px] h-[40px] rounded-full text-black" />}
          </div>

          <div className="absolute top-10 right-3 bg-_white shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-right scale-0">
            {userData && <Link
              to="/profile"
              className="block px-4 py-2 text-black hover:bg-bg_selected hover:text-white"
            >
              Profile
            </Link>}
            {userData ? <Link
            onClick={handleLogout}
              className="block px-4 py-2 text-black hover:bg-bg_selected hover:text-white"
            >
              Logout
            </Link> : 
            <Link
            to='/login'
              className="block px-4 py-2 text-black hover:bg-bg_selected hover:text-white"
            >
              Login
            </Link>}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavbarTop;
