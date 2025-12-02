import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../../../core/i18n/I18nProvider';

export const SpecialistBanner: React.FC = () => {
  const { t } = useI18n();

  return (
    <ImageBackground
      style={styles.banner}
      imageStyle={styles.bannerImage}
      source={{ uri: 'https://placekitten.com/400/160' }}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>{t('specialists.bannerTitle')}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  bannerImage: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    padding: 12,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
