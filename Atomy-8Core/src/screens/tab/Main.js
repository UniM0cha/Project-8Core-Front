import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from '../../components/main/Body';
import Header from '../../components/main/Header';
import { theme } from '../../theme';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* <Container navigation={navigation} /> */}
      <ScrollView style={styles.scroll}>
        <Header />
        <Body navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    width: '100%',
    paddingVertical: 16,
  },
});
