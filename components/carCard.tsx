import styled from "styled-components";
import Image from "next/image";
import { capitalizeFirstLetter, formatMiles } from "@/utils/sharedUtils";

const CarCard = ({ car }) => {
  const price = parseInt(car.price);

  return (
    <>
      <CarCards>
        <ImageContainer>
          <CarImage
            width={333}
            height={250}
            src={car.media_urls[0]?.thumb}
            alt={`${car.make} ${car.model}`}
          />
          <ListingType>
            {capitalizeFirstLetter(car.advert_classification)}
          </ListingType>
          <InfoWrapper>
            <InfoTabs>{formatMiles(car.odometer_value)} miles</InfoTabs>
            <InfoTabs>{car.body_type} </InfoTabs>
            <InfoTabs>{capitalizeFirstLetter(car.transmission)} </InfoTabs>
          </InfoWrapper>
        </ImageContainer>
        <DescriptionContainer>
          <CarDescription>
            {car.year} {car.make} {car.model}
          </CarDescription>

          <CarDerivative>{car.derivative}</CarDerivative>
          <MonthlyPaymentText>
            £550.90 <Span>/mo (PCP)</Span>
          </MonthlyPaymentText>
          <PaymentText>£{price} Calculate</PaymentText>
        </DescriptionContainer>
      </CarCards>
    </>
  );
};

export default CarCard;

const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
`;

const ListingType = styled.div`
  position: absolute;
  background-color: #3f3a50;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  top: 10px;
  left: 10px;
  padding: 1px 10px;
  border: 1px solid #ffffff33;
  border-radius: 8px;
  font-family: "Overpass", sans-serif;
`;
const InfoTabs = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #ffffff;
  background-color: #3f3a50;
  padding: 1px 10px;
  border: 1px solid #ffffff33;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const DescriptionContainer = styled.div`
  padding: 10px;
`;
const PaymentText = styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  padding-top: 5px;
`;

const MonthlyPaymentText = styled(PaymentText)`
  font-size: 18px;
  font-weight: 700;
`;

const CarDescription = styled.div`
  color: #000000;
  font-size: 16px;
  padding: 2px 0;
`;

const CarDerivative = styled(CarDescription)`
  color: #55595d;
  font-size: 12px;
`;

const CarCards = styled.div`
  width: 333px;
  height: 365px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;

const CarImage = styled(Image)`
  content: fill;
  width: 100%;
  border-radius: 16px 16px 0 0;
`;
