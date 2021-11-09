import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';

const FinalResult = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        {answers && answers.map((answer, index) => (
          <Fragment key={index}>
            <Text style={styles.question}>{index + 1}. Which one do you prefer?</Text>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.answerWapper}>
                <Text style={styles.answer}>{answer}</Text>
              </View>
            </View>
          </Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  question: {
    marginTop: 12,
    marginHorizontal: 12,
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  answerWapper: {
    padding: 12,
    width: '100%'
  },
  answer: {
    marginTop: 8,
    width: '100%',
    padding: 12,
    backgroundColor: '#ddd',
    color: Colors.black,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  }
});

export default FinalResult;
