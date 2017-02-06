import React from 'react';
import FormField from 'components/FormField';
import { PinkButton } from 'components/styled/Buttons.js';
import { Input, TextArea } from 'components/styled/Inputs.js';
import SplitHalf from 'components/SplitHalf';

class ContactForm extends React.Component {

  render () {
    return (
      <form style={{width: '50%'}}>
        <SplitHalf 
          left={
            <div>
              <FormField
                label={'Nombre:'}
                inputType={Input}
                inputProps={
                  {
                    type: 'text',
                    style:{ display: 'block'},
                    required: true
                  }
                }
              />
              <FormField
                label={'Mail:'}
                inputType={Input}
                inputProps={
                  {
                    type: 'email',
                    style:{ display: 'block'},
                    required: true
                  }
                }
              />
            </div>
          }

          right={
            <div>
              <FormField
                label={'Mensaje: '}
                inputType={TextArea}
                inputProps={
                  {
                    style:{ display: 'block', width: 300, height: 150, maxHeight: 200},
                    required: true
                  }
                }
              />
            </div>
          }
        />
        <PinkButton type={'submit'}>{'Enviar'}</PinkButton>
      </form>
    );
  }
}

export default ContactForm;
