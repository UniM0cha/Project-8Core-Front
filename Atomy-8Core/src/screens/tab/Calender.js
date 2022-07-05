import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

const Calender = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Calender</Text>
    </SafeAreaView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
