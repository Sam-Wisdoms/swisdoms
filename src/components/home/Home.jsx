import "./Home.css"
import myimage from "../../assets/images/profilepic.jpg"
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


// Fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, fas); // Add any additional icons you want to use


function Home() {
    return (
        <div>
            <img src={myimage} className="pic pic-style" alt="" />
            <ul className="socials">
                <li><a href="mailto:asamwisdoms@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /> asamwisdoms@gmail.com</a></li>

                {/* <li><FontAwesomeIcon icon={faPhone} /></li> */}
                <li><a href="https://drive.google.com/file/d/17UWaLzDPHcld-VoJYvcF3PM_Wvj4_ytk/view?usp=sharing">CV</a></li>
                <li><a href="https://www.linkedin.com/in/sam-wisdoms-amenyenu-4b825b297/">LinkedIn</a></li>
                <li><a href="https://github.com/Sam-Wisdoms">GitHub</a></li>
                <li><a href="https://twitter.com/SamWisdoms">Twitter</a></li>
              
            </ul>
            <p className="home-text">Hi there, I am Sam, a passionate Front End Web Developer. I am looking for an opportunity to contribute my skills to a tech company with global reach while at the same time improving my skills.</p>
        </div>
    )
}

export default Home