import { primitiveTokens, semanticTokens, tokens } from '../tokens';

const viewContainer = {
  padding: tokens.semantic.spacing.lg
};

const modalBackdrop = {
    flex: 1,
    backgroundColor: semanticTokens.backgrounds.bgSecondary,
    // justifyContent: 'center',
    // alignItems: 'center',
};

const modalContent = {
  backgroundColor: primitiveTokens.colors.gray0,
  padding: primitiveTokens.space['space2-5'],
  borderRadius: primitiveTokens.borderRadius.radiusMd,
  // width: '80%',
}

const bulletPoint = {
  marginBottom: primitiveTokens.space['space1-5']
}

export { bulletPoint, modalBackdrop, modalContent, viewContainer };

