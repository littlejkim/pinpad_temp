// public imports
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

// custom imports
import styles from './assets/pinpad.styles';

export default function PinPad({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const savedPassword = [1, 2, 3, 4]; // temporary password check
  const [password, setPassword] = useState([]);
  const keyboardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, 'DEL'];
  // error message constants for modal
  const [modal, setModal] = useState(false);
  const contents = [
    {
      title: 'Success',
      body: 'Passwords matched',
    },
    {
      title: 'Error',
      body: 'Passwords did not match. Please try again.',
    },
  ];

  const _addPassword = item => {
    if (password.length < savedPassword.length) {
      const temp = [...password, item];
      setPassword(temp);
    }
  };

  const _deletePassword = () => {
    if (password.length !== 0) {
      const temp = [...password];
      temp.splice(-1, 1);
      setPassword(temp);
    }
  };

  useEffect(() => {
    if (password.length === savedPassword.length) {
      password.every((val, index) => val === savedPassword[index])
        ? console.log('correct password')
        : setModal(true);
    }
    return () => setIsLoading(false);
  }, [password, savedPassword]);

  return (
    <>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>Enter your PIN number.</Text>
          <Text style={styles.bodyText}>Forgot your PIN?</Text>
          <View
            style={{
              flex: 0.1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '50%',
              flexDirection: 'row',
            }}>
            <View
              style={[
                styles.passwordDot,
                {
                  opacity: password.length >= 1 ? 1 : 0.3,
                },
              ]}
            />
            <View
              style={[
                styles.passwordDot,
                {
                  opacity: password.length >= 2 ? 1 : 0.3,
                },
              ]}
            />
            <View
              style={[
                styles.passwordDot,
                {
                  opacity: password.length >= 3 ? 1 : 0.3,
                },
              ]}
            />
            <View
              style={[
                styles.passwordDot,
                {
                  opacity: password.length >= 4 ? 1 : 0.3,
                },
              ]}
            />
          </View>
        </View>
        <View style={styles.middleContainer}>
          <FlatList
            data={keyboardNumbers}
            renderItem={({item, index}) =>
              index === 9 ? (
                <View style={styles.item} />
              ) : index === 11 ? (
                <TouchableOpacity style={styles.item} onPress={_deletePassword}>
                  <Image
                    source={require('./assets/delete.png')}
                    style={{aspectRatio: 0.3, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.5}
                  onPress={() => {
                    _addPassword(item);
                  }}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )
            }
            keyExtractor={item => item.toString()}
            numColumns={3}
            scrollEnabled={false}
          />
        </View>
      </View>
    </>
  );
}
