import {observable,action,computed} from 'mobx';

class HotProduct {

 @observable
 products= [
   {
    name : "Huawei Watch Charging",
    collection: "Cradle",
    price:"290$" ,
    image:"//cdn.shopify.com/s/files/1/2235/6053/products/Huawei_Watch_Charging_Cradle_480x480.jpg?v=1501861480"
   },
   {
     name : "Xiaomi Mi Bluetooth Speaker",
     collection: "2",
     price: "470$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Mi_Bluetooth_Speaker_2_480x480.jpg?v=1501862529"
   },
   {
     name : "Meizu HD50 On-Ear" ,
     collection: "Headphones",
     price: "330$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Meizu_HD50_On-Ear_Headphones_480x480.jpg?v=1501861552"
   },
   {
     name : "Wireless Speaker" ,
     price: "490$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Mi_Bluetooth_Speaker_480x480.jpg?v=1501862604"
   },
   {
     name : "Tracker",
     price: "410$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Samsung_Kettle_5-1A_1_480x480.jpg?v=1501862382"
   },
   {
     name : "Xiaomi Portable Mini",
     collection: "Wireless Bluetooth Speaker" ,
     price: "500$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_480x480.jpg?v=1501862747"
   },
   {
     name : "Mi Power Bank 2nd" ,
     price: "370$" ,
     collection :"20000" ,
     wordsm :"m",
     _wordsm:"Ah",
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Mi_Power_Bank_2nd_20000mAh_480x480.jpg?v=1501862273"
   },
   {
     name : "Smart Watches" ,
     collection: "Cradle",
     price: "290$" ,
     image:"//cdn.shopify.com/s/files/1/2235/6053/products/Apple_iWatch_480x480.jpg?v=1501861041"
   }
 ]

@action
intializeproductItem(products){
  this.products=  products;
}

}

const HotProductStore=new HotProduct();

export default HotProductStore;
