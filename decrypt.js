import CryptoJS from 'crypto-js';

export function decryptCode(ENCRYPTED_CODE, SECRET_KEY) {
  try {
    const bytes = CryptoJS.AES.decrypt(ENCRYPTED_CODE, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted || null;
  } catch {
    return null;
  }
}
