import logo from "../src/assets/logo 1.png";

function Nav() {
    return (
        <>
        <div className="Top-nav">
            <div className="nav-img">
                <img src={logo} alt="idak-pic" />
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Rentals</a>
                <a href="#">Categories</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <div className="cont-3">    <div className="sign-in">
            <i class="fa-regular fa-user"></i>
               <a href="#">Sign in</a> 
            </div>
            <div className="p-list"><button className="posts-lit"><i class="fa-solid fa-plus"></i> Post Listing</button></div>
        </div>
        </div>
        </>
    )
}


export default Nav;