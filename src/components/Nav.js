import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
      <div className="nav-item">
        <Link to="/">
          <h2>iStocks</h2>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/stocks">
          <div>Stocks</div>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about">
          <div>About</div>
        </Link>
      </div>
    </div>
    )
}