
function Header() {

    return (
        <>
            <div className="bg-white p-4 fixed w-full top-0 left-0 z-10 shadow-md">
                <div className="max-w-6xl mx-auto grid grid-cols-2 items-center  jstify-center">
                    <div className="flex items-center gap-8">
                    <img src="meeshoLogo.svg" className="h-8" />

                    <div  className="border border-stone-500 rounded-md px-4 py-2 w-full flex gap-2 items-center">
                        <img src="sicon.png" className="h-5 w-5" />
                    <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" className="w-full border-none focus:outline-none"
                    />
                    </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <a href="#">Become a Supplier </a>
                        <a href="#">Investor Relation</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;