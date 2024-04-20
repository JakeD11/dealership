"use client";
import styled from "styled-components";
import carData from "../public/data/cars.json";
import Header from "@/components/header";
import FinanceBanner from "@/components/financeBanner";
import CarDisplay from "@/components/carDisplay";
import SidebarFilters from "@/components/sidebar";

export default function Home() {
  const { data: cars } = carData;
  return (
    <>
      <Header />
      <FinanceBanner />
      <Container>
        <SidebarFilters />
        <CarDisplay />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 10px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    width: 100%;
    margin: auto;
  }
`;
