import Filter from './Filter.tsx';
import Product from './Product';
import useRateFilter from './hooks/useRateFilters';
import { useEffect, useMemo } from 'react';
import useProducts from './hooks/useProducts';

export function Good() {
  const { filterRate, handleRating } = useRateFilter();
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = useMemo(
    () => products.filter((product: any) => product.rating.rate > filterRate),
    [products, filterRate]
  );

  return (
    <div className="flex flex-col h-full">
      <Filter filterRate={filterRate as number} handleRating={handleRating} />
      <div className="h-full flex flex-wrap justify-center">
        {filteredProducts.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
