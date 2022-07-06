import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Flex } from "atoms";
import { useRouter } from "next/router";
import axios from "axios";

const Slug = ({ data }) => {
  console.log(data);
  return (
    <Box key={data?.id} mb="5rem">
      <h1> This is a specific detail page</h1>
      <Flex>
        <Text> Name:</Text>
        <Text>{data?.title}</Text>
      </Flex>
      <Flex>
        <Text> About:</Text>
        <Text>{data?.description}</Text>
      </Flex>
    </Box>
  );
};
export async function getStaticPaths() {
  const res = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs`);
  const blogs = await res.json();
  return {
    paths: blogs.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs/${params.slug}`);
    const data = await res.json();
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (e) {}
  return {
    notFound: true,
  };
}
// export async function getStaticPaths() {
//   const res = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs`);
//   const data = await res.json();

//   return {
//     paths: data.map((products) => ({
//       params: { slug: products.slug},
//     })),
//     fallback: false,
//   };
// }
// export async function getStaticPaths() {
//   const res = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs?_limit=-1`);
//   const blogs = await res.json();
//   return {
//     paths: blogs.map((article) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   };
// }
// export async function getStaticProps(params) {
//   try {
//     // const { data: products } = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs/${params.slug}`)
//     const res = await fetch(`https://cms-ol3sm.ondigitalocean.app/blogs/${params.slug}`);
//     const products = await res.json();
//     if (!products) {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: { products },
//     };
//   } catch (e) {}
//   return {
//     notFound: true,
//   };
// }

export default Slug;
