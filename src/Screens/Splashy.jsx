import { View, Text, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import { myColor } from '../Utils/MyColor';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Splashy = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.replace('Signup');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: myColor.primary,
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
      }}
    >
      <StatusBar style="light" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          style={{ tintColor: 'white', height: 75, width: 65 }}
          source={require('../../assets/LogoIcon.png')}
        />
        <View style={{}}>
          <Text style={{ color: 'white', fontSize: 40 }}>Sarim Grocery</Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              letterSpacing: 5,
              top: -7,
            }}
          >
            Buy all you can
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splashy;
