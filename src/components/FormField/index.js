import React from 'react';
import Required from 'components/styled/Required.js';
import Label from 'components/styled/Label.js';

class FormField extends React.Component {

  render () {
    const { inputProps, inputType, label } = this.props;
    const Wrapper = inputProps.required ? Required : Label;
    const InputType = inputType;
    return (
      <Wrapper >
          <span>{label}</span>
          <InputType {...inputProps}/>
      </Wrapper>
    );
  }
}

export default FormField;
