import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useI18n } from '../../../core/i18n/I18nProvider';
import { openEmail, openTel } from '../../../utils/linking';

const HOTLINE = '+852 2893 4402';
const EMAIL = 'memberservice@gumhk.com';

export const ContactInfo: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <Text style={styles.intro}>{t('premium.contactInfoIntro')}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>{t('premium.hotlineLabel')} </Text>
        <TouchableOpacity onPress={() => openTel(HOTLINE)}>
          <Text style={styles.link}>{HOTLINE}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{t('premium.emailLabel')} </Text>
        <TouchableOpacity onPress={() => openEmail(EMAIL)}>
          <Text style={styles.link}>{EMAIL}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  intro: { fontSize: 13, color: '#555555', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  label: { fontSize: 13, color: '#000000' },
  link: {
    fontSize: 13,
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
});
