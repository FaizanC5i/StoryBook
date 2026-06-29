import { typography } from '../tokens/typography';
import sdTypography from '../../tokens/typography';

export default {
  title: 'Foundation/Typography',
};

const sampleText = 'The quick brown fox jumps over the lazy dog';

const styleEntries = [
  { name: 'Display 4XL', fontSize: typography.fontSize['4xl'], lineHeight: '1.5', fontWeight: 400, category: 'Display' },
  { name: 'Display 3XL', fontSize: typography.fontSize['3xl'], lineHeight: '1.5', fontWeight: 400, category: 'Display' },
  { name: 'Display 2XL', fontSize: typography.fontSize['2xl'], lineHeight: '1.5', fontWeight: 400, category: 'Display' },
  { name: 'Display XL', fontSize: typography.fontSize.xl, lineHeight: '1.5', fontWeight: 400, category: 'Display' },
  { name: 'Display LG', fontSize: typography.fontSize.lg, lineHeight: '1.5', fontWeight: 400, category: 'Display' },
  {
    name: 'Heading 1',
    fontSize: sdTypography.typography.text.heading1.fontSize.value,
    lineHeight: sdTypography.typography.text.heading1.lineHeight.value,
    fontWeight: sdTypography.typography.text.heading1.fontWeight.value,
    category: 'Headings',
  },
  {
    name: 'Heading 2',
    fontSize: sdTypography.typography.text.heading2.fontSize.value,
    lineHeight: sdTypography.typography.text.heading2.lineHeight.value,
    fontWeight: sdTypography.typography.text.heading2.fontWeight.value,
    category: 'Headings',
  },
  {
    name: 'Body',
    fontSize: sdTypography.typography.text.body.fontSize.value,
    lineHeight: sdTypography.typography.text.body.lineHeight.value,
    fontWeight: sdTypography.typography.text.body.fontWeight.value,
    category: 'Body',
  },
  {
    name: 'Label',
    fontSize: sdTypography.typography.text.label.fontSize.value,
    lineHeight: sdTypography.typography.text.label.lineHeight.value,
    fontWeight: sdTypography.typography.text.label.fontWeight.value,
    category: 'Body',
  },
  {
    name: 'Subtitle',
    fontSize: sdTypography.typography.text.subtitle.fontSize.value,
    lineHeight: sdTypography.typography.text.subtitle.lineHeight.value,
    fontWeight: sdTypography.typography.text.subtitle.fontWeight.value,
    category: 'Body',
  },
  {
    name: 'Caption',
    fontSize: sdTypography.typography.text.caption.fontSize.value,
    lineHeight: sdTypography.typography.text.caption.lineHeight.value,
    fontWeight: sdTypography.typography.text.caption.fontWeight.value,
    category: 'Captions',
  },
];

const uniqueStyles = (() => {
  const seen = new Set();
  return styleEntries.filter((style) => {
    const signature = `${style.fontSize}|${style.lineHeight}|${style.fontWeight}`;
    if (seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
})();

const categoryOrder: Record<string, number> = {
  Display: 0,
  Headings: 1,
  Body: 2,
  Captions: 3,
};

const sortedStyles = [...uniqueStyles].sort((a, b) => {
  const categoryDiff = (categoryOrder[a.category] ?? 0) - (categoryOrder[b.category] ?? 0);
  if (categoryDiff !== 0) return categoryDiff;
  return parseFloat(b.fontSize) - parseFloat(a.fontSize);
});

export const DegularDisplay = () => (
  <div style={{ padding: 32, display: 'grid', gap: 32, fontFamily: "Degular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f8fafc' }}>
    <section style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'grid', gap: 8 }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.24em', color: '#475569', fontSize: '12px' }}>
          Typography
        </p>
        <h1 style={{ margin: 0, fontSize: '44px', color: '#0f172a' }}>
          Degular Display
        </h1>
      </div>
      <p style={{ margin: 0, maxWidth: 760, color: '#475569', lineHeight: 1.75 }}>
        A single typography documentation page with all unique Degular styles grouped by display, headings, body, and captions. The quick brown fox sample preview is used for every style.
      </p>
    </section>

    <div style={{ display: 'grid', gap: 24 }}>
      {['Display', 'Headings', 'Body', 'Captions'].map((section) => {
        const items = sortedStyles.filter((style) => style.category === section);
        if (!items.length) return null;

        return (
          <section key={section} style={{ display: 'grid', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: '#111827' }}>{section}</h2>
              <span style={{ color: '#6b7280', fontSize: '14px' }}>{items.length} style{items.length > 1 ? 's' : ''}</span>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {items.map((style) => (
                <article key={style.name} style={{ display: 'grid', gap: 16, padding: 24, background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 18, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{style.name}</div>
                      <div style={{ color: '#6b7280', fontSize: '14px', marginTop: 6 }}>
                        {style.fontSize} · {style.fontWeight} · {style.lineHeight}
                      </div>
                    </div>
                    <div style={{ color: '#475569', fontSize: '13px', display: 'inline-flex', gap: 8, flexWrap: 'wrap' }}>
                      <span>{style.category}</span>
                    </div>
                  </div>

                  <div style={{ fontSize: style.fontSize, lineHeight: style.lineHeight, fontWeight: style.fontWeight, color: '#111827' }}>
                    {sampleText}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </div>
);
