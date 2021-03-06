import React from 'react';
import SplitHalf from 'components/SplitHalf';
import Separator from 'components/styled/Separator.js';
import { Button } from 'components/styled/Buttons.js';
import ProductDescription from 'components/ProductDescription';

class TallerContent extends React.Component {

  render () {
    const { talleres } = this.props;
    return (
      <div>
        {talleres.map((t,i) =>
          <div key={t.title}>
            <SplitHalf
              inverse={(i + 1) % 2 === 0}
              right={
                <div>
                  <ProductDescription title={t.title} description={t.description}/>
                  <Button>{'Inscribirse'}</Button>
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

export default TallerContent;
