import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="signup" options=
      {{headerShown: true, 
      headerTitle: '',
      headerStyle: {backgroundColor: '#fff'}, 
      headerTintColor: 'black',
      headerShadowVisible: false,
    }}
     />
      <Stack.Screen name="login" options=
      {{headerShown: true, 
      headerTitle: '',
      headerStyle: {backgroundColor: '#fff'}, 
      headerTintColor: 'black',
      headerShadowVisible: false,
    }}
      />

      <Stack.Screen name="home" options=
      {{headerShown: true,
      headerTitle: '',
      headerStyle: {backgroundColor: '#fff'},
      headerTintColor: 'black',
      headerShadowVisible: false,
    }}
      />

      <Stack.Screen name="tourguide" options=
      {{headerShown: true,
      headerTitle: 'Tour Guide',
      headerStyle: {backgroundColor: '#fff'},
      headerTintColor: 'black',
      headerShadowVisible: false,
    }}
      />
      
    </Stack>
  );
}
