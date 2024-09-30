export const revalidate = 0;

import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { SubCategoryClient } from "@/components/tables/sub-category-tables/client";
import axios from "axios";
const getSubCategories = async () => {
  // const res = axios.get('')
  const url = process.env.__NEXT_PRIVATE_ORIGIN;
  return (await axios.get(`${url}/api/sub-category`)).data?.data;
};

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Categories", link: "/dashboard/categories" },
];
export default async function page() {
  const myData = await getSubCategories();
  const url = process.env.__NEXT_PRIVATE_ORIGIN;

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <h2>Origin : {url}</h2>
        <SubCategoryClient data={!myData || myData.length ? myData : []} />
      </div>
    </PageContainer>
  );
}
