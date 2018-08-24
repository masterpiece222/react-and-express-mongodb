import React, { Component }  from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Comics extends Component {

  constructor() {
    super();
    this.state = {

      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: true,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'left',
      showVideo: {},
    };
  }

  render() {

    const images = [
  {
    original: 'http://localhost:4000/image/11f44d9dc3c0d05c2a69fe80a338ae4a.PNG',
    thumbnail: 'http://localhost:4000/image/11f44d9dc3c0d05c2a69fe80a338ae4a.PNG',
  },
  {
    original: 'http://localhost:4000/image/f47e409d8757c2288754f2341533bff5.PNG',
    thumbnail: 'http://localhost:4000/image/f47e409d8757c2288754f2341533bff5.PNG'
  },
  {
    original: 'http://localhost:4000/image/02a2cb3b8e9bbed41a09c01034a88736.PNG',
    thumbnail: 'http://localhost:4000/image/02a2cb3b8e9bbed41a09c01034a88736.PNG'
  },
  {
    original: 'http://localhost:4000/image/9cfe7d5e29de2d05256b4021b190cffc.PNG',
    thumbnail: 'http://localhost:4000/image/9cfe7d5e29de2d05256b4021b190cffc.PNG'
  },
  {
    original: 'http://localhost:4000/image/77c5bb6b3bf66f091fdf193e78dae674.PNG',
    thumbnail: 'http://localhost:4000/image/77c5bb6b3bf66f091fdf193e78dae674.PNG'
  },
  {
    original: 'http://localhost:4000/image/ddfbcf6bf7ea0beb59754525ee847ec1.PNG',
    thumbnail: 'http://localhost:4000/image/ddfbcf6bf7ea0beb59754525ee847ec1.PNG'
  }
]


const broom = {
  maxWidth: "100%",
  height:"1000px",
  marginTop: "6%",
  backgroundImage: "url(http://localhost:4000/image/a0be24566821a96a1717b0781fbc6453.jpg)"
}

const broom2 = {
  // width: "57%",
  maxWidth: "60%",
  float: "left",
  marginTop: "2%"



}

const broom3 = {
  color: "yellow",
  // borderStyle: "solid",
  // borderColor: "yellow",
  paddingTop: "20px",
  fontFamily: "Tahoma",
  paddingButtom: "2px"
}

const broom5 = {
  // borderStyle: "solid",
  color: "yellow",
  borderColor: "yellow",
  textAlign: "center"



}

const broom6 = {
  // borderStyle: "solid",
  // color: "white",
  textAlign: "justify",
  padding: "10px",
  color: "yellow"
}

const broom4 = {
  maxWidth: "40%",
  width: "55%",
  float: "left",
  // marginTop: "3.5%",

  height:"900px"
}
    return (

        <div style= {broom}>

              <h1 style= {broom3}> Let the fun Begin...</h1>


            <div style= {broom2}>
                <ImageGallery
                autoPlay={this.state.autoPlay}
                showBullets={this.state.showBullets}
                showThumbnails={this.state.showThumbnails}
                showFullscreenButton={this.state.showFullscreenButton}
                showPlayButton={this.state.showPlayButton}
                thumbnailPosition={this.state.thumbnailPosition}
                 items={images} />
            </div>
            <div style={broom4}>
              <h1 style={broom5}>TITIANS</h1>
              <p style={broom6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

         </div>

    );
  }
}

export default Comics;
