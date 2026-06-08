import type { WebProduct } from '@/lib/products-web';
import { formatAud } from '@/lib/pricing-web';
import ProductButton from './ProductButton';

// Companion unlock card. Owned companions render as disabled "Owned" pills
// so the user can see their whole roster without losing the catalogue.
export default function CompanionUnlockCard({
  product,
  owned,
}: {
  product: WebProduct;
  owned: boolean;
}) {
  return (
    <div
      className={`bg-white/5 border rounded-2xl p-4 flex flex-col gap-3 ${owned ? 'border-success/30 bg-success/5' : 'border-white/10'}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl">{product.name.split(' ')[0]}</div>
        <div className="flex-1">
          <div className="font-bold">{product.name.split(' ').slice(1).join(' ')}</div>
          <div className="text-white/60 text-xs leading-snug">{product.description}</div>
        </div>
      </div>
      <ProductButton
        productId={product.id}
        priceLabel={formatAud(product.priceAud)}
        owned={owned}
        className="w-full"
      />
    </div>
  );
}
