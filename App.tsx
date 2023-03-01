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
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {Magic} from '@magic-sdk/react-native-bare';
import {getBalance} from 'react-native-web3-wallet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CryptoCards, Button} from '@web3uikit/core';

const m = new Magic('pk_live_8EBF58706F6D8538', {network: 'goerli'}); // ✨

export const signTypedDataV3Payload = {
  types: {
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'verifyingContract',
        type: 'address',
      },
    ],
    Greeting: [
      {
        name: 'contents',
        type: 'string',
      },
    ],
  },
  primaryType: 'Greeting',
  domain: {
    name: 'Magic',
    version: '1',
    verifyingContract: '0xE0cef4417a772512E6C95cEf366403839b0D6D6D',
  },
  message: {
    contents: 'Hello, from Magic!',
  },
};

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      if (await m.user.isLoggedIn()) {
        const {publicAddress, issuer, phoneNumber} = await m.user.getMetadata();
        console.log(publicAddress, issuer, phoneNumber);
        if (publicAddress && issuer) {
          const balanceInWei = await getBalance(
            'https://polygon-mumbai.g.alchemy.com/v2/-CuvhStLwPmHVIZ4SlJrmJ2ZLploxpJd',
            publicAddress,
          );
          console.log('balanceInWei', balanceInWei);
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
    <SafeAreaProvider>
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
        <m.Relayer />

        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}
          onPress={async () => {
            const {publicAddress, issuer, phoneNumber} =
              await m.user.getMetadata();
            const params = [publicAddress, signTypedDataV3Payload];
            const method = 'eth_signTypedData_v3';
            const signature = await m.rpcProvider.request({
              method,
              params,
            });
            console.log('signature', signature);
            const DID = await m.auth.loginWithSMS({
              phoneNumber: '+14258909609',
            });
            console.log(DID);
          }}>
          Test asdlkfjkasdljf
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
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
