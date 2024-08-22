const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className={`${!product.stocked && "text-red-600"}`}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
