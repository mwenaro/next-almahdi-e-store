import { Breadcrumbs } from "@/components/breadcrumbs";
import { CategoryForm } from "@/components/forms/category-form";
import PageContainer from "@/components/layout/page-container";
// import { ScrollArea } from '@/components/ui/scroll-area';
import React from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Categories", link: "/dashboard/categories" },
  { title: "Create", link: "/dashboard/categories/create" },
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CategoryForm
          categories={[
            { _id: false, name: "InActive" },
            { _id: true, name: "Active" },
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </PageContainer>
  );
}
