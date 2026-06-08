import type { WebProduct } from '@/lib/products-web';
import { formatAud } from '@/lib/pricing-web';
import ProductButton from './ProductButton';

// Premium one-time companion build CTA. Gold accent to distinguish from
// the standard preset unlock cards.
export default function CompanionBuildCard({ product }: { product: WebProduct }) {
  return (
    <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-400/5 border-2 border-amber-400/40 rounded-2xl p-5">
      <div className="flex items-start gap-4">
        <div className="text-4xl">✨</div>
        <div className="flex-1">
          <div className="text-lg font-bold text-amber-200">Build a Companion</div>
          <div className="text-white/70 text-sm mt-1">
            {product.description}
          </div>
          <div className="text-white/40 text-xs mt-2">
            One-time purchase. Custom name, personality, voice, look. Yours forever.
          </div>
        </div>
        <ProductButton productId={product.id} priceLabel={formatAud(product.priceAud)} />
      </div>
    </div>
  );
}
