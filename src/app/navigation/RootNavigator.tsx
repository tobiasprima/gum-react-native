import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PremiumConsultationScreen } from '../../features/premiumConsultation/screens/PremiumConsultationScreen';

export type RootStackParamList = {
  PremiumConsultation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PremiumConsultation"
        component={PremiumConsultationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
