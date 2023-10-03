import { memo } from 'react';
const GoodThumbnail = ({ imageUrl }: { imageUrl: string }) => (
  <img className="p-8 rounded-t-lg h-48" src={imageUrl} alt="product image" />
);

export default memo(GoodThumbnail);
