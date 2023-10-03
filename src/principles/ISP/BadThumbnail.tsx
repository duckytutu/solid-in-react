import { memo } from 'react';
const BadThumbnail = ({ product }: any) => (
  <img className="p-8 rounded-t-lg h-48" src={product.image} alt="product image" />
);

export default memo(BadThumbnail);
