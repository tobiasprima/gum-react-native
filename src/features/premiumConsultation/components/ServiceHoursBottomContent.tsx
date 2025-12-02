import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useI18n } from '../../../core/i18n/I18nProvider';
import { openWeb, openWhatsApp } from '../../../utils/linking';

const BOOKING_URL = 'https://gainmiles.simplybook.asia/v2/';
const WHATSAPP_PHONE = '85260300900';
const WHATSAPP_MESSAGE =
  '你好，我想了解更多有關強積金嘅資訊\nHello, I would like to learn more about MPF information.';

export const ServiceHoursBottomContent: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.label}>{t('premium.serviceHoursLabel')}</Text>
        <Text style={styles.text}>{t('premium.serviceHoursWeekdays')}</Text>
        <Text style={styles.text}>{t('premium.serviceHoursWeekend')}</Text>
      </View>

      <View style={styles.buttonsColumn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openWeb(BOOKING_URL)}
        >
          <Text style={styles.buttonText}>
            {t('premium.bookAppointment')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => openWhatsApp(WHATSAPP_PHONE, WHATSAPP_MESSAGE)}
        >
          <Text style={styles.buttonText}>{t('premium.whatsapp')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  textBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    marginTop: 4,
  },
  buttonsColumn: {
    marginTop: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 16,
    paddingVertical: 16,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
