import React from 'react';
import Sectiontitle from '../section-title'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './style.css'

import image1 from '../../images/imagen1.jpeg'
import image2 from '../../images/imagen2.jpeg'
import image3 from '../../images/imagen3.jpeg'
import image4 from '../../images/propuesta1.jpeg'
import image5 from '../../images/propuesta2.jpeg'
import image6 from '../../images/propuesta3.jpeg'

const Portfolios = [
  {
    Pimg: image1,
  },
  {
    Pimg: image2,
  },
  {
    Pimg: image3,
  },
  {
    Pimg: image4,
  },
  {
    Pimg: image5,
  }
  ,
  {
    Pimg: image6,
  }

]
const Gallery = (props) => {

  const [open, setOpen] = React.useState(false);

  return (
    <div id="gallery" className="Gallery-section section-padding pb-70">
      <Sectiontitle section={'Nosotros'} />
      <div className="container">
        <div className="row">
          <ResponsiveMasonry columnsCountBreakPoints={{ 575: 1, 750: 3, 900: 3 }}>
            <Masonry gutter="30px">
              {Portfolios.map((image, i) => (
                <div className="gallery-img" onClick={() => setOpen(true)} key={i}>
                  <img src={image.Pimg} alt="" className="img img-responsive" />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: image1 },
          { src: image2 },
          { src: image3 },
          { src: image4 },
          { src: image5 },
          { src: image6 }
        ]}
      />
    </div>
  );
}

export default Gallery;