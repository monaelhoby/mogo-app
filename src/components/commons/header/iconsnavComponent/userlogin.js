import React from "react";
import { NavLink} from 'reactstrap';
// import ImageProfile from "../../../../containers/commons/header/UserLogin/userimage";


const ImageProfile = ({profileImage}) => <img width="35px" height="35px" src={profileImage} />;


const UserIcon = () => {
  return(
      <div className="cog-dropdown userdropdown ">
      <NavLink href="#">
      <i className="far fa-user" id="navbarDropdown1" role="button" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false"></i>
      </NavLink>
      <div className="dropdown-menu main-menu cog-settings" aria-labelledby="navbarDropdown1" >
      <div className="choose-language">
      <ul className="list-unstyled choose">
      <li><NavLink href='/signup'>SignUp</NavLink></li>
      <li><NavLink href='/login'>Login</NavLink></li>
      </ul>
      </div>
      </div>
      </div>
  )
};

const UserLogin = ({IsUSerLogin , profileImage  }) => IsUSerLogin ? <ImageProfile profileImage={profileImage}/> : <UserIcon/>;
  export default UserLogin;
