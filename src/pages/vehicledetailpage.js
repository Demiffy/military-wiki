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
  max-width: 1400px;  // Increased max-width
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

const Developer = styled.h2`
  font-size: 1rem;
  color: #666;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 0.5rem;
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
  grid-template-columns: 1fr 1fr; // Changed to two columns
  gap: 1rem;
`;

const SpecItem = styled.li`
  font-size: 1.2rem;
  color: #333;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`;

const SpecKey = styled.span`
  font-weight: bold;
  flex: 1;
  text-align: left;
  margin-right: 1rem;
`;

const SpecValue = styled.span`
  flex: 2;
  text-align: left;
  white-space: normal;
`;

const SchemaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
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

const renderArmament = (armament) => {
  if (!armament) return null;

  const armamentElements = [];

  if (armament.Guns) {
    armamentElements.push(<Text key="Guns"><BoldText>Guns:</BoldText> {armament.Guns}</Text>);
  }
  if (armament["Air-to-air missiles"]) {
    armamentElements.push(<Text key="Air-to-air missiles"><BoldText>Air-to-Air Missiles:</BoldText> {armament["Air-to-air missiles"].join(', ')}</Text>);
  }
  if (armament["Air-to-ground weapons"]) {
    armamentElements.push(<Text key="Air-to-ground weapons"><BoldText>Air-to-Ground Weapons:</BoldText> {armament["Air-to-ground weapons"].join(', ')}</Text>);
  }
  if (armament["External hardpoints"]) {
    armamentElements.push(<Text key="External hardpoints"><BoldText>External Hardpoints:</BoldText> {armament["External hardpoints"]}</Text>);
  }
  if (armament.Bombs) {
    armamentElements.push(<Text key="Bombs"><BoldText>Bombs:</BoldText> {armament.Bombs}</Text>);
  }
  if (armament.Missiles) {
    armamentElements.push(<Text key="Missiles"><BoldText>Missiles:</BoldText> {armament.Missiles}</Text>);
  }
  if (armament["Additional equipment"]) {
    armamentElements.push(<Text key="Additional equipment"><BoldText>Additional Equipment:</BoldText> {armament["Additional equipment"]}</Text>);
  }

  return armamentElements;
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
          <Developer>Developed by {vehicle.developer}</Developer>
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
            {renderArmament(vehicle.armament)}
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
            <Text><BoldText>International Exercises:</BoldText> {vehicle.deployment['International exercises']?.join(', ')}</Text>
          </Section>
        )}
        {vehicle.schema && (
          <Section>
            <SectionTitle>Schema</SectionTitle>
            <SchemaImage src={vehicle.schema} alt={`${vehicle.name} schema`} />
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
