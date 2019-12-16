import {observable,action,computed} from 'mobx';

import axios from "axios";
console.log(process.env.REACT_APP_APIBaseUrl);


class  VendorsStore{
    @observable
    state = "pending";
    @observable
    vendors = [
      {
          name:'Apple'
      },
      {
          name:'Gotto'
      },
      {
          name:'Meizu'
      },
      {
          name:'Samsung'
      }
    ];

    @action
    fetchCollections() {
      this.state = "loading";
      axios
        .get(`${process.env.REACT_APP_APIBaseUrl}/vendors`)
        .then(response => {
          let collections = response.data.data;
          this.state = "done";
          this.vendors = collections;
        })
        .catch(error => {
          console.log(error);
          this.state = "error";
        });
    }
   //  @action
   //  intializeVendors(vendors){
   //    this.vendors=  vendors;
   // }

}


const vendorsStore=new VendorsStore();

export default vendorsStore;
