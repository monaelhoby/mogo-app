import {observable,action,computed} from 'mobx';

class SelectedProduct {

 @observable
 productDetails=
   {
      pricing: '500',
      details: {
      manufacturer: 'Huawei',
      color: 'silver'
      },
      images: [
      '//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_128x.jpg?v=1501862747',
      '//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_1_128x.jpg?v=1501862748',
      '//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_2_128x.jpg?v=1501862749',
      '//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_3_128x.jpg?v=1501862750'
      ],
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\nOmnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae\n\nvitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
      tags: [
      'xiaomi',
      'yellow',
      'Wireless',
      'Wireless Syncing',
      'Bluetooth Speaker'
      ],
      categoriesId: [
      '5bf72096f3a2f125862f3730'
      ],
      active: true,
      avaliableamount: 11,
      _id: '5bfaf96d2a25a860821e46f3',
      slug: 'xiaomiportableminiwirelessbluetoothspeaker',
      sku: '00121',
      name: 'Xiaomi Portable Mini Wireless Bluetooth Speaker',
      primaryCategory: '5bf72096f3a2f125862f3730',
      __v: 0,
      pricingHistory: []
  };


@action
intializeproductItem(productDetails){
  this.productDetails=  productDetails;
}

}

const SelectedProductStore=new SelectedProduct();

export default SelectedProductStore;
