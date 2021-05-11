import React, { useState } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { TableWrapper } from '../../atoms/TableWrapper/TableWrapper';
import { Table } from '../../atoms/Table/Table';
import { TableHead } from '../../atoms/TableHead/TableHead';
import { TableBody } from '../../atoms/TableBody/TableBody';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableCell } from '../../atoms/TableCell/TableCell';

export const Categories = (): JSX.Element => {
  const [locale, setLocale] = useState<string>('en_US');
  const state = useCategories(locale);

  const onSelectLocale = (e:any):void => {
    setLocale(e.target.value);
  };

  return (
    <TableWrapper>
      <h1>Categories</h1>
      <select onChange={(e) => onSelectLocale(e)}>
        <option value="en_US">English US</option>
        <option value="sv_SE">Swedish</option>
      </select>
      <Table data-test-id="categories-list">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Type Name</TableCell>
            <TableCell>Primary Name</TableCell>
            <TableCell>Secondary Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.categories.map((category) => (
              <TableRow key={category.code}>
                <TableCell>{category.type}</TableCell>
                <TableCell>{category.typeName}</TableCell>
                <TableCell>{category.primaryName}</TableCell>
                <TableCell>{category.secondaryName}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableWrapper>
  );
};
