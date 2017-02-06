import React from 'react';
import SplitHalf from 'components/SplitHalf';
import Separator from 'components/styled/Separator.js';
import { Button } from 'components/styled/Buttons.js';
import ProductDescription from 'components/ProductDescription';
import Required from 'components/styled/Required.js';

class EventoContent extends React.Component {

  render () {
    const { eventos } = this.props;
    return (
      <div>
        {eventos.map(e =>
          <div key={e.title}>
            <SplitHalf
              right={
                <div>
                  <ProductDescription title={e.title} description={e.description}/>
                  <Button>{'Entradas'}</Button>
                  <Button>{'Contacto'}</Button>
                  <Button>{'+Info'}</Button>
                </div>
              }
              left={<div>{'Here must be carrousel'}</div>}
            />
            <Separator />
          </div>
        )}
      </div>
    );
  }
}

export default EventoContent;