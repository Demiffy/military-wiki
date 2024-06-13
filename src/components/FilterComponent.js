// src/components/FilterComponent.js
import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    background-color: #f0f2f5;
  }
`;

const FilterComponent = ({ filters, onFilterChange }) => (
  <FilterContainer>
    {filters.map((filter) => (
      <FilterGroup key={filter.name}>
        <FilterLabel htmlFor={filter.name}>{filter.label}</FilterLabel>
        <FilterSelect
          id={filter.name}
          name={filter.name}
          value={filter.value}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
        >
          <option value="">All</option>
          {filter.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>
    ))}
  </FilterContainer>
);

export default FilterComponent;
