import CarCard from "./carCard";
import React, { useState } from "react";
import CarFilterHeader from "./carFilterHeader";
import carData from "../public/data/cars.json";
import styled from "styled-components";

const CarDisplay = () => {
  const [filter, setFilter] = useState("all");
  const { data: cars } = carData;

  const filteredCars = cars.filter((car) => {
    if (filter === "all") return true;
    if (filter === "new") return car.advert_classification === "NEW";
    if (filter === "used") return car.advert_classification === "USED";
    if (filter === "offer") return true;
    return false;
  });

  return (
    <>
      <CarDisplayContainer>
        <CarFilterHeader count={filteredCars.length} setFilter={setFilter} />
        <GridContainer>
          {filteredCars.map((car) => (
            <CarCard key={car.advertisable_id} car={car} />
          ))}
        </GridContainer>
      </CarDisplayContainer>
    </>
  );
};

export default CarDisplay;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  columns: 3;
`;

const CarDisplayContainer = styled.div`
  padding: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;
