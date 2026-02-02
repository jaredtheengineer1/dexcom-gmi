import { tokens } from '../tokens'

const estimateText = {
  fontSize: tokens.primitive.fontSizes.size24,
}

const estimateValue = {
  fontSize: tokens.primitive.fontSizes.size48,
  marginVertical: tokens.primitive.space.space2
}

const metaText = {
  fontSize: tokens.primitive.fontSizes.size14,
  color: tokens.semantic.text.textPrimary
}

const disclaimer = {
  marginTop: tokens.primitive.space.space0,
  fontSize: tokens.primitive.fontSizes.size12,
  color: tokens.primitive.colors.gray700,
  lineHeight: tokens.primitive.lineHeight.height16
}

const modalTitle = {
  fontSize: tokens.primitive.fontSizes.size18,
  marginBottom: tokens.primitive.space['space1-5']
}
const modalText = {
  fontSize: tokens.primitive.fontSizes.size14,
  lineHeight: tokens.primitive.lineHeight.height18
}
const modalButtonText = {
  color: tokens.primitive.colors.blue500,
  fontSize: tokens.primitive.fontSizes.size14
}

const header = {
  fontSize: tokens.primitive.fontSizes.size24,
  marginBottom: tokens.primitive.space.space2
}

const paragraph = {
  fontSize: tokens.primitive.fontSizes.size14,
  lineHeight: tokens.primitive.lineHeight.height28,
  maringBottom: tokens.primitive.space['space1-5']
}
const subHeader = {
  fontSize: tokens.primitive.fontSizes.size18,
  marginTop: tokens.semantic.spacing.lg,
  marginBottom: tokens.semantic.spacing.md
}
const bullet = {
  fontSize: tokens.primitive.fontSizes.size14,
  marginRight: tokens.primitive.space.space0,
  lineHeight: tokens.primitive.lineHeight.height18
}

const bulletTitle = {
  fontSize: tokens.primitive.fontSizes.size14
}

const success = {
  fontSize: tokens.primitive.fontSizes.size10,
  color: tokens.semantic.status.success
}
export { disclaimer,success, bullet,bulletTitle,estimateText, estimateValue, header, metaText, modalButtonText, modalText, modalTitle, paragraph, subHeader }

