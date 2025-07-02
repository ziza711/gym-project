import profilepic from './profiles.jpg';
function Card(){
    return(
        <div className="Card">
            <img src={profilepic} alt="profile picture" />
            <h2>Bro code</h2>
            <p> i make youtube videos and play video games</p>


        </div>
    );
}
export default Card;