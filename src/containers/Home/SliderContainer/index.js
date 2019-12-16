import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import SliderComponent from "../../../components/Home/slider/SliderComponent";
import PropTypes from "prop-types";
import "./index.css";
import Video from "../../../components/Home/slider/VideoComponent"

const items = [
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-01_1920x.jpg?v=1504617082",
    altText: 'Slide 1',
    allcaption: function (){
      return(
        <SliderComponent header="Speaker" _header="Bottle" remheader="190$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..." />
      )
    },
    video :function (){}
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-02_1920x.jpg?v=1504618214",
    altText: 'Slide 2',
    allcaption: function (){
      return(
        <SliderComponent header="Smart" _header="Watches" remheader="150$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    },
    video :function (){}
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-03_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Bower" _header="Bank" remheader="350$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    },
    video :function (){}
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-slice_1920x.png?v=1511775560",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Trackers" _header="410$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    },
    video :function (){}
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-05_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Wireless" _header="Speaker" remheader="490$"  captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    },
    video :function (){}
  },
  {
    src: "https://cdn.shopify.com/s/files/1/2235/6053/files/slide-06_1920x.jpg?v=1504618214",
    altText: 'Slide 3',
    allcaption: function (){
      return(
        <SliderComponent header="Headphone" _header="210$" captions="Sed ut perspiciatis unde omnis iste natus error sit volup..."/>
      )
    },
    video :function (){}
  },
  {
    src: "",
    altText: '',
    allcaption: function (){},
    video : <Video />
    
  },
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
         <div>{item.video}</div>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.allcaption()} />
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;

Example.PropTypes={
  allcaption : PropTypes.func.isRequired
}
