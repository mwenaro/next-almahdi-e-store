export const revalidate = 0;
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { SubCategoryClient } from "@/components/tables/sub-category-tables/client";
import axios from "axios";
import { headers } from "next/headers";
const getSubCategories = async () => {
  const url = headers().get("x-url");
  const formatedUrl = `${url}/api/sub-category`;
  console.log({ url, formatedUrl });
  // const res = axios.get('')
  // const url = process.env.__NEXT_PRIVATE_ORIGIN;

  const res = await axios.get(`${url}/api/sub-category`);
  // const res = await axios.get(`${process.env.NEXTAUTH_URL!}/api/sub-category`)
  // console.log(res.data.data)
  // if(!res?.data?.length) return []
  return (await res.data.data) || [];
};

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "SubCategories", link: "/dashboard/sub-categories" },
];
export default async function page() {
  const myData = await getSubCategories();

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <SubCategoryClient data={myData} />
      </div>
    </PageContainer>
  );
}
