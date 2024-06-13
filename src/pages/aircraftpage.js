// src/pages/AircraftPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft';
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

const AircraftPage = () => {
  const [filters, setFilters] = useState({
    country: '',
    era: '',
    propulsion: '',
    machCapable: '',
    role: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredAircraft = aircraft.filter((vehicle) => {
    const matchesCountry = filters.country ? vehicle.specifications['Country of origin'] === filters.country : true;
    const matchesEra = filters.era ? vehicle.specifications['Era'] === filters.era : true;
    const matchesPropulsion = filters.propulsion ? vehicle.specifications['Propulsion'] === filters.propulsion : true;
    const matchesMachCapable = filters.machCapable ? vehicle.specifications['Mach capable'] === filters.machCapable : true;
    const matchesRole = filters.role ? vehicle.role === filters.role : true;
    return matchesCountry && matchesEra && matchesPropulsion && matchesMachCapable && matchesRole;
  });

  const filterOptions = [
    {
      name: 'country',
      label: 'Country',
      options: [...new Set(aircraft.map((item) => item.specifications['Country of origin']))],
      value: filters.country,
    },
    {
      name: 'era',
      label: 'Era',
      options: [...new Set(aircraft.map((item) => item.specifications['Era']))],
      value: filters.era,
    },
    {
      name: 'propulsion',
      label: 'Propulsion',
      options: ['Jet', 'Propeller'],
      value: filters.propulsion,
    },
    {
      name: 'machCapable',
      label: 'Mach Capable',
      options: ['Yes', 'No'],
      value: filters.machCapable,
    },
    {
      name: 'role',
      label: 'Role',
      options: [...new Set(aircraft.map((item) => item.role))],
      value: filters.role,
    },
  ];

  return (
    <PageContainer>
      <Title>Aircraft</Title>
      <FilterComponent filters={filterOptions} onFilterChange={handleFilterChange} />
      <VehicleList>
        {filteredAircraft.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} type="aircraft" />
        ))}
      </VehicleList>
    </PageContainer>
  );
};

export default AircraftPage;
