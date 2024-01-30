import "./Home.css"
import myimage from "../../assets/images/pic.jpg"
function Home() {
    return (
        <div>
            <img src={myimage} className="pic pic-style" alt="" />
            <ul>
                <li><a href="Sam-Wisdoms Amenyenu <asamwisdoms@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/sam-wisdoms-amenyenu-4b825b297/">LinkedIn</a></li>
                <li><a href="https://github.com/Sam-Wisdoms">GitHub</a></li>
                <li><a href="file:///C:/Users/Sam-Wisdoms%20Amenyenu/OneDrive/Desktop/Important%20Files%20for%20Job%20Search/Tech%20CV_Sam-Wisdoms.pdf">CV</a></li>
                <li><a href="https://twitter.com/SamWisdoms">Twitter</a></li>

            </ul>
            <p className="home-text">Hi there, I am Sam, a passionate Front End Web Developer. I am looking for an opportunity to contribute my skills to a tech company with global reach while at the same time improving my skills.</p>
        </div>
    )
}

export default Home