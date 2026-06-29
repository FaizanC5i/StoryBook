export const sdTypography = {
  typography: {
    fontFamily: {
      base: { value: "Degular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      heading: { value: "system-ui, 'Segoe UI', Roboto, sans-serif" },
      mono: { value: "ui-monospace, Consolas, monospace" }
    },
    text: {
      body: { fontSize: { value: '14px' }, lineHeight: { value: '1.5' }, fontWeight: { value: 400 } },
      caption: { fontSize: { value: '12px' }, lineHeight: { value: '1.4' }, fontWeight: { value: 400 } },
      label: { fontSize: { value: '14px' }, lineHeight: { value: '1.5' }, fontWeight: { value: 400 } },
      subtitle: { fontSize: { value: '14px' }, lineHeight: { value: '24px' }, fontWeight: { value: 400 } },
      heading1: { fontSize: { value: '56px' }, lineHeight: { value: '118%' }, fontWeight: { value: 500 } },
      heading2: { fontSize: { value: '24px' }, lineHeight: { value: '118%' }, fontWeight: { value: 500 } }
    }
  }
} as const;

export default sdTypography;
