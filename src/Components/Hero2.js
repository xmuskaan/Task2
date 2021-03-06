import Img2 from "../Images/Img2.png";

const Hero2 = () => {
    return ( 
        <div className="mainDiv Hero2">
            <div className="picture2">
                <img src={Img2} alt="yet to be found"/>
            </div>

            <div className="text2">
            <h2>Welcome to <span class="colorChange">Dwidasa Samsara Indonesia (DSI)</span></h2>
                <p className="smallText">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="colorChange">DSI's</span>distinct front-end based application concept.</p>
                <p className="smallText"> <br/>Managed by a team of professional experts with extensive experience and impressive track records, <span className="colorChange">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
            </div>
        </div>
     );
}
 
export default Hero2;