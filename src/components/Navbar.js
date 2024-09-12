import one from "../assests/images/backgroundimg.jpg"
function Navbar(){
    return(<div class="navbar_container">
        <img src={one}/>
        <div class="navbar">
            <div class="left_navbar">
            <h2>Image Gallery</h2>
            <p>Butterflies</p>
            </div>
            <div class="right_navbar">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#contact_us1"><li>Contact us</li></a>
                </ul>
            </div>
            
        </div>
        <div class="description">
            <p>Butterfly Bliss<br/>
                Step into a world of vibrant wings and delicate beauty. Our gallery showcases nature’s most stunning masterpieces—each butterfly a unique splash of color in flight.</p>
        </div>
    </div>)
}
export default Navbar