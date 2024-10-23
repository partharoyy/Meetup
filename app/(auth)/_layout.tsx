import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../contexts/AuthProvider';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack />;
};

export default AuthLayout;
