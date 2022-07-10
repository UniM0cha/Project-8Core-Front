import { useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';
import Body from '../../components/main/MainBody';
import Header from '../../components/main/MainHeader';
import ShareButton from '../../components/main/ShareButton';
import { DateProvider } from '../../contexts/DateContext';
import { theme } from '../../theme';
import * as Sharing from 'expo-sharing';

const Main = ({ navigation }) => {
  const viewshotRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef(viewshotRef, {
      format: 'jpg',
      quality: 0.8,
    });
    return `file://${uri}`;
  };

  const onCapture = async () => {
    const uri = await getPhotoUri();
    await Sharing.shareAsync(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DateProvider>
        <StatusBar />
        <ScrollView style={styles.scroll}>
          {/* 캡쳐할 부분 시작*/}
          <ViewShot ref={viewshotRef} style={styles.viewshot}>
            <Header />
            <Body navigation={navigation} />
          </ViewShot>
          {/* 캡쳐할 부분 끝 */}
          <ShareButton onPress={() => onCapture()} />
        </ScrollView>
      </DateProvider>
    </SafeAreaView>
  );
};

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
    backgroundColor: theme.background,
  },
  viewshot: {
    backgroundColor: theme.background,
    elevation: 0,
  },
});

export default Main;
