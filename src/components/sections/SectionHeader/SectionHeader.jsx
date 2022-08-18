import React from 'react';
import 'components/sections/SectionHeader/SectionHeader.scss';

function SectionHeader({img, imgAlt, anchor, title}) {
  return (
    <div className="SectionHeader">
      <img className="SectionHeader__Image" src={img} alt={imgAlt} />

      <h2 className="SectionHeader__Title">
        <a className="SectionHeader__TitleLink" href={`#${anchor}`}>
          {title}
        </a>
      </h2>
    </div>
  );
}

export default SectionHeader;
