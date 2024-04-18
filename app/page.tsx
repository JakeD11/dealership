"use client";
import CarCard from "@/components/carCard";
import styled from "styled-components";
import carData from "../public/data/cars.json";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const { data: cars } = carData;
  return (
    <GridContainer>
      {cars.map((car) => (
        <CarCard key={car.advertisable_id} car={car} />
      ))}
    </GridContainer>
  );
}
