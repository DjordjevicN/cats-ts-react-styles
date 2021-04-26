import React from 'react';
import{ H1, H2,  H4, H5, Paragraph }from './styles/Typography'
import {Button} from './styles/Buttons'
import {Wrapper,Image,FlexContainer,TextBoxWrapper} from './styles/GeneralStyles'

const App:React.FC=()=> {
  return (
<Wrapper>
  <H4>Blog #01</H4>
      <H1 center>Title of the Blog about Cats</H1>
  <FlexContainer row spaceAround>
    <Image src="maineCoon.jpg" alt="cat"/>
    <TextBoxWrapper>
    <H2>First section title</H2>
<Paragraph>Something is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
    </TextBoxWrapper>
  </FlexContainer>
  <H2>Second section title</H2>
    <Paragraph >Something is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
    <FlexContainer >
    <H5>25.5.2023</H5>
    <H5>by Tamara Bosak</H5>
    </FlexContainer>
    <Button>Read more</Button>
</Wrapper>
  );
}

export default App;

