import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { myColor } from '../Utils/MyColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColor.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image
          style={{ alignSelf: 'center' }}
          source={require('../../assets/LogoIcon.png')}
        />
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text
            style={{ color: myColor.third, fontSize: 28, fontWeight: '600' }}
            t
          >
            Sign Up
          </Text>
          <Text style={{ color: 'grey', fontSize: 16, marginTop: 10 }}>
            Enter your credentials to continue
          </Text>

          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 30,
            }}
          >
            Name
          </Text>
          <TextInput
            maxLength={15}
            keyboardType="name"
            style={{
              borderColor: '#E3E3E3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 30,
            }}
          >
            Email
          </Text>
          <TextInput
            keyboardType="email"
            style={{
              borderColor: '#E3E3E3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 30,
            }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: '#E3E3E3',
              borderBottomWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextInput
              secureTextEntry={isVisible}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,
                marginTop: 15,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setIsVisible(!isVisible);
              }}
              name={isVisible ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="black"
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              marginTop: 10,
              width: '95%',
              fontSize: 14,
              fontWeight: '400',
              letterSpacing: 0.7,
              lineHeight: 26,
              opacity: 0.7,
            }}
          >
            By continuing you agree to our Term & Services and out Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
