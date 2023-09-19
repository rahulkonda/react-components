import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchForm from '../path/to/SearchForm'; // Adjust the import path
import SearchForm
export default {
  title: 'SearchForm',
  component: SearchForm,
};

const onSearch = action('onSearch'); // Mock onSearch action

export const Default = () => <SearchForm searchKey="Initial Value" onSearch={onSearch} />;

export const WithCustomSearchKey = () => <SearchForm searchKey="Custom Value" onSearch={onSearch} />;
