import { semanticTokens } from "./tokens";

export const theme = {
  colors: {
    ...semanticTokens.brand,
    ...semanticTokens.text,
    ...semanticTokens.backgrounds,
    ...semanticTokens.status,
  },
};
