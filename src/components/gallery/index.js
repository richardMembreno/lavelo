import React from 'react';
import Sectiontitle from '../section-title'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './style.css'

import image1 from '../../images/editada3.jpeg'
import image3 from '../../images/editada2.jpeg'
import image4 from '../../images/editada1.jpeg'
import image2 from '../../images/editada4.jpeg'

const Portfolios = [
  {
    Pimg: image1,
  },
  {
    Pimg: image3,
  },
  {
    Pimg: image4,
  },
  {
    Pimg: image2,
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
          { src: image3 },
          { src: image4 },
          { src: image2},
        ]}
      />
    </div>
  );
}

export default Gallery;