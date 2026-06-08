import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-09-30.acacia',
});

// Token pack catalogue (mirrors mobile data/products.ts — kept in sync
// manually for v1). The price is what the user pays; tokens is what we
// credit on successful purchase via grant_tokens.
export const TOKEN_PACKS = [
  { id: 'tokens_10',  priceAud: 10,  tokens: 1000,  label: '$10 of Tokens',  desc: '1,000 tokens · about a week of moderate use' },
  { id: 'tokens_50',  priceAud: 50,  tokens: 5500,  label: '$50 of Tokens',  desc: '5,500 tokens · 10% bonus · best value' },
  { id: 'tokens_100', priceAud: 100, tokens: 12000, label: '$100 of Tokens', desc: '12,000 tokens · 20% bonus · power users' },
] as const;

export type TokenPackId = (typeof TOKEN_PACKS)[number]['id'];

export function findTokenPack(id: string): (typeof TOKEN_PACKS)[number] | null {
  return TOKEN_PACKS.find((p) => p.id === id) ?? null;
}
