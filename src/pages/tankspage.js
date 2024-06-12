// src/pages/TanksPage.js
import React from 'react';
import styled from 'styled-components';
import { tanks } from '../data/tanks';
import VehicleCard from '../components/vehiclecard';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const VehicleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const TanksPage = () => (
  <PageContainer>
    <Title>Tanks</Title>
    <VehicleList>
      {tanks.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} type="tanks" />
      ))}
    </VehicleList>
  </PageContainer>
);

export default TanksPage;
