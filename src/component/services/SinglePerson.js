import { Link, useParams } from "react-router-dom";
import listData from "./listData";
const SinglePerson = () => {
  let product;
  let { productId } = useParams();
  productId = parseInt(productId);
  for (let i = 0; i < listData.length; i++) {
    if (listData[i].Id === productId) {
      product = listData[i];
    }
  }
  const { Id, Fullname, Status, Description, Image } = product;
  return (
    <div className="single-person">
      <h1>{productId}</h1>
      <h2>id: {Id}</h2>
      <h2>Fullname: {Fullname}</h2>
      <h2>Status: {Status}</h2>
      <h2>Description: {Description}</h2>
      <h2>
        Image: <img src={Image} alt={Id} />
      </h2>
    </div>
  );
};
export default SinglePerson;
