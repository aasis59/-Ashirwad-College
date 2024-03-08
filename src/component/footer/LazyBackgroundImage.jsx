// LazyBackgroundImage.js

import footerImage from "../../assets/images/footer.jpg";

const LazyBackgroundImage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, 
        opacity: 0.2,
        
      };

  return (
    <div style={backgroundStyle}></div>
  );
}

export default LazyBackgroundImage;
