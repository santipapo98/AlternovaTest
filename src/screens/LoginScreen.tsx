import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/authNavigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

interface Props extends NativeStackScreenProps<RootStackParams,'LoginScreen'>{}

const LoginScreen = (props : Props) => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            console.log('Signed in successfully');
            const user = userCredentials.user;
            console.log(user);
            navigation.navigate('StoreScreen');
        }).catch(() => {
            Alert.alert('Wrong email or password');
        });
    }

  return (
    <View style={{...styles.container, backgroundColor: toggleSwitch ? '#222' : '#f5f5f5'}}>
      <Text style={{...styles.logo, color: toggleSwitch ? '#fff' : '#ff9900'}}>BRICKS!</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#999'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.createAccount}>Don't have an account yet ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={toggleSwitch ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setToggleSwitch(!toggleSwitch)}
            value={toggleSwitch}
        />
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
  createAccount: {
    color: '#ff9900',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  darkModeText: {
    color: '#ff9900',
    marginRight: 10,
  },
});

export default LoginScreen;
