import "./Home.css"
import myimage from "../../assets/images/mypic.jpg"
function Home(){
    return(
        <div>
        
        <p>Highly motivated, hardworking and result-oriented Junior Front-End Developer with deep interest in Crypto Currencies, crypto trading, non-profit, global development and improved organizational systems, processes and procedures. I am looking forward to contribute my skills to a tech company with global reach while at the same time improving my skills.</p>
        <img src={myimage} className="pic" alt="" />
        </div>
    )
}

export default Home