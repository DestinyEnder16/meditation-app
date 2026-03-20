import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { z } from 'zod';
import { Fonts } from '../constants/fonts';
import Btn from './ActionBtn';
import AppKeyboardScrollView from './AppKeyboardScrollView';

const LoginSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const SignupSchema = LoginSchema.extend({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must accept the Privacy Policy',
  }),
});

type SignupData = z.infer<typeof SignupSchema>;

type formProps = {
  type: 'login' | 'signup';
};

const RegistrationForm: React.FC<formProps> = ({ type }) => {
  const schema = (type === 'signup' ? SignupSchema : LoginSchema) as typeof SignupSchema;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { privacyPolicy: false },
  });

  const onSubmit = (data: SignupData) => {
    console.log('Registration Data:', data);
  };

  return (
    <AppKeyboardScrollView>
      <View style={styles.container}>
        {/* Username Field */}
        {type === 'signup' && (
          <View>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Username"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={styles.txtInput}
                  placeholderTextColor={'#A1A4B2'}
                />
              )}
            />
            {errors.username && (
              <Text style={styles.errorMsg}>{errors.username.message}</Text>
            )}
          </View>
        )}

        {/* Email Field */}
        <View>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                placeholder="Email address"
                placeholderTextColor={'#A1A4B2'}
                onBlur={onBlur}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.txtInput}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorMsg}>{errors.email.message}</Text>
          )}
        </View>

        {/* Password Field */}
        <View>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Password"
                value={value}
                placeholderTextColor={'#A1A4B2'}
                secureTextEntry
                style={styles.txtInput}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorMsg}>{errors.password.message}</Text>
          )}
        </View>

        {type === 'signup' && (
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontFamily: Fonts.medium, color: '#aaa' }}>
                I have read the{' '}
                <Text style={{ color: '#7583CA' }}>Privacy Policy</Text>
              </Text>

              <Controller
                control={control}
                name="privacyPolicy"
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    value={value}
                    color={value ? '#8e97fd' : undefined}
                    onValueChange={onChange}
                  />
                )}
              />
            </View>
            {errors.privacyPolicy && (
              <Text style={styles.errorMsg}>{errors.privacyPolicy.message}</Text>
            )}
          </View>
        )}

        {/* Submit Button */}
        <View style={{ marginTop: 10 }}>
          <Btn
            text={type === 'login' ? 'LOG IN' : 'GET STARTED'}
            txtColor="#EEE"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        {type === 'login' && (
          <Text style={{ alignSelf: 'center', fontFamily: Fonts.medium }}>
            Forgot Password?
          </Text>
        )}
      </View>
    </AppKeyboardScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: '100%',
  },
  txtInput: {
    backgroundColor: '#F2F3F7',
    width: '100%',
    paddingHorizontal: 15,
    height: 63,
    borderRadius: 15,
    fontFamily: Fonts.medium,
  },
  errorMsg: {
    fontFamily: Fonts.bold,
    color: '#bc103a',
  },
});

export default RegistrationForm;
