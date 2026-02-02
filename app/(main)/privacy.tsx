import * as textStyles from '@styles/components/text';
import * as viewStyles from '@styles/components/view';
import { ScrollView, Text } from 'react-native';

const LegalScreen = () => {
  return (
    <ScrollView style={viewStyles.viewContainer}>
      <Text style={[textStyles.header, { fontWeight: '600' }]}>
        Privacy & Data Use
      </Text>

      <Text style={textStyles.paragraph}>
        Your privacy is important. This app is designed to access only the data
        required to calculate an educational estimate of your glucose trends.
      </Text>

      <Text style={[textStyles.subHeader, { fontWeight: '600' }]}>
        What Data Is Accessed
      </Text>

      <Text style={textStyles.paragraph}>
        With your permission, the app accesses continuous glucose monitor (CGM)
        readings from Dexcom. No other personal information is accessed.
      </Text>

      <Text style={[textStyles.subHeader, { fontWeight: '600' }]}>
        How Data Is Used
      </Text>

      <Text style={textStyles.paragraph}>
        CGM readings are used to calculate:
        {'\n'}• Average glucose
        {'\n'}• Data coverage
        {'\n'}• Estimated A1C (GMI)
      </Text>

      <Text style={textStyles.paragraph}>
        These calculations are performed for educational purposes only and are
        not used for diagnosis or treatment.
      </Text>

      <Text style={[textStyles.subHeader, { fontWeight: '600' }]}>
        Storage & Security
      </Text>

      <Text style={textStyles.paragraph}>
        A secure session identifier is stored locally on your device. Access
        tokens are stored securely on the server and rotated regularly.
      </Text>

      <Text style={textStyles.paragraph}>
        No raw glucose data is permanently stored by this app.
      </Text>

      <Text style={[textStyles.subHeader, { fontWeight: '600' }]}>
        Revoking Access
      </Text>

      <Text style={textStyles.paragraph}>
        You may revoke access at any time by disconnecting this app from your
        Dexcom account through Dexcom’s account settings.
      </Text>

      <Text style={textStyles.paragraph}>
        Removing the app from your device will also clear any locally stored
        session information.
      </Text>

      <Text style={textStyles.paragraph}>
        This app does not sell, share, or monetize your data.
      </Text>
    </ScrollView>
  );
};

export default LegalScreen;
