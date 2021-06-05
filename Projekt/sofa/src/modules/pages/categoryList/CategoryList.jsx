import { useEffect, useState } from "react";
import { CategoryListItem } from "./CategoryListItem";
import { useParams } from "react-router";
import "../../../styles/Categories.css";

export function CategoryList() {
  const [categories, setCategories] = useState(null);
  const { category } = useParams();
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://master.dev.sofascore.com/api/v1/sport/${
            !!category ? category : "football"
          }/2021-05-23/7200/categories`
        )
      ).json();
      setCategories(data);
    })();
  });

  return (
    <div className="category-list">
      {categories === null ? (
        <h1>Loading...</h1>
      ) : (
        categories.categories
          .sort((a, b) => {
            if (a.category.priority === undefined) {
              return 1;
            } else if (b.category.priority === undefined) {
              return -1;
            }
            return b.category.priority - a.category.priority;
          })
          .map((v) => (
            <CategoryListItem
              key={v.category.id}
              category={v.category}
            ></CategoryListItem>
          ))
      )}
    </div>
  );
}
