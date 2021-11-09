import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';

import { replyToQuiz } from '../controllers/quiz/actions';

const FifthQuiz = ({ navigation }) => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  const onClick = (answer) => useCallback(() => {
    dispatch(replyToQuiz(4, answer));
    navigation.push('FinalResult');
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.question}>5. Which one do you prefer?</Text>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.answerWapper}>
          <TouchableOpacity onPress={onClick('A')}>
            <Text style={styles.answer}>A</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.answerWapper}>
          <TouchableOpacity onPress={onClick('B')}>
            <Text style={styles.answer}>B</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.answerWapper}>
          <TouchableOpacity onPress={onClick('C')}>
            <Text style={styles.answer}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default FifthQuiz;
