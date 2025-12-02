import { Linking } from 'react-native';

export const openWeb = (url: string) => Linking.openURL(url);

export const openWhatsApp = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encoded}`;
  return Linking.openURL(url);
};

export const openTel = (phone: string) => Linking.openURL(`tel:${phone}`);

export const openEmail = (email: string) =>
  Linking.openURL(`mailto:${email}`);
