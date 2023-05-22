import facebookIcon from '../assets/FacebookIcon.svg'
import instagramIcon from '../assets/InstagramIcon.svg'
import gitHubIcon from '../assets/GitHubIcon.svg'
import twitterIcon from '../assets/TwitterIcon.svg'
const CardFooter = () => {
    return (
        <div className="card-footer">
            <img src={twitterIcon} alt="twitterIcon" />
            <img src={facebookIcon} alt="facebookIcon" />
            <img src={instagramIcon} alt="instagramIcon" />
            <img src={gitHubIcon} alt="twitterIcon" />
        </div>
    )
}
export default CardFooter