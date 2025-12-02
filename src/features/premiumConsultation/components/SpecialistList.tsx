import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Specialist } from '../types/Specialist';

type Props = {
  specialists: Specialist[];
};

export const SpecialistList: React.FC<Props> = ({ specialists }) => {
  return (
    <View style={styles.container}>
      {specialists.map((s) => (
        <View key={s.id} style={styles.card}>
          <Image source={{ uri: s.avatarUrl }} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{s.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    marginHorizontal: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 12,
    marginRight: 20,
    backgroundColor: '#eeeeee',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000000',
  },
  title: {
    marginTop: 4,
    fontSize: 13,
    color: '#666666',
  },
});
