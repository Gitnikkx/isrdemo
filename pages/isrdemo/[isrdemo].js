import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return;
    <div>loading.............</div>;
  }

  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price} {product.description}
      </h2>
    </div>
  );
}

export default Product;

export async function getStaticProps(context) {
  const params = context;
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
    revalidate:30,
  };

}
