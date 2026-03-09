import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountCard from '../components/AccountCard';
import { fetchAccounts } from '../redux/account/accountThunk';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { moderateScale } from 'react-native-size-matters';
const SavingsAccountScreen = () => {
  const dispatch = useDispatch();

  const { accounts, loading, error } = useSelector(state => state.accounts);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const nextAccount = () => {
    if (index < accounts.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevAccount = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fbfbf6'} />
      <Text style={styles.title}>Savings Accounts</Text>

      {accounts.length > 0 && <AccountCard account={accounts[index]} />}

      <View style={styles.navigation}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonContainer}
          onPress={prevAccount}
        >
          <MaterialDesignIcons name="chevron-left" size={24} color={'gray'} />
          <Text style={styles.link1}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonContainer}
          onPress={nextAccount}
        >
          <Text style={styles.link2}>Next</Text>
          <MaterialDesignIcons
            name="chevron-right"
            size={24}
            color={'#008c85'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SavingsAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbf6',
    padding: moderateScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link1: {
    color: 'gray',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  link2: {
    color: '#008c85',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: '#e4efee',
    backgroundColor: '#008c85',
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(10),
  },

  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
