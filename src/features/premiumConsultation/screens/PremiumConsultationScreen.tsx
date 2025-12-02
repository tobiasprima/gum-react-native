import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InlineError } from '../../../core/components/InlineError';
import { useI18n } from '../../../core/i18n/I18nProvider';
import { Agreements } from '../components/Agreements';
import { ContactInfo } from '../components/ContactInfo';
import { ServiceHoursBottomContent } from '../components/ServiceHoursBottomContent';
import { SpecialistList } from '../components/SpecialistList';
import { useSpecialists } from '../hooks/useSpecialists';

const headerBackground = require('../../../../assets/background.png');

export const PremiumConsultationScreen: React.FC = () => {
  const { t, locale, setLocale } = useI18n();
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { data, isLoading, isError, refetch } = useSpecialists();

  const heroImageSource = Image.resolveAssetSource(headerBackground);
  const heroAspectRatio =
    heroImageSource?.width && heroImageSource?.height
      ? heroImageSource.width / heroImageSource.height
      : 1;

  const HERO_HEIGHT = Math.min(width / heroAspectRatio, height);
  const BOTTOM_SHEET_HEIGHT = height * 0.38;
  const CARD_BOTTOM_INSET = Math.max(
    96,
    Math.min(160, BOTTOM_SHEET_HEIGHT - 10)
  ); 

  const snapPoints = useMemo(
    () => [BOTTOM_SHEET_HEIGHT],
    [BOTTOM_SHEET_HEIGHT]
  );

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.root}>
        <View style={styles.topArea}>
          <View style={[styles.heroWrapper, { height: HERO_HEIGHT }]}>
            <ImageBackground
              source={headerBackground}
              style={styles.heroImage}
              imageStyle={styles.heroImageStyle}
            >
              <LinearGradient
                colors={['#979073CC', '#FDF1C000']}
                style={styles.heroOverlay}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              />

              <View
                style={[
                  styles.heroTopBar,
                  { paddingTop: insets.top + 4, paddingHorizontal: 24 }
                ]}
              >
                <View style={styles.backWrapper}>
                  <Text style={styles.backText}>{t('premium.backLabel')}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View
            style={[
              styles.mainCardWrapper,
              { marginTop: -HERO_HEIGHT * 0.40 },
            ]}
          >
            <View style={styles.mainCard}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                overScrollMode="never"
                contentInsetAdjustmentBehavior="never"
                contentInset={{
                  bottom: Platform.OS === 'ios' ? CARD_BOTTOM_INSET : 0,
                }}
                scrollIndicatorInsets={{ bottom: CARD_BOTTOM_INSET }}
                contentContainerStyle={[
                  styles.cardScrollContent,
                  { paddingBottom: CARD_BOTTOM_INSET - 100},
                ]}
              >
                <Text style={styles.smallTitle}>
                  {t('premium.titleLine1')}
                </Text>
                <Text style={styles.bigTitle}>
                  {t('premium.titleLine2')}
                </Text>
                <Text style={styles.description}>
                  {t('premium.description')}
                </Text>

                {isLoading && (
                  <View style={styles.center}>
                    <ActivityIndicator />
                  </View>
                )}

                {isError && (
                  <View style={styles.center}>
                    <InlineError
                      message={t('premium.errorSpecialists')}
                      actionLabel={t('premium.retry')}
                      onAction={refetch}
                    />
                  </View>
                )}

                {data && !isError && (
                  <View style={styles.specialistsWrapper}>
                    <SpecialistList specialists={data} />
                  </View>
                )}

                <View style={styles.contactWrapper}>
                  <ContactInfo />
                </View>

                <Agreements />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>

      <View pointerEvents="box-none" style={styles.bottomSheetContainer}>
        <BottomSheet
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableContentPanningGesture={false}
          enableHandlePanningGesture={false}
          handleComponent={null}
          backgroundStyle={styles.bottomSheetBackground}
        >
          <BottomSheetView style={styles.bottomContent}>
            <ServiceHoursBottomContent />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  root: {
    flex: 1,
  },
  topArea: {
    flex: 1,
  },

  heroWrapper: {
    width: '100%',
  },
  heroImage: {
    flex: 1,
    width: '100%',
  },
  heroImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  backWrapper: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  backText: {
    fontSize: 20,
    color: '#333333',
  },
  langButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  langText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },

  mainCardWrapper: {
    flex: 1,
  },
  mainCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardScrollContent: {
    paddingBottom: 16,
  },
  smallTitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  bigTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 12,
  },

  specialistsWrapper: {
    marginTop: 8,
  },
  contactWrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  center: {
    marginTop: 16,
    alignItems: 'center',
  },

  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    elevation: 10,
  },
  bottomSheetContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  bottomSheetBackground: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
});
