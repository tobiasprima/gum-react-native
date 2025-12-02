import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type InlineErrorProps = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export const InlineError: React.FC<InlineErrorProps> = ({
  message,
  actionLabel,
  onAction,
}) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
    {actionLabel && onAction && (
      <TouchableOpacity style={styles.button} onPress={onAction}>
        <Text style={styles.buttonText}>{actionLabel}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ffeeee',
    alignItems: 'center',
    marginTop: 16,
  },
  message: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonText: {
    color: '#000000',
    fontWeight: '600',
  },
});
