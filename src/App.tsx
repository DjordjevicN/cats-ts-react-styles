import React from 'react';
import{ H1, H2, H3, H4, H5, H6, Paragraph }from './styles/Typography'
import {Button} from './styles/Buttons'
import {Wrapper} from './styles/GeneralStyles'

const App:React.FC=()=> {
  return (
    <Wrapper>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
      <Paragraph>Paragraph</Paragraph>
      <Button>Button</Button>
    </Wrapper>
  );
}

export default App;

