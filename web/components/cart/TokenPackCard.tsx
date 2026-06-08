import type { WebProduct } from '@/lib/products-web';
import { formatAud } from '@/lib/pricing-web';
import ProductButton from './ProductButton';

// Token-pack card for the cart. Mirrors the mobile cart's "square" style
// visually (big token count, divider, price) but laid out as a row to fit
// the web cart's column-stack design.
export default function TokenPackCard({ product }: { product: WebProduct }) {
  const recommended = product.badge === 'BEST VALUE';
  return (
    <div
      className={`relative bg-white/5 border ${recommended ? 'border-secondary' : 'border-white/10'} rounded-2xl p-5 flex items-center justify-between`}
    >
      {product.badge && (
        <div className="absolute -top-2 left-5 px-2 py-0.5 bg-secondary text-primary text-[10px] font-bold rounded uppercase tracking-wider">
          {product.badge}
        </div>
      )}
      <div className="flex items-center gap-5">
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">{product.tokens?.toLocaleString()}</div>
          <div className="text-white/50 text-[10px] uppercase tracking-wider">tokens</div>
        </div>
        <div className="border-l border-white/10 pl-5">
          <div className="text-lg font-bold">{product.name}</div>
          <div className="text-white/60 text-sm">{product.description}</div>
        </div>
      </div>
      <ProductButton productId={product.id} priceLabel={formatAud(product.priceAud)} />
    </div>
  );
}
