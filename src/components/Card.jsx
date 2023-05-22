import CardImg from "./CardImg";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export default function Card() {
    return(
        <div className="card margin-auto-x">
            <CardImg />
            <CardBody />
            <CardFooter />
        </div>
    )
}