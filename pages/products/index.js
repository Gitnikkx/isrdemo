import React from "react";
import Link from "next/link";
import { Box, Text, Flex } from "atoms";

export const ABC = ({ products }) => {
  console.log(products);
  return (
    <>
      <Box>
        {products.map((items) => {
          return (
            <Link href={"/products/" + products.id} key={items?.id}>
              <Box mb="5rem">
                <Flex>
                  <Text> Name:</Text>
                  <Text>{items?.title}</Text>
                </Flex>
              </Box>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default ABC;

export async function getStaticProps() {
  const res = await fetch("https://cms-ol3sm.ondigitalocean.app/blogs?_limit=-1");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
