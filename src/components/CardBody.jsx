import emailImg from '../assets/email.png'
import inImg from '../assets/in.png'
const CardBody = () => {
    return (
        <div className="card-body">
            <h2 className="card-title margin-auto-x">Laura Smith</h2>
            <h4 className="card-job">Fullstack Developer</h4>
            <p className="card-email margin-auto-x">laurasmith.website</p>
            <div className="card-buttons margin-auto-x">
                <button className="btn card-btn1">
                    <img src={emailImg} alt="" />
                    <p>Email</p>
                </button>
                <button className="btn card-btn2">
                    <img src={inImg} alt="" />
                    <p>LinkedIn</p>
                </button>
            </div>
            <p className="card-text">
                <h4 className='card-text-title'>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4 className='card-text-title'>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </p>

        </div>
    )
}
export default CardBody