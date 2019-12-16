import { observable, action, computed } from "mobx";

class ShoppingCart {
  @observable
  Items = [
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_125x.jpg?v=1501862747",
      productName: "Xiaomi Portable Mini Wireless Bluetooth Speaker 1",
      productQuantity: "3",
      productPrice: "500$",
      productTotal: "500$",
      id: 1
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_125x.jpg?v=1501862747",
      productName: "Xiaomi Portable Mini Wireless Bluetooth Speaker 2",
      productQuantity: "1",
      productPrice: "500$",
      productTotal: "500$",
      id: 2
    }     
  ];

  @action
  removeItem(cartItem) {
   this.Items = this.Items.filter(item => {
    if(item.id !== cartItem.id){
      return true ;
    }else{
      return false
    }
  })
  }

  @action
  addItem(cartItem) {
    this.Items.map(item => {
      if (item.id === cartItem.id) {
        console.log("item click",item);
        // Items.push({id: item.id, productName: item.name, productPrice: item.price, productQuantity: 1})
      }
    });
  }
  @action
  setItemQuantity(cartItem, quantity) {
    this.Items.map(item => {
      if (item.id === cartItem.id) {
        item.productQuantity = quantity;
      }
      return item;
    });
  }
}

const ShoppingCartStore = new ShoppingCart();

export default ShoppingCartStore;
