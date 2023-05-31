import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Subtitle from './components/Subtitle/Subtitle';
import Main from './components/Main/Main';
import Paragraph from './components/Paragraph/Paragraph';


const App = () => {
  return (
    <div>
        <Header>
          <Title text="Título del encabezado" />
        </Header>
        <Main>
          <Paragraph text="Paragraph"></Paragraph>
        </Main>
        <Footer>
          <Subtitle text="Subtitle" />
        </Footer>
    </div>
  );
};

export default App;