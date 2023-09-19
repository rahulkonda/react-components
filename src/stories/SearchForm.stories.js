import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchForm from '../components/SearchForm'; // Adjust the import path

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
};

const onSearch = action('onSearch'); // Mock onSearch action

export const Default = () => <SearchForm searchKey="First Value" onSearch={onSearch} />;

export const WithCustomSearchKey = () => <SearchForm searchKey="Custom Value" onSearch={onSearch} />;
