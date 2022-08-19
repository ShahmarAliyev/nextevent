import Link from "next/link";
export default function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href="/product/1">
        <a>
          <h2>Product 1</h2>
        </a>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
      <Link href="/">
        <a>go back to home page</a>
      </Link>
    </>
  );
}
