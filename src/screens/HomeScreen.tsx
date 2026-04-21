import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StyleProp, 
  ViewStyle 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../app/reducers';
import { MainStackParamList } from '../types';
import { ROUTES } from '../utils';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const user = auth.data;

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome, {user?.username || 'User'}!
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>
          This is the main screen of your application.
        </Text>

        <TouchableOpacity 
          style={styles.profileButton}
          onPress={handleNavigateToProfile}
        >
          <Text style={styles.profileButtonText}>Go to Profile</Text>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>User Information</Text>
          <Text style={styles.infoText}>Username: {user?.username || 'N/A'}</Text>
          <Text style={styles.infoText}>Email: {user?.email || 'N/A'}</Text>
          <Text style={styles.infoText}>ID: {user?.id || 'N/A'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 20,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  profileButton: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
});

export default HomeScreen;
