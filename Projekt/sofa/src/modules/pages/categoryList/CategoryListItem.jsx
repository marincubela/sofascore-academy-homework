import { Link } from "react-router-dom";
import "../../../styles/App.css";
import "../../../styles/Categories.css";

export function CategoryListItem(props) {
  return (
    <Link to={`/category/${props.category.id}`}>
      <div className="category-list-item card">{props.category.name}</div>
    </Link>
  );
}
