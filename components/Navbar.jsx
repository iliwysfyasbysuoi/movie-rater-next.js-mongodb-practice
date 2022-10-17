

const Navbar = () => {
    return (
        <>
            <nav className="bg-coolgray-100 h-20  m-0 p-0 flex  flex-row items-center justify-between w-full fixed ">
                    <div className=" h-20  flex items-center">
                        <h1 className="navlink">Movie Rater</h1>
                    </div>
                    <div className=" h-20 flex m-0 p-0 items-center ">
                        <a href="" className="navlink">Home</a>
                        <a href="" className="navlink">Movies</a>
                        <a href="" className="navlink">TV Shows</a>
                        <a href="" className="navlink">About</a>
                    </div>
                    <div className=" h-20  flex items-center">
                        <a href="" className="navlink">Profile</a>
                    </div>
            </nav>

        </>
    )
}

export default Navbar;