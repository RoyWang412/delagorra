import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { Field, Form } from 'react-final-form';
import Validate from 'validate.js';
import * as Client from '~/utils/client';
import { showSimpleError } from '~/utils/alert';
import { Colors } from '~/utils/theme';

import TermsModal from './TermsModal';

import * as Styled from './styled';

const SignIn = ({ navigation, onSignIn }) => {
  const [loading, setLoading] = useState(false);
  const [codeSending, setCodeSending] = useState(false);
  const [countSec, setCountSec] = useState(10);
  const [countDowning, setCountDowning] = useState(false);
  const [sendText, setSendText] = useState('Send');
  const [showTermsModal, setShowTermsModal] = useState(false);

  const getInitialValues = () => ({
    phoneNumber: '',
    code: '',
  });

  const validate = (values) => {
    const constraints = {
      phoneNumber: {
        presence: { message: '^Required', allowEmpty: false },
        length: { is: 11, message: '^Wrong number' },
      },
      code: {
        presence: { message: '^Required', allowEmpty: false },
        length: { is: 4, message: '^Too short' },
      },
    };

    return Validate(values, constraints);
  };

  const startCountdown = () => {
    setCountDowning(true);
    const interval = setInterval(() => {
      setCountSec((prevCountSec) => {
        if (prevCountSec === 1) {
          setCountDowning(false);
          clearInterval(interval);
          return;
        }
        return prevCountSec - 1;
      });
    }, 1000);
  };

  const handleCodeSend = async ({ phoneNumber }) => {
    setShowTermsModal(true)

    // try {
    //   setCodeSending(true);
    //   const response = await Client.post('/user/code-request', { phoneNumber });
    //   setCodeSending(false);
    //   startCountdown();
    // } catch (e) {
    //   showSimpleError(e);
    //   setCodeSending(false);
    // }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await Client.post('/code-verify', values);
      if (!response.password) {
        setShowTermsModal(true);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      showSimpleError(e);
    }
  };

  useEffect(() => {
    if (countDowning) {
      setSendText(`${countSec} sec`);
    } else {
      setSendText('Send');
    }
  }, [countDowning, countSec]);

  useEffect(() => {
    if (!countDowning) {
      setCountSec(5);
    }
  }, [countDowning]);

  const renderForm = ({ handleSubmit, errors, submitting, values }) => (
    <Styled.Box px={15} flex={1}>
      <Styled.Box flex={0.3} />
      <Styled.Box>
        <Styled.Text fontStyle="semibold" textAlign="center" mb={5}>
          Phone Number
          <Styled.Text color={Colors.pink} fontStyle="semibold">
            {' '}
            Quick Login
          </Styled.Text>
        </Styled.Text>
        <Field
          name="phoneNumber"
          component={Styled.TextInput}
          placeholder="Your phone"
          variant="phone"
          keyboardType="numeric"
          mask="([000]) [0000] [0000]"
          disabled={countDowning}
        />

        <Field
          name="code"
          component={Styled.TextInput}
          placeholder="Verification code"
          variant="phoneCode"
          onSendPress={() => handleCodeSend(values)}
          keyboardType="numeric"
          btnSendText={errors.phoneNumber ? '' : sendText}
          mask="[0000]"
          codeSending={codeSending}
        />
      </Styled.Box>

      <Styled.Button mt={15} onPress={handleSubmit} text="Log In" disabled={submitting} />
    </Styled.Box>
  );

  return (
    <Styled.KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Styled.Container>
        <Form initialValues={getInitialValues()} validate={validate} render={renderForm} onSubmit={handleSubmit} />
      </Styled.Container>
      <Styled.Loader loading={loading} />
      <TermsModal onBackdropPress={() => setShowTermsModal(false)} isVisible={showTermsModal}/>
    </Styled.KeyboardAvoidingView>
  );
};

export default SignIn;
