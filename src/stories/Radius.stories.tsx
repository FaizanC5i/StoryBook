import { radius } from '../tokens/radius';

export default {
  title: 'Foundation/Radius',
};

export const RadiusScale = () => (
  <div style={{ padding: 32, display: 'grid', gap: 24, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
    <header>
      <p style={{ margin: 0, textTransform: 'uppercase', color: '#6b7280', fontSize: 12 }}>Foundation / Radius</p>
      <h1 style={{ margin: '8px 0 0 0', fontSize: 32 }}>Radius Scale</h1>
    </header>

    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      {Object.entries(radius).map(([key, value]: [string, string]) => (
        <div key={key} style={{ display: 'grid', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 120, height: 120, background: '#0f172a', borderRadius: value }} />
          <div style={{ fontSize: 14, fontWeight: 600 }}>{key}</div>
          <div style={{ color: '#475569', fontSize: 13 }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);
