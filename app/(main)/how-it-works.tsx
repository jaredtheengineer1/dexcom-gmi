import * as textStyles from '@styles/components/text';
import * as viewStyles from '@styles/components/view';
import * as utils from '@styles/utils';
import { ScrollView, Text, View } from 'react-native';

const ExplainScreen = () => {
  const points = [
    {
      title: 'Coverage',
      text: 'The percentage of expected CGM readings included in the calculation. Missing data may reduce accuracy.',
    },
    {
      title: 'Time Period',
      text: 'Shorter time windows (e.g., 14 days) give less stable estimates than longer periods (e.g., 90 days).',
    },
    {
      title: 'Biological Variation',
      text: 'Individual differences in how glucose impacts hemoglobin mean that lab-measured A1C may differ.',
    },
    {
      title: 'Formula',
      text: 'GMI = 3.31 + 0.02392 × Average Glucose (mg/dL). This is based on the ADAG/Dexcom study. It is intended for educational purposes only.',
    },
  ];

  return (
    <ScrollView style={viewStyles.viewContainer}>
      <Text style={[textStyles.header, {fontWeight: '600'}]}>How This Estimate Works</Text>

      <Text style={textStyles.paragraph}>
        Your Estimated A1C (GMI) is calculated from your continuous glucose monitor (CGM) readings. It provides an educational estimate of your average blood glucose over time.
      </Text>

      <Text style={[textStyles.subHeader, {fontWeight:'600'}]}>Important Factors:</Text>

      {points.map((point, index) => (
        <View key={index} style={[viewStyles.bulletPoint, { flexDirection: 'row' }]}>
          <Text style={textStyles.bullet}>•</Text>
          <View style={utils.flex}>
            <Text style={[textStyles.bulletTitle, {fontWeight: '600'}]}>{point.title}:</Text>
            <Text style={textStyles.paragraph}>{point.text}</Text>
          </View>
        </View>
      ))}

      <Text style={textStyles.paragraph}>
        Always consult your healthcare provider for diagnosis, treatment, and lab testing.
      </Text>
    </ScrollView>
  );
};

export default ExplainScreen;
