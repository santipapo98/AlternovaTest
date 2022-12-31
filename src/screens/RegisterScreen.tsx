import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../config/firebase';

const RegisterScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createAccount = () => {
        if (password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                navigation.navigate('LoginScreen');
            });
        } else {
            Alert.alert('Passwords do not match');
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BRICKS</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#999'
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          placeholderTextColor='#999'
          secureTextEntry
          onChangeText={text => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff9900',
  },
  form: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    height: 46,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  button: {
    height: 46,
    backgroundColor: '#ff9900',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegisterScreen;
