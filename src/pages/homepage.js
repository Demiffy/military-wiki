// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft';
import { tanks } from '../data/tanks';

const HomePageContainer = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  color: #222;
  padding: 0rem 2rem;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CallToAction = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #222;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const FeaturedSection = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeaturedVehicleContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: auto;
  text-align: left;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const VehicleImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 16px;
  margin-right: 1rem;
`;

const VehicleInfo = styled.div`
  flex: 1;
`;

const VehicleTitle = styled.h3`
  font-size: 2rem;
  color: #333;
`;

const VehicleDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const StatsSection = styled.div`
  background-color: #e6e8e6;
  color: #282c34;
  padding: 2rem;
  border-radius: 16px;
  margin: 2rem 0;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
`;

const HomePage = () => {
  const [randomVehicle, setRandomVehicle] = useState(null);

  useEffect(() => {
    const allVehicles = [...aircraft, ...tanks];
    const randomIndex = Math.floor(Math.random() * allVehicles.length);
    setRandomVehicle(allVehicles[randomIndex]);
  }, []);

  return (
    <HomePageContainer>
      <HeroSection>
        <HeroTitle>Welcome to Military Encyclopedia</HeroTitle>
        <HeroDescription>Discover detailed information about various military vehicles, including aircraft and tanks. Explore our database and test your knowledge with our quiz.</HeroDescription>
        <CallToAction href="#featured">Get Started</CallToAction>
      </HeroSection>

      <FeaturedSection id="featured">
        <SectionTitle>Featured Vehicle</SectionTitle>
        {randomVehicle && (
          <FeaturedVehicleContainer>
            <VehicleImage src={randomVehicle.image} alt={randomVehicle.name} />
            <VehicleInfo>
              <VehicleTitle>{randomVehicle.name}</VehicleTitle>
              <VehicleDescription>{randomVehicle.description}</VehicleDescription>
            </VehicleInfo>
          </FeaturedVehicleContainer>
        )}
      </FeaturedSection>

      <StatsSection>
        <StatsGrid>
          <StatItem>
            <StatNumber>{aircraft.length}</StatNumber>
            <StatLabel>Aircraft</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{tanks.length}</StatNumber>
            <StatLabel>Tanks</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{aircraft.length + tanks.length}</StatNumber>
            <StatLabel>Total Vehicles</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    </HomePageContainer>
  );
};

export default HomePage;
