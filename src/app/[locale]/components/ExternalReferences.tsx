import { Anchor, Grid, GridCol } from '@mantine/core';
import { AtSign, Github, Linkedin, Phone } from 'lucide-react';
import React from 'react';

const ExternalRefernces = ({}: {}): React.ReactNode => {
  return (
    <Grid justify="center" align="center" ta={'center'}>
      <GridCol span={{ base: 12, xs: 2 }}></GridCol>
      <GridCol span={{ base: 12, xs: 2 }}>
        <Anchor href="https://github.com/benjamintalou" target="_blank">
          <Github size={'4em'} />
        </Anchor>
      </GridCol>
      <GridCol span={{ base: 12, xs: 2 }}>
        <Anchor href="https://fr.linkedin.com/in/benjamintalou" target="_blank">
          <Linkedin size={'4em'} />
        </Anchor>
      </GridCol>
      <GridCol span={{ base: 12, xs: 2 }}>
        <Anchor href="#" target="_blank">
          <Phone size={'4em'} />
        </Anchor>
      </GridCol>
      <GridCol span={{ base: 12, xs: 2 }}>
        <Anchor href="#" target="_blank">
          <AtSign size={'4em'} />
        </Anchor>
      </GridCol>
      <GridCol span={{ base: 12, xs: 2 }}></GridCol>
    </Grid>
  );
};

export default ExternalRefernces;
