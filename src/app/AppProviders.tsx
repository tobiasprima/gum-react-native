import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../core/config/queryClient';
import { I18nProvider } from '../core/i18n/I18nProvider';
import { RootNavigator } from './navigation/RootNavigator';

export const AppProviders: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nProvider>
    </QueryClientProvider>
  );
};
