import React from 'react';
import { Cabecera } from 'components/styled/Titles.js';
import TallerContent from 'routes/Talleres/components/TallerContent';

class Talleres extends React.Component {

  render () {
    return (
      <div>
        <Cabecera>{'Nuestros talleres'}</Cabecera>
        <TallerContent />
      </div>
    );
  }
}

export default Talleres;