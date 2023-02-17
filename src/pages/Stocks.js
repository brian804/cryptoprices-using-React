import { Link } from "react-router-dom"

export default function Stocks(props){
    return (
        <div className="stocklist">
          <h2>stocks page</h2>
          <ul>
            {props.data.map((p) => (
              <Link to={`${p.symbol}`} key={p.symbol}>
                <li>{p.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      );
    }