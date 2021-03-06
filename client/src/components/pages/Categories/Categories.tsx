import React from 'react';
import { CategoriesTable } from '../../templates/Categories/CategoriesTable/CategoriesTable';
import { Container } from '../../atoms/Container/Container';

export const Categories = (): JSX.Element => (
  <Container margin>
    <CategoriesTable />
  </Container>
);
