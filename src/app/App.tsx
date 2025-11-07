import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario Maya · Setup Fundacional</Text>
      <Text style={styles.subtitle}>
        Base Expo lista para desarrollar el Kin Calculator en los próximos sprints.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0d47a1',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#424242',
    textAlign: 'center',
  },
});
