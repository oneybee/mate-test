import React, {component} from 'react';
import './InfoBanner.scss';
import '../../../Items/Building blocks 🏠/Elements/Heading1'

export default function InfoBannerComponent() {
  return (
    <div className="info-banner">
      <heading>Mate Test</heading>
      <div className="row grid-default-style">
        <div className="col-6 background-image-contain text "><h>Text1</h><p>sub text1</p></div>
        <div className="col-6 background-image-contain2 text "><h>Text2</h><p>sub text2</p></div>
      </div>
    </div>
  );
}
