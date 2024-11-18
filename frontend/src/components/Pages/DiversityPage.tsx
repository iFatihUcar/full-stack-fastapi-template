import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import {
  GenderDistributionChart,
  AgeDistributionChart,
} from '../Charts/DiversityCharts';

const DiversityPage = () => {
  return (
    <Box p={5}>
      <Heading mb={6}>Çeşitlilik & Kapsam Analizi</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Card>
            <CardHeader>
              <Heading size="md">Departmanlara Göre Cinsiyet Dağılımı</Heading>
            </CardHeader>
            <CardBody>
              <GenderDistributionChart />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem colSpan={1}>
          <Card>
            <CardHeader>
              <Heading size="md">Yaş Dağılımı</Heading>
            </CardHeader>
            <CardBody>
              <AgeDistributionChart />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DiversityPage;