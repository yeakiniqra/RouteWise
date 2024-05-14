import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Alert } from 'react-native';
import { Link, router } from 'expo-router';


const Login = () => {

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (email: string) => {
    setEmail(email);

    if (!isValidEmail(email)) {
     return null;
    }
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  }

  const extractUsernameFromEmail = (email: string) => {
    return email.split('@')[0];
  };

  const submit = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all the fields');
      return; // Exit early if any field is empty
    }

    try {
      const username = extractUsernameFromEmail(email);
      Alert.alert('Logged in successfully');
      router.navigate({
        pathname: '/home',
        params: { username: username },
      });
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error logging in');
    }
  };
   
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.main}>Log in to your Account!</Text>
      <Image
      source={require("@/assets/images/signup.png")}
      style={styles.imagePlaceholder}
    /> 
     
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email"  value={email} onChangeText={handleEmailChange} />
      </View>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} value={password} onChangeText={handlePasswordChange} />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    marginBottom: 20,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 10,
    width: '80%',
  },
  label: {
    marginBottom: 5,
    color: '#132B60',
  },
  input: {
    borderWidth: 1,
    borderColor: '#132B60',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#132B60',
    padding: 12,
    paddingRight: 90,
    paddingLeft: 90,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  main: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#132B60",
  }
});
