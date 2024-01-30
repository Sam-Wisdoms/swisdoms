import "./Home.css"
import myimage from "../../assets/images/pic.jpg"
function Home(){
    return(
        <div>
        <img src={myimage} className="pic pic-style" alt="" />
        <ul>
        <p>Email</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Twitter</p>
        </ul>

        <p className="home-text">Hi there, I am Sam, a passionate Front End Web Developer. I am looking for an opportunity to contribute my skills to a tech company with global reach while at the same time improving my skills.</p>
        


        </div>
    )
}

export default Home