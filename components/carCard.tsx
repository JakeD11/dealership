import styled from "styled-components";
import Image from "next/image";

const CarCards = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const CarImage = styled(Image)`
  content: fill;
  width: 100%;
`;

const CarCard = ({ car }) => (
  <>
    <CarCards>
      <ImageContainer>
        <CarImage
          width={200}
          height={200}
          src={car.media_urls[0]?.large}
          alt={`${car.make} ${car.model}`}
        />
      </ImageContainer>
      <h3>
        {" "}
        {car.year} {car.make} {car.model}
      </h3>

      <p>{car.derivative}</p>

      <p>Price: {car.price}</p>
    </CarCards>
  </>
);

export default CarCard;
