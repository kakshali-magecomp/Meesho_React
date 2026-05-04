
export default function Home() {
  return (
    <>
         <div className="w-full mt-20 p-4 flex items-center justify-center gap-4 flex-wrap ">
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Popular</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Kurti, Saree & Lehenga</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Women Western</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Lingerie</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Men</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Kids & Toys</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Home & Kitchen</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Beauty & Health</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Jewellery & Accessories</a>
            <a href="#" className="text-normal  text-gray-700 hover:text-blue-500">Bags & Footwear</a>
         </div>
         <div className="bg-[url('mainimg.webp')] w-full h-96 bg-cover bg-center grid grid-cols-2 items-center">
            <div></div>
            <div className="text-left pl-[314px]">
                <h1 className="text-3xl font-black  text-white  lh-[44px] p-[5px]">Smart shopping</h1>
                <h1 className="text-3xl font-black  text-white  lh-[44px] p-[5px]">Trusted by Millions</h1>
                <button className="py-[11px] pt-[12px] pb-[13px] px-[29px] text-[24px] rounded-[8px] bg-[rgb(249,249,249)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)] cursor-pointer text-[rgb(88,10,70)] mt-[20px] ml-[5px]">Shop Now</button>
            </div>
         </div>
         <div className="bg-[#fdeefa] p-4">
            <div className="bg-white w-[100%]  rounded-lg border-solid border-[1px] border-[#dc94d080] m-auto  flex gap-20 items-center justify-center p-[10px]">
              <div className="flex justify-center items-center gap-2">
                <img src="l1.svg" alt="cat1" className="w-[20px]"/>
                <label className="text-sm black-500">7 Days Easy Return</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src="l2.svg" alt="cat1" className="w-[20px]"/>
                <label className="text-sm black-500">Cash on Delivery</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src="l3.svg" alt="cat1" className="w-[20px]"/>
                <label className="text-sm black-500">Lowest Prices</label>
              </div> 
            </div>
         </div>

         <div className="p-[10px]">
            <div className="p-[20px] m-[0_auto]  flex items-center justify-center gap-10 flex-wrap">
                <div className="w-[148px]  h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p1.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Ethnic Wear</a>
                </div>
                <div className="w-[148px]  h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p2.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Western Dresses</a>
                </div>
                <div className="w-[148px] h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p3.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Menswear</a>
                </div>
                <div className="w-[148px] h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p4.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Footwear</a>
                </div>
                <div className="w-[148px] h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p5.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Home Decor</a>
                </div>
                <div className="w-[148px] h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p6.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Beauty</a>
                </div>
                <div className="w-[148px] h-[148px] flex flex-col items-center justify-center gap-2">
                  <img src="p7.webp" alt="Product 1" className="w-[148px] h-full"/>
                  <a href='#' className="text-sm text-gray-700 hover:text-blue-500">Accessories</a>
                </div>
            </div>
         </div>

         <div className="bg-[url('goldimg.webp')] relative w-full h-[554px] bg-cover bg-center grid grid-cols-2 items-center">
            <div>
                <button className="pt-[9px] pr-[25px] pb-[9px] pl-[25px] border-[#ffd182] border-[1px] border-solid text-[15px] rounded-[8px] bg-[#3f1f11]  cursor-pointer text-[#ffd182] mt-[168px] ml-[168px] absolute">Shop Now</button>
            </div>
            <div>
                <div className="grid grid-cols-2 p-[80px]  pl-[180px]">
                   <div  className="pt-[50px] pl-[20px]"><img src="goldimg1.webp" alt="goldimg" className="position-absolute  w-[60%]" /></div>
                    <div className="pt-[50px] pl-[20px]"><img src="goldimg2.webp" alt="goldimg" className="position-absolute  w-[60%]"/></div>
                    <div className="pt-[50px] pl-[20px]"><img src="goldimg3.webp" alt="goldimg" className="position-absolute  w-[60%]"/></div>
                    <div className="pt-[50px] pl-[20px]"><img src="goldimg4.webp" alt="goldimg" className="position-absolute  w-[60%]"/></div>
                </div>
            </div>
         </div>

         <div>
            <div className="p-[20px] m-[0_auto]  grid items-center grid-cols-2 gap-10 flex-wrap w-[90%] m-auto pt-[50px]">
              <div className="flex gap-4 item-center">
                <h1 className="text-[35px]">Original Brands </h1>
                <img src="bluetickicon.png" alt="brand1" className="w-[50px]"/>
              </div>
              <div className="text-right ">
                <a href="#" className="text-sm text-[#9f2089] hover:text-blue-500 text-[18px] text-decoration-underline text-right">VIEW ALL <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
               <div className="flex gap-6 overflow-x-auto py-2 scroll-smooth [scrollbar-width:none]">
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <a href='#' className="p-[20px]"><img src="card1.webp" alt="brand1" className="w-[100%]"/></a>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <a href='#' className="p-[20px]"><img src="card2.webp" alt="brand1" className="w-[100%]"/></a>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <a href='#' className="p-[20px]"><img src="card3.webp" alt="brand1" className="w-[100%]"/></a>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <a href='#' className="p-[20px]"><img src="card4.webp" alt="brand1" className="w-[100%]"/></a>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <a href='#' className="p-[20px]"><img src="card5.webp" alt="brand1" className="w-[100%]"/></a>
                  </div>
               </div>
            </div>
         </div>
    </>
  );
}