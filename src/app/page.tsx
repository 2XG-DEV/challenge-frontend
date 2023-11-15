import ComponentCard from '@/features/products/components/ComponentCard';
import { getProducts } from '@/features/products/services/product.service';

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product) => (
        <ComponentCard product={product} key={product.id} />
      ))}
    </main>
  );
}
