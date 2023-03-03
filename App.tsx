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
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {Magic} from '@magic-sdk/react-native-bare';
import {ethers} from 'ethers';
import {getBalance} from 'react-native-web3-wallet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {
  recoverTypedSignature,
  SignTypedDataVersion,
} from '@metamask/eth-sig-util';

const m = new Magic('pk_live_8EBF58706F6D8538'); // ✨

export const signTypedDataV4Payload = {
  domain: {
    chainId: 80001,
    name: 'Joyshare',
    verifyingContract: '0xcecd9f1d22cB7f5572348F336617d31919d54A57',
    version: '1',
  },
  message: {
    recipient: '0x71633bE32E07dB4a645CE85418D64484B39AB692',
    id: 1,
    amount: 1,
    approvalExpiry: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  },
  primaryType: 'Greeting',
  types: {
    Greeting: [
      {name: 'recipient', type: 'string'},
      {name: 'id', type: 'uint256'},
      {name: 'amount', type: 'uint256'},
      {name: 'approvalExpiry', type: 'uint256'},
    ],
  },
};

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      if (await m.user.isLoggedIn()) {
        const {publicAddress, issuer, phoneNumber} = await m.user.getMetadata();
        const params = [publicAddress, signTypedDataV4Payload];
        const method = 'eth_signTypedData_v4';
        const signature = await m.rpcProvider.request({
          method,
          params,
        });
        console.log('payload', signTypedDataV4Payload);
        console.log('signature', signature);
        const result = await ethers.utils.splitSignature(signature);
        console.log('v,r,s', result);
        console.log(
          publicAddress,
          issuer,
          phoneNumber,
          await m.user.getIdToken(),
        );
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
            /*
            const recoveredAddress = recoverTypedSignature({
              // @ts-ignore
              data: signTypedDataV4Payload,
              signature,
              version: SignTypedDataVersion.V4,
            });
            console.log('publicAddress', publicAddress);
            console.log('recoveredAddress', recoveredAddress);
            const DID = await m.auth.loginWithSMS({
              phoneNumber: '+14258909609',
            });
            console.log('token', DID);
            */
          }}>
          Test asdlkfjkasdljf
        </Text>
        <View flex paddingH-25 paddingT-120>
          <Text blue50 text20>
            Welcome
          </Text>
          <TextField text50 placeholder="username" grey10 />
          <TextField text50 placeholder="password" secureTextEntry grey10 />
          <View marginT-100 center>
            <Button text70 white background-orange30 label="Login" />
            <Button link text70 orange30 label="Sign Up" marginT-20 />
          </View>
        </View>
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
