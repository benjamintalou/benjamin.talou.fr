import { Stack, Text, Title } from '@mantine/core';
import React from 'react';

const JourneySubitem = ({ title = '', content }: { title?: string; content: string }): React.ReactNode => {
  return (
    <Stack>
      <Title order={4} fw={'bold'} c="grey">
        {title}
      </Title>
      <Text c="white">{content}</Text>
    </Stack>
  );
};

export default JourneySubitem;
