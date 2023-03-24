import React from 'react';
import tableFlip from '@assets/table-flip.svg';
import { Container, Heading, RedParagraph, StatusCode } from './PageNotFound.styles';

const PageNotFound = () => {
  return (
    <Container>
      <StatusCode>404</StatusCode>
      <Heading>Sorry, page <RedParagraph>NOT</RedParagraph> found...</Heading>
      <img src={tableFlip} />
    </Container>
  );
};

export default PageNotFound;
