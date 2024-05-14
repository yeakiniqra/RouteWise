import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Link, router } from 'expo-router';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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

  const handleUsernameChange = (username: string) => {
    setUsername(username);
  }

  const submit = async () => {
    if (!username || !email || !password) {
      Alert.alert('Please fill all the fields');
      return; // Exit early if any field is empty
    }

    try {
      Alert.alert('Account created successfully');
      router.replace('/login');
    } catch (error) {
      console.error('Error creating account:', error);
      Alert.alert('Error creating account');
    }
  };
  
  
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.main}>Create a New Account</Text>
      <Image
        source={require("@/assets/images/signup.png")}
        style={styles.imagePlaceholder}
      />
      {/* Username */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} 
        placeholder="Enter your username" 
        value={username}
        onChangeText={handleUsernameChange}
          
         />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} 
        placeholder="Enter your email" 
        value={email}
        onChangeText={handleEmailChange}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} 
        placeholder="Enter your password" 
        secureTextEntry={true} 
        value={password}
        onChangeText={handlePasswordChange}
         />
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Login Link */}

      <Text style={{ marginTop: 12 }} >Already have an account?
        <Link href="/login" style={{ color: '#132B60', fontSize: 14 }}>
          Login
        </Link>
      </Text>

    </View>

  );
}

export default Signup;

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
    paddingRight: 60,
    paddingLeft: 60,
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
