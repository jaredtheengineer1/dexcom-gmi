/* === BRAND COLORS === */
/* Blue: primary actions, links, navigation */
/* Orange: CTAs only */
/* Teal: tertiary accents, badges, highlights */

/*
  Token Structure:
  1. Primitive Tokens = Raw values for colors, sizes, etc
  2. Semantic Tokens = Purpose-based (what they mean)
  3. Component Tokens = Component-specific usage
*/

export const primitiveTokens = {
  /* --- Colors --- */
  colors: {
    teal100: "#e6faf8",
    teal200: "#bfefea",
    teal300: "#56f2e2",
    teal400: "#23ded0",
    teal500: "#0bc1b7",
    teal600: "#059691",
    teal700: "#097c79",
    blue50: "#eaf4f8",
    blue100: "#d5e9f2",
    blue200: "#add3e5",
    blue300: "#7fb9d3",
    blue400: "#4f9fc0",
    blue500: "#2e86ab",
    blue600: "#246c89",
    blue700: "#1c5369",
    blue800: "#153c4d",
    blue900: "#0e2632",
    orange50: "#fff4e6",
    orange100: "#ffe4bf",
    orange200: "#ffd08a",
    orange300: "#ffb84d",
    orange400: "#ffa31f",
    orange500: "#f18f01",
    orange600: "#c87701",
    orange700: "#9f5e01",
    orange800: "#754501",
    orange900: "#4b2c00",
    gray0: "#fff",
    gray50: "#fafafa",
    gray100: "#eee",
    gray200: "#ddd",
    gray300: "#ccc",
    gray500: "#9e9e9e",
    gray700: "#666",
    gray900: "#333",
    gray950: "#212121",
    gray1000: "#000",
    green500: "#10cc21",
  },
  /* --- Size Scale (8px base) --- */
  space: {
    space0: 0,
    "space0-5": 4,
    "space0-75": 6,
    space1: 8,
    "space1-5": 12,
    space2: 16,
    "space2-5": 20,
    space3: 24,
    space4: 32,
    space5: 40,
    space6: 48,
    space7: 56,
    space8: 64,
  },
  fontWeight: {
    "weight-light": 300,
    "weight-regular": 400,
    "weight-medium": 500,
    "weight-semibold": 600,
    "weight-bold": 700,
  },
  fontSizes: {
    size10: 10,
    size12: 12,
    size13: 13,
    size14: 14,
    size15: 15,
    size16: 16,
    size18: 18,
    size20: 20,
    size24: 24,
    size34: 34,
    size40: 40,
    size48: 48,
    size60: 60,
    size96: 96,
  },
  lineHeight: {
    height16: 16,
    height18: 18,
    height21: 21,
    height24: 24,
    height28: 28,
    heightBase: 1.5,
  },
  letterSpacing: {
    spacingTight: -1.5,
    spacingNormal: 0,
    spacingWide: 0.15,
    spacingWider: 0.4,
    spacingWidest: 1.25,
  },
  borderRadius: {
    radiusSm: 6,
    radiusMd:12,
    radiusLg: 18,
  },
};

export const semanticTokens = {
  brand: {
    colorPrimary: primitiveTokens.colors.blue500,
    colorPrimaryHover: primitiveTokens.colors.blue600,
    colorSecondary: primitiveTokens.colors.orange500,
    colorSecondaryHover: primitiveTokens.colors.orange600,
    colorTertiary: primitiveTokens.colors.teal600,
  },
  status: {
    success: primitiveTokens.colors.green500,
  },
  text: {
    textPrimary: primitiveTokens.colors.gray950,
    textSecondary: primitiveTokens.colors.gray700,
    textMuted: primitiveTokens.colors.gray500,
    textInverse: primitiveTokens.colors.gray50,
    textDisabled: primitiveTokens.colors.gray500,
  },
  links: {
    textLink: primitiveTokens.colors.blue500,
    textLinkHover: primitiveTokens.colors.blue600,
    textLinkVisited: primitiveTokens.colors.blue500,
  },
  backgrounds: {
    bgPrimary: primitiveTokens.colors.gray50,
    bgSecondary: primitiveTokens.colors.gray100,
    bgSurface: primitiveTokens.colors.gray0,
  },
  spacing: {
    xs: primitiveTokens.space["space0-5"] /* 4px */,
    sm: primitiveTokens.space.space1 /* 8px */,
    md: primitiveTokens.space.space2 /* 16px */,
    lg: primitiveTokens.space.space3 /* 24px */,
    xl: primitiveTokens.space.space4 /* 32px */,
    "2xl": primitiveTokens.space.space5,
  },
  utility: {
    colorBorder: primitiveTokens.colors.gray200,
    colorBorderSubtle: primitiveTokens.colors.gray100,
    onPrimaryText: primitiveTokens.colors.gray50,
    onSecondaryText: primitiveTokens.colors.gray950,
    onTertiaryText: primitiveTokens.colors.gray50,
  },
};

export const tokens = { primitive: primitiveTokens, semantic: semanticTokens };
