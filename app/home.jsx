import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity,Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import { SparklesIcon,MapPinIcon,TicketIcon,TagIcon,BellAlertIcon,AdjustmentsHorizontalIcon } from "react-native-heroicons/solid";

export default function Home() {
  const route = useRoute();
  const { username } = route.params || {};

  const signout = () => {
    
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        onPress: () => {
          router.navigate('login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Section 1: Background Image with Text Overlay */}
      <ImageBackground
        source={{
          uri: 'https://i.postimg.cc/152LFLYk/Rectangle-14.png',
        }}
        style={styles.backgroundImage}
      >
        <View style={[styles.overlay, styles.imageOverlay]}>
        <View style={styles.textContainer}>
        <Text style={styles.greeting}>Hello, {username}!</Text>
        <Text style={styles.subtitle}>Welcome to Routewise Travel Planner</Text>
      </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder='Search for routes, places, etc.'
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Section 2: RouteWise Services */}
      <View style={styles.servicesContainer}>
  <Text style={styles.servicesHeading}>RouteWise Services</Text>
  <View style={styles.servicesRow}>
    {/* First Column */}
    <View style={styles.serviceColumn}>
      <View style={[styles.service, styles.service1]}>
      <View style={styles.iconTextContainer}>
        <MapPinIcon color="red" fill="red" />
        <Text style={styles.serviceText}>Plan your trips</Text>
        </View>
      </View>
      <View style={[styles.service, styles.service2]}>
        <View style={styles.iconTextContainer}>
        <BellAlertIcon color="black" fill="black" />
        <Text style={styles.serviceText}>Travel Alert</Text>
        </View>
      </View>
      <View style={[styles.service, styles.service3]}>
        <View style={styles.iconTextContainer}>
        <TicketIcon color="blue" fill="blue" />
        <Text style={styles.serviceText}>Transportation</Text>
        </View>
      </View>
    </View>
    {/* Second Column */}
    <View style={styles.serviceColumn}>
      <View style={[styles.service, styles.service4]}>
        <View style={styles.iconTextContainer}>
        <TagIcon color="blue" fill="blue" />
        <Text style={styles.serviceText}>
          <Link href={'/tourguide'}>
            Tour guide
           </Link>
            </Text>
        </View>
      </View>
      <View style={[styles.service, styles.service5]}>
      <View style={styles.iconTextContainer}>
     <SparklesIcon color="red" fill="red" />
    <Text style={styles.serviceText}>Accommodation</Text>
  </View>
      </View>
      <View style={[styles.service, styles.service6]}>
        <View style={styles.iconTextContainer}>
        <AdjustmentsHorizontalIcon color="black" fill="black" />
        <Text style={styles.serviceText}>Other Info</Text>
        </View>
      </View>
    </View>
  </View>
</View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={signout}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOverlay: {
    opacity: 0.8,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '90%',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 28,
    textAlign: 'left',
  },
  searchContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    width: '70%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  servicesContainer: {
    padding: 20,
  },
  servicesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2450b3',
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceColumn: {
    flex: 1,
    marginBottom: 18,
  },
  service: {
    padding: 18,
    marginBottom: 28,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  serviceText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
 
  service1: {
    backgroundColor: '#E9E9E9', 
  },
  service2: {
    backgroundColor: '#E9E9E9', 
  },
  service3: {
    backgroundColor: '#E9E9E9', 
  },
  service4: {
    backgroundColor: '#E9E9E9', 
  },
  service5: {
    backgroundColor: '#E9E9E9', 
  },
  service6: {
    backgroundColor: '#E9E9E9', 
  },
  iconTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  signOutButton: {
    backgroundColor: '#132B60',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
    borderRadius: 10,
  },
  signOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
