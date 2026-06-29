import tokens from '../figmaTokens/primitives.json';

interface Token {
  $value?: {
    hex?: string;
  };
}

interface Palette {
  [key: string]: Token;
}

export default {
  title: 'Foundation/Colors',
};

const categoryOrder = ['Primary', 'Secondary', 'Tertiary'];

const SwatchGrid = ({ palette }: { palette: Palette }) => {
  const result = Object.entries(palette).reduce<{ seen: Set<string>; entries: [string, Token][] }>
    ((acc, [tokenName, token]) => {
      const hex = token?.$value?.hex || '';
      if (!acc.seen.has(hex)) {
        acc.seen.add(hex);
        acc.entries.push([tokenName, token]);
      }
      return acc;
    }, { seen: new Set<string>(), entries: [] });

  const uniqueEntries = result.entries;

  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
      {uniqueEntries.map(([tokenName, token]: [string, Token]) => (
        <div key={tokenName} style={{ display: 'grid', gap: 8, padding: 16, borderRadius: 16, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)', background: 'transparent' }}>
          <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: 12, background: token?.$value?.hex || '#ccc' }} />
          <div style={{ display: 'grid', gap: 4 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{tokenName}</div>
            <div style={{ color: '#475569', fontSize: 13 }}>{token?.$value?.hex}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CategorySection = ({ category }: { category: string }) => {
  const colors = tokens.Color as Record<string, Record<string, Palette>>;
  const group = colors[category];
  if (!group) return null;

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <h2 style={{ margin: 0, fontSize: 28, color: '#111827' }}>{category} Colors</h2>
      <div style={{ display: 'grid', gap: 32 }}>
        {Object.entries(group).map(([paletteName, palette]: [string, Palette]) => (
          <div key={paletteName} style={{ display: 'grid', gap: 16 }}>
            <h3 style={{ margin: 0, fontSize: 20, color: '#111827' }}>{paletteName}</h3>
            <SwatchGrid palette={palette} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const AllColors = () => {
  const colors = tokens.Color as Record<string, Record<string, Palette>>;

  return (
    <div style={{ padding: 32, display: 'grid', gap: 32, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f8fafc' }}>
      <header style={{ display: 'grid', gap: 8, maxWidth: 760 }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.24em', color: '#6b7280', fontSize: 12 }}>
          Foundation / Colors
        </p>
        <h1 style={{ margin: 0, fontSize: 44, color: '#111827' }}>
          All Colors
        </h1>
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.75 }}>
          Primary, Secondary, and Tertiary palettes are shown together to provide a complete reference.
        </p>
      </header>

      <div style={{ display: 'grid', gap: 48 }}>
        {categoryOrder.map((category: string) => {
          const group = colors[category];
          if (!group) return null;

          return (
            <section key={category} style={{ display: 'grid', gap: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <h2 style={{ margin: 0, fontSize: 28, color: '#111827' }}>{category}</h2>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{Object.keys(group).length} palettes</span>
              </div>

              <div style={{ display: 'grid', gap: 32 }}>
                {Object.entries(group).map(([paletteName, palette]: [string, Palette]) => (
                  <div key={paletteName} style={{ display: 'grid', gap: 16 }}>
                    <h3 style={{ margin: 0, fontSize: 20, color: '#111827' }}>{paletteName}</h3>
                    <SwatchGrid palette={palette} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export const PrimaryColors = () => <CategorySection category="Primary" />;
export const SecondaryColors = () => <CategorySection category="Secondary" />;
export const TertiaryColors = () => <CategorySection category="Tertiary" />;
