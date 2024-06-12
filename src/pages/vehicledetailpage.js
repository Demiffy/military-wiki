// src/pages/VehicleDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft';
import { tanks } from '../data/tanks';

const DetailContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const VehicleImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 16px;
  margin-right: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const Specifications = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
`;

const SpecTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SpecItem = styled.li`
  font-size: 1rem;
  color: #555;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const AdditionalInfo = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const getVehicle = (type, id) => {
  if (type === 'aircraft') {
    return aircraft.find((v) => v.id === parseInt(id));
  }
  if (type === 'tanks') {
    return tanks.find((v) => v.id === parseInt(id));
  }
  return null;
};

const VehicleDetailPage = () => {
    const { type, id } = useParams();
    const vehicle = getVehicle(type, id);
  
    if (!vehicle) return <div>Vehicle not found</div>;

    return (
        <DetailContainer>
          <Header>
            <VehicleImage src={vehicle.image} alt={vehicle.name} />
            <Title>{vehicle.name}</Title>
          </Header>
          <Content>
            <Description>{vehicle.description}</Description>
            <Specifications>
              <SpecTitle>Specifications</SpecTitle>
              <SpecList>
                {Object.entries(vehicle.specifications).map(([key, value]) => (
                  <SpecItem key={key}>
                    <span><strong>{key}:</strong></span> 
                    <span>{value}</span>
                  </SpecItem>
                ))}
              </SpecList>
            </Specifications>
            <AdditionalInfo>
              <InfoTitle>Information about {vehicle.name}</InfoTitle>
              <InfoText>{vehicle.additionalInfo}</InfoText>
            </AdditionalInfo>
          </Content>
        </DetailContainer>
      );
    };

export default VehicleDetailPage;
