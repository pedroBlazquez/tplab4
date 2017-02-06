import React from 'react';
import ContactForm from './ContactForm';


class Contacto extends React.Component {

  render () {
    const { talleres } = this.props;
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

export default Contacto;
