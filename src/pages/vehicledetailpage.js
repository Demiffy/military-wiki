// src/pages/VehicleDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft';
import { tanks } from '../data/tanks';

const DetailContainer = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
  text-align: left;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const VehicleName = styled.h1`
  font-size: 2.5rem;
  color: #333;
  font-family: 'Roboto', sans-serif;
  margin: 0;
`;

const Flag = styled.img`
  width: 50px;
  height: auto;
  margin-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const SpecificationsList = styled.ul`
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
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  font-family: 'Open Sans', sans-serif;
`;

const SpecKey = styled.span`
  font-weight: bold;
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SpecValue = styled.span`
  flex: 1;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
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
        <Title>
          <VehicleName>{vehicle.name}</VehicleName>
          <Flag src={vehicle.flag} alt={`${vehicle.specifications['Country of origin']} flag`} />
        </Title>
      </Header>
      <Content>
        <Text>{vehicle.description}</Text>
        <Section>
          <SectionTitle>Specifications</SectionTitle>
          <SpecificationsList>
            {Object.entries(vehicle.specifications).map(([key, value]) => (
              <SpecItem key={key}>
                <SpecKey>{key}:</SpecKey>
                <SpecValue>{value}</SpecValue>
              </SpecItem>
            ))}
          </SpecificationsList>
        </Section>
        {vehicle.armament && (
          <Section>
            <SectionTitle>Armament</SectionTitle>
            <Text><BoldText>Guns:</BoldText> {vehicle.armament.Guns}</Text>
            <Text><BoldText>Air-to-Air Missiles:</BoldText> {vehicle.armament['Air-to-air missiles']?.join(', ')}</Text>
            <Text><BoldText>Air-to-Ground Weapons:</BoldText> {vehicle.armament['Air-to-ground weapons']?.join(', ')}</Text>
            <Text><BoldText>External Hardpoints:</BoldText> {vehicle.armament['External hardpoints']}</Text>
          </Section>
        )}
        {vehicle.avionics && (
          <Section>
            <SectionTitle>Avionics</SectionTitle>
            <Text><BoldText>Radar:</BoldText> {vehicle.avionics.Radar}</Text>
            <Text><BoldText>Sensor Suite:</BoldText> {vehicle.avionics['Sensor suite']}</Text>
            <Text><BoldText>Communications:</BoldText> {vehicle.avionics.Communications}</Text>
          </Section>
        )}
        {vehicle['stealth features'] && (
          <Section>
            <SectionTitle>Stealth Features</SectionTitle>
            <Text><BoldText>Radar Cross-Section:</BoldText> {vehicle['stealth features']['Radar cross-section']}</Text>
            <Text><BoldText>Infrared Signature:</BoldText> {vehicle['stealth features']['Infrared signature']}</Text>
          </Section>
        )}
        {vehicle.maneuverability && (
          <Section>
            <SectionTitle>Maneuverability</SectionTitle>
            <Text><BoldText>Thrust Vectoring:</BoldText> {vehicle.maneuverability['Thrust vectoring']}</Text>
            <Text><BoldText>Supercruise:</BoldText> {vehicle.maneuverability.Supercruise}</Text>
          </Section>
        )}
        {vehicle.role && (
          <Section>
            <SectionTitle>Role</SectionTitle>
            <Text>{vehicle.role}</Text>
          </Section>
        )}
        {vehicle['development history'] && (
          <Section>
            <SectionTitle>Development History</SectionTitle>
            <Text><BoldText>Program Origin:</BoldText> {vehicle['development history']['Program origin']}</Text>
            <Text><BoldText>Contract Awarded:</BoldText> {vehicle['development history']['Contract awarded']}</Text>
            <Text><BoldText>Cost per Unit:</BoldText> {vehicle['development history']['Cost per unit']}</Text>
          </Section>
        )}
        {vehicle.deployment && (
          <Section>
            <SectionTitle>Deployment</SectionTitle>
            <Text><BoldText>First Operational Squadron:</BoldText> {vehicle.deployment['First operational squadron']}</Text>
            <Text><BoldText>Notable Deployments:</BoldText> {vehicle.deployment['Notable deployments']?.join(', ')}</Text>
            <Text><BoldText>International Exercises:</BoldText> {vehicle.deployment['international exercises']?.join(', ')}</Text>
          </Section>
        )}
        {vehicle.additionalInfo && (
          <Section>
            <SectionTitle>Additional Information</SectionTitle>
            <Text>{vehicle.additionalInfo}</Text>
          </Section>
        )}
      </Content>
    </DetailContainer>
  );
};

export default VehicleDetailPage;
