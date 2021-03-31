import React from 'react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  userId: 1,
  title: 'qui est esse',
  description: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};
