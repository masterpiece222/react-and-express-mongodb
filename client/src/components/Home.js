import React, { Component }  from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



class Home extends Component {

    constructor() {
      super();
      this.state = {

        showIndex: false,
        showBullets: true,
        infinite: true,
        showThumbnails: false,
        showFullscreenButton: false,
        showGalleryFullscreenButton: true,
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        slideDuration: 550,
        slideInterval: 4000,
        thumbnailPosition: 'bottom',
        showVideo: {},
        autoPlay: true,

      };
    }





  render() {

    const images = [
    {
    original: 'http://localhost:4000/image/3e3e1c5d230e4e6cfce6ce613a522776.jpg',
    thumbnail: 'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg',
    },
    {
    original: 'http://localhost:4000/image/3e3e1c5d230e4e6cfce6ce613a522776.jpg',
    thumbnail: 'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg'
    },
    {
    original: 'http://localhost:4000/image/3e3e1c5d230e4e6cfce6ce613a522776.jpg',
    thumbnail: 'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg'
    }
    ]
const broom = {
  width: "89%",
  marginLeft:"5%",
  marginTop: "7%",

}

  const style1 = {
   width: "100%"
 };

//  const style2 = {
//   marginTop: "6%"
// };

  return (
 <div>
    <div style= {broom}>
    <ImageGallery
    autoPlay={this.state.autoPlay}
    showBullets={this.state.showBullets}
    showThumbnails={this.state.showThumbnails}
    showFullscreenButton={this.state.showFullscreenButton}
    showPlayButton={this.state.showPlayButton}

     items={images}
     />
    </div>



            <div className="w3-container w3-padding-32" id="about">
              <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
           </div>

  <div className="w3-row-padding w3-grayscale">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src="../images/team2.jpg" alt="John" style={style1}></img>
      <h3>John Dom</h3>
      <p className="w3-opacity">CEO & Founder</p>
     </div>

        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="../images/team1.jpg" alt="John" style={style1}></img>
          <h3>John Dee</h3>
          <p className="w3-opacity">CEO & Founder</p>
        </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="../images/team3.jpg" alt="John" style={style1}></img>
              <h3>John Doe</h3>
              <p className="w3-opacity">CEO & Founder</p>
        </div>
         <div className="w3-col l3 m6 w3-margin-bottom">
           <img src="../images/team4.jpg" alt="John" style={style1}></img>
           <h3>John Doe</h3>
           <p className="w3-opacity">CEO & Founder</p>
         </div>
         </div>


</div>
  );
 }
}

export default Home;
