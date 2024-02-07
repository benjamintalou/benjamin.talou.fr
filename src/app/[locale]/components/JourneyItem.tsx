import { Stack, Text, TimelineItem, Title } from '@mantine/core';
import { FileJson2, LucideIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

const JourneyItem = ({
  title = '',
  content = '',
  role = '',
  children,
  Icon = FileJson2
}: {
  title?: string;
  content?: string;
  role?: string;
  children?: ReactNode;
  Icon?: LucideIcon;
}): React.ReactNode => {
  return (
    <TimelineItem title={title} fz={'xl'} p="xl" pt="0px" c="personal" bullet={<Icon />}>
      <Stack pt="sm">
        <Title order={5} fw={'bold'} c="grey">
          {role}
        </Title>
        <Text c="white">{content}</Text>
      </Stack>
      {children}
    </TimelineItem>
  );
};

export default JourneyItem;
