"use client";

import { Category } from "@prisma/client";
import { IconType } from "react-icons/";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import CategoryItem from "./category-item";

type CategoriesProps = {
  items: Category[];
};

const iconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Photography: FcFilmReel,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  Filming: FcOldTimeCamera,
  Engineering: FcEngineering,
};

const Categories = ({ items }: CategoriesProps) => {
  console.log(items);

  return (
    <div className="flex items-center gap-x-2 overflow-x-2 pb-2">
      {items.map(item => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export default Categories;
