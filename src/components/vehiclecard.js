// src/components/VehicleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  max-width: 300px;
  text-align: center;
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0;
`;

const Description = styled.p`
  padding: 0 1rem;
  font-size: 1rem;
  color: #666;
  flex-grow: 1;
`;

const MoreLink = styled(Link)`
  display: block;
  padding: 1rem;
  background-color: #007bff;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 0 0 16px 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const VehicleCard = ({ vehicle, type }) => (
  <Card>
    <ImageContainer>
      <Image src={vehicle.image} alt={vehicle.name} />
    </ImageContainer>
    <Title>{vehicle.name}</Title>
    <Description>{vehicle.description}</Description>
    <MoreLink to={`/vehicle/${type}/${vehicle.id}`}>Learn More</MoreLink>
  </Card>
);

export default VehicleCard;
