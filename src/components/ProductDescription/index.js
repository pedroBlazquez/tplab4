import React from 'react';
import { LeftPinkBorderTitle } from 'components/styled/Titles.js';
import Article from 'components/styled/Article';

class ProductDescription extends React.Component {

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <LeftPinkBorderTitle>{title}</LeftPinkBorderTitle>
        <Article>
          <p>{description}</p>
        </Article>
      </div>
    );
  }
}

export default ProductDescription;
