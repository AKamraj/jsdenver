/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Magic} from '@magic-sdk/react-native-bare';
import {getBalance, createWallet} from 'react-native-web3-wallet';

const magicClient = new Magic('pk_live_8EBF58706F6D8538'); // ✨

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      if (await magicClient.user.isLoggedIn()) {
        const {publicAddress, issuer, phoneNumber} =
          await magicClient.user.getMetadata();
        console.log(publicAddress, issuer, phoneNumber);
        if (publicAddress && issuer) {
          const balanceInWei = await getBalance(
            'https://polygon-mumbai.g.alchemy.com/v2/-CuvhStLwPmHVIZ4SlJrmJ2ZLploxpJd',
            publicAddress,
          );
          console.log('balanceInWei', balanceInWei);
          const time = Date.now();
          const wallet = await createWallet('1');
          console.log(
            `${Math.floor((Date.now() - time) / 1000)} seconds`,
            wallet,
          );
        }
      }
    })();
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        Test===
      </Text>
      {/* Remember to render the `Relayer` component into your app! */}
      <magicClient.Relayer />

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
        onPress={async () => {
          const DID = await magicClient.auth.loginWithSMS({
            phoneNumber: '+14258909609',
          });
          console.log(DID);
        }}>
        Test asdlkfjkasdljf
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
