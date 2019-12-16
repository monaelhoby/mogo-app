import { observable, action, computed } from "mobx";
import axios from "axios";
console.log(process.env.REACT_APP_APIBaseUrl);

class CollectionsStore {
  @observable
  state = "pending";
  @observable
  collections = [
    {
      name: "audio",
      image: "",
      totalproduts: ""
    },
    {
      name: "Watches",
      image:
        "http://cdn.shopify.com/s/files/1/2235/6053/files/promobox-01_640x.jpg?v=1504619436",
      totalProduts: 25
    }
  ];

  @action
  fetchCollections() {
    this.state = "loading";
    axios
      .get(`${process.env.REACT_APP_APIBaseUrl}/categories`)
      .then(response => {

        setTimeout(()=>{
          let collections = response.data.data;
          this.state = "done";
          this.collections = collections;
        },5000);

      })
      .catch(error => {
        console.log(error);
        this.state = "error";
      });
  }

  @action
  addCollection(collecion) {
    this.collections.push(collecion);
    console.log("collection", this.collections);
  }
}

const collectionsStore = new CollectionsStore();

export default collectionsStore;
