import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Car Detail</h1>
      <h2>Car ID: {id}</h2>
    </div>
  );
};

export default CarDetail;
