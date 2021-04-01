import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  rowsPerPage: 5,
  total: 100,
  page: 1,
};
