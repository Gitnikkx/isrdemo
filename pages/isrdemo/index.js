import React from "react";
import { Box, Text,Flex } from "atoms";

export const isrdemo = ({ products }) => {
  return (
    <>
      <Box>
        {products?.map((items) => {
          return (
            <Box key={items?.id} mb="5rem">
              <Flex>
                <Text> Name:</Text>
                <Text>{items?.title}</Text>
              </Flex>
              <Flex>
                <Text> Price:</Text>
                <Text>{items?.price}</Text>
              </Flex>
              <Flex>
                <Text> About:</Text>
                <Text>{items?.description}</Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default isrdemo

export async function getStaticProps() {
  console.log('generating / regenerating products list');
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
