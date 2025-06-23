// import PageHeader from "../components/PageHeader";
import React from 'react'

type Args = {
  params: Promise<{
    category?: string
  }>
}

function CategoryClient({ category }: { category?: string }) {
  // You can use hooks here if needed
  // const pathname = usePathname()
  return (
    <div>
      <p>category route is {category}</p>
      <p>todo: extract the name of the team member from the slug. then display relevant info</p>
      {/* <PageHeader heading={name} text={description} />
          <PostList data={data} /> */}
    </div>
  )
}

export default async function CategoryRoute({ params: paramsPromise }: Args) {
  const { category } = await paramsPromise
  // const { data } = await fetchPostsByCategory(category);

  // if (data.length === 0) return <div>No properties in this category</div>;

  // const { name, description } = data[0]?.attributes.category.data.attributes;

  return <CategoryClient category={category} />
}
