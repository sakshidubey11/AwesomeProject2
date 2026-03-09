import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import { moderateScale } from 'react-native-size-matters';

const AccountCard = ({ account }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Account</Text>
        <Text style={styles.value}>{account?.product}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Interest Rate</Text>
        <Text style={styles.value}>{account?.interest}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Minimum Deposit</Text>
        <Text style={styles.value}>
          £{account?.minimum || account?.['minimum ']}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Interest Type</Text>
        <Text style={styles.value}>{account?.type}</Text>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2,
    borderRadius: moderateScale(10),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  label: {
    fontSize: 18,
    color: '#0c332f',
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    color: '#0c332f',
    marginBottom: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
});
