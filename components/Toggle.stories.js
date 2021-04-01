import React from 'react';

import Toggle from './Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = (args) => <Toggle {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  value: true,
};

export const Unchecked = Template.bind({});

Unchecked.args = {
  value: false,
};

export const Labeled = Template.bind({});

Labeled.args = {
  label: 'Group By',
  value: true,
};