import '@/app/globals.css';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  ColorSchemeScript,
  Container,
  Grid,
  GridCol,
  MantineProvider,
  MantineThemeOverride,
  Title
} from '@mantine/core';
import '@mantine/core/styles.css';
import { FileJson2 } from 'lucide-react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';
// import CookiesConsent from './components/CookiesConsent';
// import FooterBar from './components/FooterBar';
// import LegalMentions from './components/LegalMentions';
// import NavigationBar from './components/NavigationBar';

const theme: MantineThemeOverride = {
  fontFamily: 'Open,Arial,Helvetica,sans-serif',
  fontSizes: {
    xs: '0.6rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.4rem'
  },
  headings: {
    sizes: {
      h1: { fontWeight: '100', fontSize: '2.3em' },
      h2: { fontSize: '1.2rem' },
      h3: { fontSize: '1.1rem' }
    }
  },

  colors: {
    personal: [
      '#fef8ec',
      '#fbeed8',
      '#f7dba8',
      '#f4c876',
      '#f2b74d',
      '#f1ac35',
      '#f0a728',
      '#d6921e',
      '#bf8117',
      '#a56f08'
    ]
  },
  primaryColor: 'personal'
};

const author: Author = { name: 'Benjamin Talou', url: 'https://benjamin.talou@gmail.com' };

const getMessages = async (locale: string) => {
  return (await import(`../../../messages/${locale}.json`)).default;
};

export async function generateMetadata({ params: { locale = 'fr' } }: { params: { locale: string } }) {
  const messages = await getMessages(locale);
  const metadata: Metadata = {
    title: 'Benjamin Talou',
    //description: messages.Metadata.description,
    //keywords: messages.Metadata.keywords,
    authors: [author],
    robots: 'index, follow'
  };
  return metadata;
}

export default async function RootLayout({
  children,
  params: { locale = 'fr' }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ColorSchemeScript defaultColorScheme="dark" />
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <AppShell c="personal">
              <AppShellHeader>
                <Container p="md">
                  <Grid justify="center" align="center">
                    <GridCol span={{ base: 2, sm: 1 }}>
                      <FileJson2 size={'4em'} />
                    </GridCol>
                    <GridCol span={{ base: 10, sm: 11 }}>
                      <Title order={1}>Benjamin Talou</Title>
                      <Title order={2}>Développeur Fullstack Javascript, Encadrant technique, Product Owner</Title>
                    </GridCol>
                  </Grid>
                </Container>
              </AppShellHeader>
              <AppShellMain>
                <Box style={{ margin: '0 auto' }} pt={'9em'}>
                  {children}
                </Box>
              </AppShellMain>
            </AppShell>
          </MantineProvider>
          {/* <CookiesConsent /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
