import {observable,action} from 'mobx';
import axios from "axios";

class UserStore{

@observable
isUserLoggedIn=true;

@observable
state = "loading";

@observable
message = "loading";

 @observable
  user={
    name:'test',
    profileImage:null,
    isUserLoggedIn:''
  };


  // @action.bound
  // login(email,password){
    @action
    login=(email,password)=>{

    //
    //1-post request login with
    this.state = "loading";

      axios
        .post(`${process.env.REACT_APP_APIBaseUrl}/auth/login`,{ email: email, password: password})
        .then(response => {
        if(response.status.data.status === 200){
          this.state="done" ;
          console.log("this.status",this.status);
          this.message = "you are logged in";
        }else{
          this.state ="error" ;
          this.message=response.message;
        }


        })
        .catch(error => {
          console.log(error);
          this.state = "error";
        });
  }


  @action
  register=(username,email,password)=>{
    this.state = "loading";

    console.log('email ',email);
    console.log('password ',password);
    console.log('username ',username);

    axios
      .post(`${process.env.REACT_APP_APIBaseUrl}/auth/signup`,
      { email: email, password: password , username:username}
    )
      .then((response) => {
        console.log("response.status",response.status);
        if(response.status === 200){
          // response.status.data.status
          console.log("in good log in");
          this.state="done" ;
          this.message = "you are sign up successfully";
        }else{
          this.state ="error" ;
          this.message=response.message
        }

        console.log(response) ;
          }
        )
      .catch(error => {
        console.log(error);
        // this.state = "error";
      });
  }
}


const  Userstore=new UserStore();

export default Userstore;
