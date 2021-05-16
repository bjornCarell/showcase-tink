import React, { useState } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { Locales } from '../../../constants/locales';
import { TableWrapper } from '../../atoms/TableWrapper/TableWrapper';
import { Table } from '../../atoms/Table/Table';
import { TableHead } from '../../atoms/TableHead/TableHead';
import { TableBody } from '../../atoms/TableBody/TableBody';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableCell } from '../../atoms/TableCell/TableCell';
import { Container } from '../../atoms/Container/Container';

export const Categories = (): JSX.Element => {
  const [locale, setLocale] = useState<string>('en_US');
  const state = useCategories(locale);

  const onSelectLocale = (e:any):void => {
    setLocale(e.target.value);
  };

  return (
    <Container>
      <TableWrapper>
        <h1>Categories</h1>
        <select onChange={(e) => onSelectLocale(e)}>
          {
            Object.entries(Locales).map(([key, value]) => (
              <option value={value}>{key}</option>
            ))
          }
        </select>
        <Table data-test-id="categories-list">
          <TableHead backgroundcolor="yes" colorLight>
            <TableRow>
              <TableCell>Type Name</TableCell>
              <TableCell>Primary Name</TableCell>
              <TableCell>Secondary Name</TableCell>
              <TableCell>Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              state.categories.map((category) => (
                <TableRow key={category.code}>
                  <TableCell>{category.typeName}</TableCell>
                  <TableCell>{category.primaryName}</TableCell>
                  <TableCell>{category.secondaryName}</TableCell>
                  <TableCell>{category.code}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableWrapper>
    </Container>
  );
};
