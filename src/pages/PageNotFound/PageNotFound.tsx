import React from 'react';
import tableFlip from '@assets/table-flip.svg';
import { Container, Heading, RedParagraph, StatusCode } from './PageNotFound.styles';
import { Navbar } from '../../components';

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <StatusCode>404</StatusCode>
        <Heading>
          Sorry, page <RedParagraph>NOT</RedParagraph> found...
        </Heading>
        <img src={tableFlip} />
      </Container>
    </>
  );
};

export default PageNotFound;
