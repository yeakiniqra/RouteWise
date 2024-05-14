import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import axios from 'axios';
import { useFonts } from "expo-font";

const Tourguide = () => {

  let [fontsLoaded] = useFonts({
    'poppins': require('@/assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8000/api/location/');
      const json = await response.data;
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#777"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Text style={styles.title}>Your Travel List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>Location: {item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'poppins',
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'poppins',
  },
  location: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Tourguide;
