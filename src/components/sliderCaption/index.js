import React from 'react';
import SliderComponent from "../SliderComponent";

const Items = [
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-01_1920x.jpg?v=1504617082",
    altText: 'Slide 1',
    allcaption: function (){
      return(
        <SliderComponent header="Speaker" _header="Bottle" remheader="190$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..." />
      )
    }
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-02_1920x.jpg?v=1504618214",
    altText: 'Slide 2',
    allcaption: function (){
      return(
        <SliderComponent header="Smart" _header="Watches" remheader="150$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    }
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-03_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Bower" _header="Bank" remheader="350$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    }
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-slice_1920x.png?v=1511775560",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Trackers" _header="" remheader="410$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    }
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-05_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Wireless" _header="Speaker" remheader="490$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    }
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-06_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Headphone" _header="" remheader="210$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    }
  },
];

export default Items ;
