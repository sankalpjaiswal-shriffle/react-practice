export default function ProductCard({ productDetails }) {
  if (!productDetails.length)
    return (
      <p className="flex text-base items-center justify-center">
        No Product Found!
      </p>
    );

  let value = 100;

  value = 200;
  return (
    <ul className="grid grid-cols-2 min-w-auto h-[200px]">
      {productDetails.map((product) => (
        <li
          key={product.id}
          className="p-4 m-4 border-solid rounded-xl shadow-lg hover:translate-y-0.5"
        >
          <img
            className="flex w-[50%] h-[50%] object-cover p-2 items-center"
            src={product.imageUrl}
            title={product.name}
          />
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="text-sm text-wrap">{product.description}</p>
          <p className="p-2">
            Price:
            <span className="m-2">
              {product.currency}
              {product.price}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
