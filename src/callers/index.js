import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <button><Link to={"/login"}>Login</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}