import { Stack, Text, Title } from '@mantine/core';
import React from 'react';

const SkillItem = ({ title, content }: { title?: string; content: string }): React.ReactNode => {
  return (
    <Stack pl="sm" gap={'xs'}>
      {title ? <Title order={4}>{title}</Title> : null}
      <Text c="white" dangerouslySetInnerHTML={{ __html: content }} />
    </Stack>
  );
};

export default SkillItem;
