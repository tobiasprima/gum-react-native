import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../../../core/i18n/I18nProvider';

export const Agreements: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <View style={styles.alertBox}>
        <View style={styles.alertContent}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconStem} />
            <View style={styles.iconDot} />
          </View>
          <Text style={styles.text}>{t('premium.agreement')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  alertBox: {
    backgroundColor: '#FFFAE5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F5E6A7',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  iconWrapper: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFDF6F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStem: {
    width: 2,
    height: 9,
    borderRadius: 1,
    backgroundColor: '#FFFAE5',
  },
  iconDot: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFFAE5',
    marginTop: 2,
  },
  text: {
    fontSize: 12,
    color: '#444444',
    flex: 1,
  },
});
