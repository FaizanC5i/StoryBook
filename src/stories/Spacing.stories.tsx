import { spacing } from '../tokens/spacing';

export default {
  title: 'Foundation/Spacing',
};

export const SpacingScale = () => (
  <div style={{ padding: 32, display: 'grid', gap: 24, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
    <header>
      <p style={{ margin: 0, textTransform: 'uppercase', color: '#6b7280', fontSize: 12 }}>Foundation / Spacing</p>
      <h1 style={{ margin: '8px 0 0 0', fontSize: 32 }}>Spacing Scale</h1>
    </header>

    <div style={{ display: 'grid', gap: 12 }}>
      {Object.entries(spacing).map(([key, value]: [string, string]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 280, height: value, background: '#0f172a', borderRadius: 6 }} />
          <div style={{ display: 'grid', gap: 4 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{key}</div>
            <div style={{ color: '#475569', fontSize: 13 }}>{value}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
