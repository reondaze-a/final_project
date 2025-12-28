import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="gap-4 flex">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}