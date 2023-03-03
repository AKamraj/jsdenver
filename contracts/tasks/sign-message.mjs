import {
    encrypt,
    recoverPersonalSignature,
    recoverTypedSignatureLegacy,
    recoverTypedSignature,
    recoverTypedSignature_v4 as recoverTypedSignatureV4,
  } from 'eth-sig-util';

async function tryRecoverPersonalSignature() {
    const exampleMessage = 'Example `personal_sign` message';
    try {
      const from = '0x0e21c1982BeeEF2e25A9D4d51baeaB686207Afcf'; // TODO: Convert to var
      const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;
      const sign = personalSignResult.innerHTML; // TODO: Get rid of HTML part
      const recoveredAddr = recoverPersonalSignature({
        data: msg,
        sig: sign,
      });
      if (recoveredAddr === from) {
        console.log(`SigUtil Successfully verified signer as ${recoveredAddr}`);
      } else {
        console.log(
          `SigUtil Failed to verify signer when comparing ${recoveredAddr} to ${from}`,
        );
        console.log(`Failed comparing ${recoveredAddr} to ${from}`);
      }
      const ecRecoverAddr = await ethereum.request({
        method: 'personal_ecRecover',
        params: [msg, sign],
      });
      if (ecRecoverAddr === from) {
        console.log(`Successfully ecRecovered signer as ${ecRecoverAddr}`);
      } else {
        console.log(
          `Failed to verify signer when comparing ${ecRecoverAddr} to ${from}`,
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

tryRecoverPersonalSignature()