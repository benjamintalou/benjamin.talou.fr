import { Container, Grid, GridCol, Stack, Text, Timeline, Title } from '@mantine/core';
import { Apple, Camera, GraduationCap, Leaf, PanelsTopLeft, Radio, RocketIcon, Stethoscope } from 'lucide-react';
import ExternalReferences from './components/ExternalReferences';
import JourneyItem from './components/JourneyItem';
import JourneySubitem from './components/JourneySubitem';
import SkillItem from './components/SkillItem';

const HomePage = () => {
  return (
    <Container>
      <Stack gap={'xl'}>
        <ExternalReferences />
        <Title order={3} fz={'2.5em'}>
          {"Coordination d'équipe"}
        </Title>
        <SkillItem
          title="Encadrement technique"
          content={
            "Développeur depuis plus de 20 ans, j'aime mettre les mains dans le code ! En tant que responsable technique, j'encadre également les équipes durant les phases de développement, notamment en participant à l'élaboration des architectures et des solutions, pour la relecture de code dans l'encadrement pédagogique, et en participant activement aux développements des solutions."
          }
        />
        <SkillItem
          title="Méthode de développement"
          content={
            "Dans le cadre des projets chez Sigfox et Kaduceo, je participe à la mise en place, à l'amélioration et à l'application des méthodes adaptées aux différentes situations des projets : définition des processus agiles, configuration des outils, écoute des habitudes et des besoins exprimés par l'équipe de développement, ainsi que la gestion des sprints et backlogs."
          }
        />
        <SkillItem
          title="Communication avec les équipes produits"
          content={
            "Ayant adopté la casquette de Product Owner à travers differents projets, j'aime me situer entre l'équipe produits et l'équipe de développement."
          }
        />
        <SkillItem
          title="Communication"
          content={'Participations aux réunions d’échanges technique et produit organisées la French TechToulouse'}
        />

        <Title order={3} fz={'2.5em'}>
          Stack technique préférée
        </Title>
        <Stack gap={'lg'}>
          <Grid justify="center" align="flex-start">
            <GridCol span={{ base: 12, sm: 6 }}>
              <SkillItem
                title="Frontend"
                content={'React, Typescript & Javascript, Next.js, HTML5, CSS, Mise en place de Design Systems'}
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6 }}>
              <SkillItem
                title="Backend"
                content={
                  'Architecture & déploiements, Node, PHP, GraphQL, MongoDB, Postgres, API, Authentification, AWS, Unix, Docker'
                }
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6 }}>
              <SkillItem
                title="Qualité & tests"
                content={'Tests unitaires et couverture de code, tests fonctionnels, intégration continue.'}
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6 }}>
              <SkillItem content={'Figma, Canva'} title="Produits" />
            </GridCol>
          </Grid>
        </Stack>
        <Title order={3} fz={'2.5em'}>
          Parcours
        </Title>
        <Stack gap={'lg'}>
          <Timeline active={15} bulletSize={30} lineWidth={6}>
            <JourneyItem
              title={'2020 ‣ Aujourd’hui : Kaduceo - Toulouse'}
              role={
                'Toulouse Responsable du développement des produits numériques Responsable de l’équipe web composée de quatre personnes'
              }
              content={
                'Encadrement technique, mise en place des architectures, gestion des sprints et des roadmaps. Définitions produits des plateformes. Travail en collaboration très étroite avec l’équipe de Data Scientists sur des projets pour les hôpitaux publics, basés souvent sur des modèles de Machine Learning.'
              }
              Icon={Stethoscope}
            />
            <JourneyItem
              title={'2023 ‣ Aujourd’hui : PADEO - Toulouse'}
              role={"Bénévole et co-responsable du développement d'un assistant numérique"}
              content={'Destiné à aider les partiuliers à baisser leur empreinte carbone'}
              Icon={Leaf}
            />
            <JourneyItem title={' 2016 ‣ 2020 : Sigfox - Labège'} Icon={Radio}>
              <Stack gap={'lg'}>
                <JourneySubitem
                  title={'Labège Product Owner & Leader technique sur Sigfox Build (juillet 2018 - juin 2020)'}
                  content={
                    'Définition et gestion de la roadmap, des sprints de l’équipe technique et développement. A l’écoute des besoins de l’écosystème IoT et des services internes à retranscrire sous forme de fonctionnalités sur la plateforme.'
                  }
                />
                <JourneySubitem
                  title={'Développeur Fullstack Javascript (juillet 2016-juillet 2018)'}
                  content={
                    'Au sein d’une équipe agile organisée en squads. Définition des besoins et développement en intégrations continues des plateformes Sigfox Partner Network, Sigfox Build.'
                  }
                />
              </Stack>
            </JourneyItem>
            <JourneyItem
              title={'2014 ‣ 2020 : We Are Monkeys - Toulouse'}
              role={'Co-fondateur, architecte logiciel, développeur'}
              content={
                'Wistiti : Location de bornes photo pour particuliers et entreprises. Les photos sont envoyées en temps réel et imprimées sur place. Développement de toutes les interfaces et services associés. My Wistiti : plateforme SaaS pour bornes interactives. Architecture logicielle. Les utilisateurs peuvent gérer à distance les affichages de leurs bornes à destination du grand public (services photobooth, sondages, formulaires, inscriptions, parrainages, jeux concours, diaporamas)'
              }
              Icon={Camera}
            />
            <JourneyItem
              title={'2010 ‣ 2014 : Overblog - Toulouse'}
              role={
                'Toulouse Développeur Frontend Travail sur la plateforme d’hébergement de blogs Overblog au sein d’une équipe technique d’une dizaine de personnes'
              }
              content={
                'Travail sur la plateforme d’hébergement de blogs Overblog au sein d’une équipe technique d’une dizaine de personnes. Organisation des projets autours des méthodologies agiles. Maintenance et évolution de l’ancienne version et développement d’une nouvelle version. Participation au projet Wikio Experts.'
              }
              Icon={PanelsTopLeft}
            />
            <JourneyItem
              title={'2008 ‣ 2010 : Creme Software - Dublin'}
              role={'Développeur Fullstack et responsable déploiement'}
              content={
                "Évolution de la principale solution en ligne de la société destinée à de grands groupes alimentaires et cosmétiques, à des organisations de sécurité alimentaire ou à des centres de recherches. Cette application permet d'effectuer des contrôles sur les produits et des calculs d'impacts sur les populations à l'aide de calculs probabilistes."
              }
              Icon={Apple}
            />
            <JourneyItem
              title={'2007 ‣ 2008 - Toulouse'}
              role={'Plusieurs missions courtes en tant que développeur Fullstack'}
              Icon={RocketIcon}>
              <Stack c="white">
                <Text>
                  {
                    "Anyware Technologies, All Access Interactive, Eurecia (en stage, création des bases du code de la solution de l'entreprise)"
                  }
                </Text>
              </Stack>
            </JourneyItem>

            <JourneyItem title={'Formation scolaire'} Icon={GraduationCap}>
              <Stack gap={'lg'}>
                <JourneySubitem title={'Master IHM 2007'} content={'Interaction Homme Machine à l’ENAC de Toulouse'} />
                <JourneySubitem
                  title={'Master IUP ISI'}
                  content={
                    'Ingénierie des Systèmes Informatiques à l’Université Paul Sabatier de Toulouse Deux ans d’expérience de développement en stages dans le cadre de ma formation : chez Anyware Technologies, Eurecia, All Access Interactive et Latécoère'
                  }
                />
                <JourneySubitem
                  title={'Stages'}
                  content={
                    'Deux ans d’expérience de développement en stages dans le cadre de ma formation : chez Anyware Technologies, Eurecia, All Access Interactive et Latécoère'
                  }
                />
              </Stack>
            </JourneyItem>
          </Timeline>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomePage;
