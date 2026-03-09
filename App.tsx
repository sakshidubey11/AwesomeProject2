// import 'react-native-gesture-handler';
// import React, { useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Provider } from 'react-redux';

// import { store } from './app/redux/store';

// import { getSignupStep } from './app/utils/signupStep';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from './app/components/Toast';
// import RootNavigator from './app/navigation/RootNav';
// import ProfileScreen from './app/screens/bottomTabScreens/ProfileScreen';
// import UserProfile from './app/screens/bottomTabScreens/UserProfile';
// import SignatureScreen from './app/screens/topTabScreens/NewFile';

// export default function App() {
// useEffect(() => {
//   const checkSignupStep = async () => {
//     const step = await getSignupStep();
//     console.log(' APP START → USER STEP:', step);
//   };

//   checkSignupStep();
// }, []);
// useEffect(() => {
//   const resetPartialSignup = async () => {
//     const signupComplete = await AsyncStorage.getItem('SIGNUP_COMPLETE');

//     if (signupComplete !== 'true') {
//       // ❌ Partial signup → wipe everything
//       await AsyncStorage.removeItem('TOKEN');
//     }
//   };

//   resetPartialSignup();
// }, []);

//   return (
//     <SafeAreaProvider>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <Provider store={store}>
//           <RootNavigator />

//           <Toast bottom={20} width="90%" />
//           {/* <UserProfile /> */}
//         </Provider>
//       </GestureHandlerRootView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { store } from './src/redux/account/store';
import SavingsAccountScreen from './src/screens/SavingsAccountScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <SavingsAccountScreen />
      </SafeAreaView>
    </Provider>
  );
}
