import React from 'react';
import 'components/sections/SectionHeader/SectionHeader.scss';

function SectionHeader({children, img, imgAlt, anchor, title}) {
  return (
    <div className="SectionHeader">
      <img className="SectionHeader__Image" src={img} alt={imgAlt} />

      <div className="SectionHeader__ContentWrapper">
        <div className="SectionHeader__Content">
          <h2 id={anchor} className="SectionHeader__Title">
            {title}
          </h2>

          <div className="SectionHeader__Text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
