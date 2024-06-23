import "./style.scss"
export default function Footer(){
    return(
    <>
    <div className="end">
        <div className="end1">
    <h1>CALIFORNIA</h1>    
    <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </div>
        <ul>
            <h1>All products</h1>
            <li><a href="#">Phones</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Tablet</a></li>
            <li><a href="#">Laptops</a></li>
        </ul>
        <ul>
            <h1>Company</h1>
            <li><a href="#">About</a></li>
            <li><a href="#">Support</a></li>
        </ul>
        <ul>
            <h1>Support</h1>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Change Log</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul>
            <h1>Follow Us</h1>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
        </ul>
    </div>    
    <div className="end2">
        <p><h1>Made By:</h1>Azwedo</p>     
        <p className="fr"><h1>Powered by:</h1>Webflow</p>
    </div>
    </>
    )
}