// src/pages/TanksPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { tanks } from '../data/tanks';
import VehicleCard from '../components/VehicleCard';
import FilterComponent from '../components/FilterComponent';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f0f5f5;
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

const TanksPage = () => {
  const [filters, setFilters] = useState({
    country: '',
    era: '',
    role: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredTanks = tanks.filter((vehicle) => {
    const matchesCountry = filters.country ? vehicle.specifications['Country of origin'] === filters.country : true;
    const matchesEra = filters.era ? vehicle.specifications['Era'] === filters.era : true;
    const matchesRole = filters.role ? vehicle.role === filters.role : true;
    return matchesCountry && matchesEra && matchesRole;
  });

  const filterOptions = [
    {
      name: 'country',
      label: 'Country',
      options: [...new Set(tanks.map((item) => item.specifications['Country of origin']))],
      value: filters.country,
    },
    {
      name: 'era',
      label: 'Era',
      options: [...new Set(tanks.map((item) => item.specifications['Era']))],
      value: filters.era,
    },
    {
      name: 'role',
      label: 'Role',
      options: [...new Set(tanks.map((item) => item.role))],
      value: filters.role,
    },
  ];

  return (
    <PageContainer>
      <Title>Tanks</Title>
      <FilterComponent filters={filterOptions} onFilterChange={handleFilterChange} />
      <VehicleList>
        {filteredTanks.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} type="tanks" />
        ))}
      </VehicleList>
    </PageContainer>
  );
};

export default TanksPage;
