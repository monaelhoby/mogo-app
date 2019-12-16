import React , {Component} from 'react';
import UserLoginComponent from '../../../../components/commons/header/iconsnavComponent/userlogin';

import {inject,observer} from 'mobx-react';

import Avatar from "../../../../img/avatar.jpg";



const UserLogin =({user})=><UserLoginComponent IsUSerLogin={user.isUserLoggedIn} profileImage={user.user.profileImage?user.user.profileImage:Avatar} />

export default inject('user')(observer(UserLogin));
