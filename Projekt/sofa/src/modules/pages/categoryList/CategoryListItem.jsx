import { Link } from "react-router-dom";
import "../../../App.css";

export function CategoryListItem(props) {
  return (
    <Link to={`/category/${props.category.id}`}>
      <div className="category-list-item">
        {props.category.name} - {props.category.sport.name}
      </div>
    </Link>
  );
}
