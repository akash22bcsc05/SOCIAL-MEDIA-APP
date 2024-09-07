import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import NavigationBottomTag from '../Components/NavigationBottomTag';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
 
  return (
        <NavigationBottomTag />  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;

