import { useParams } from "react-router-dom";

function Symbol(props) {
  let stockID = useParams()["symbol"];

  const stockList = props.data;

  const found = stockList.find((element) => element.symbol === stockID);

  return (
    <div>
      <h2>Name: {found.name}</h2>
      <h2>Price: {found.lastPrice}</h2>
    </div>
  );
}

export default Symbol;