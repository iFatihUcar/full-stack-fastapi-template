import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

const mockData = {
  genderDistribution: [
    { department: "Yazılım", male: 60, female: 40 },
    { department: "Pazarlama", male: 45, female: 55 },
    { department: "İnsan Kaynakları", male: 30, female: 70 },
    { department: "Finans", male: 55, female: 45 },
    { department: "Operasyon", male: 65, female: 35 },
  ],
  ageDistribution: [
    { range: "18-25", count: 150 },
    { range: "26-35", count: 280 },
    { range: "36-45", count: 170 },
    { range: "46-55", count: 90 },
    { range: "55+", count: 30 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const GenderDistributionChart = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['diversity', 'gender'],
    queryFn: () => Promise.resolve(mockData.genderDistribution),
  });

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500">Veri yüklenirken bir hata oluştu</Text>;
  if (!data) return null;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="male" fill="#8884d8" name="Erkek" />
        <Bar dataKey="female" fill="#82ca9d" name="Kadın" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const AgeDistributionChart = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['diversity', 'age'],
    queryFn: () => Promise.resolve(mockData.ageDistribution),
  });

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500">Veri yüklenirken bir hata oluştu</Text>;
  if (!data) return null;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="range"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};