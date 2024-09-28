// src/components/Category.tsx
import React from "react";

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const Category: React.FC<CategoryProps> = ({ icon, label, href }) => {
  return (
    <a className="flex flex-col items-center gap-2 shrink-0" href={href}>
      <div className="bg-muted rounded-full p-3">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default Category;
