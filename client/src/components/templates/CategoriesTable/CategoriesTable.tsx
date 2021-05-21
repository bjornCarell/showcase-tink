import React, { useState } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { localesInOxfordCategories } from '../../../constants/locales';
import { TableWrapper } from '../../atoms/TableWrapper/TableWrapper';
import { Table } from '../../atoms/Table/Table';
import { TableHead } from '../../atoms/TableHead/TableHead';
import { TableBody } from '../../atoms/TableBody/TableBody';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableCell } from '../../atoms/TableCell/TableCell';
import { Paper } from '../../atoms/Paper/Paper';
import { FlexContainer, FlexItem } from '../../atoms/Flex/Flex';
import { Heading } from '../../atoms/Heading/Heading';

export const CategoriesTable = ():JSX.Element => {
  const [locale, setLocale] = useState<string>('en_US');
  const state = useCategories(locale);

  const onSelectLocale = (e:any):void => {
    setLocale(e.target.value);
  };

  return (
    <Paper radius shadow>
      <TableWrapper>
        <FlexContainer justifyBetween>
          <FlexItem flexNone>
            <select onChange={(e) => onSelectLocale(e)}>
              {
              localesInOxfordCategories.map((country) => (
                <option value={country.locale}>{country.language}</option>
              ))
            }
            </select>
          </FlexItem>
          <FlexItem flexNone>
            <Heading h4 noMargin>Categories</Heading>
          </FlexItem>
        </FlexContainer>
        <Table data-test-id="categories-list">
          <TableHead backgroundcolor colorLight>
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
    </Paper>
  );
};
