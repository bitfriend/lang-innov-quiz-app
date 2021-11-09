/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import quizReducer from './src/controllers/quiz/reducer';

const appReducer = combineReducers({
  quiz: quizReducer
});

const store = createStore(appReducer);

import FirstQuiz from './src/scenes/FirstQuiz';
import SecondQuiz from './src/scenes/SecondQuiz';
import ThirdQuiz from './src/scenes/ThirdQuiz';
import FourthQuiz from './src/scenes/FourthQuiz';
import FifthQuiz from './src/scenes/FifthQuiz';
import FinalResult from './src/scenes/FinalResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstQuiz" component={FirstQuiz} />
          <Stack.Screen name="SecondQuiz" component={SecondQuiz} />
          <Stack.Screen name="ThirdQuiz" component={ThirdQuiz} />
          <Stack.Screen name="FourthQuiz" component={FourthQuiz} />
          <Stack.Screen name="FifthQuiz" component={FifthQuiz} />
          <Stack.Screen name="FinalResult" component={FinalResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
