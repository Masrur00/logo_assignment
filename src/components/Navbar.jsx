import { MButton } from "./Button";
import mylogo  from "../images/mylogo.png"
import { Link } from "./Link"

export const Navbar = ()=> {
    return (
        <div className="nav-bar">
          <img src={mylogo}  alt="logo does not found"/>
          <Link />
          <MButton />
        </div>
    );
}