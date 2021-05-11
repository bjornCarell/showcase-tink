import { useEffect, useState } from 'react';
import axios from 'axios';

export type Categories = {
  code: string,
  defaultChild: boolean,
  id: string,
  parent: string,
  primaryName: string,
  searchTerms: null,
  secondaryName: string,
  sortOrder: number,
  type: string,
  typeName: string
}

export type FetchState = {
  isLoading: boolean;
  categories: Categories[];
  errorMessage?:string;
}

export const useCategories = (locale: string): FetchState => {
  const [state, setState] = useState<FetchState>({
    isLoading: true,
    categories: [],
  });

  useEffect(() => {
    const getCategories = async (): Promise<void> => {
      try {
        const response = await axios.get('/categories', {
          params: { locale },
        });
        if (response.status === 200) {
          const data = await response.data;
          setState({
            isLoading: false,
            categories: data,
          });
        }
      } catch (errorMessage) {
        setState({
          isLoading: false,
          categories: [],
          errorMessage,
        });
      }
    };

    getCategories();
  }, [locale]);

  console.log('category1', state.categories[0]);

  return state;
};
