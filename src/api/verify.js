import { BASE_URL, PUSH_BACKEND_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createFactor = async (phoneNumber) => {
  // TODO -
  // 1. hash identity to obfuscate PII
  // 2. create Factor
  // 3. verify Factor
  // 4. store identity and factor SID
};

export const silentAuthorization = async (factorSid) => {
  try {
    // TODO
    // 1. get identity from storage
    // 2. create new challenge
    // 3. immediately verify challenge
    // 4. check challenge status to validate
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const sendSmsVerification = async (phoneNumber) => {
  try {
    const data = JSON.stringify({
      to: phoneNumber,
      channel: "sms",
    });

    const response = await fetch(`${BASE_URL}/start-verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const json = await response.json();
    return json.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkVerification = async (phoneNumber, code) => {
  try {
    const data = JSON.stringify({
      to: phoneNumber,
      verification_code: code,
    });

    const response = await fetch(`${BASE_URL}/check-verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const json = await response.json();
    return json.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
