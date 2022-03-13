// import React, {useState} from 'react';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import axios from 'axios';

const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setData] = useState('times!');
  const fetchData = async () => {
    try {
      const ip = '10.0.0.123.';
      const url = `http://${ip}:3000/`;
      const {data: results} = await axios.get(url);
      console.log('results:', results);
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>CLICK ME PLEASE!</Text>
      </TouchableOpacity>
      <Text>
        You clicked {count} {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default Home;
