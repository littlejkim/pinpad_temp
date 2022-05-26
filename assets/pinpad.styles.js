import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AD49',
    padding: 24,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
  },
  bottomContainer: {},
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 33,
    letterSpacing: 0.0041,
    marginBottom: 8,
  },
  bodyText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 23,
    letterSpacing: 0.0041,
    marginBottom: 40,
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 23,
    letterSpacing: 0.0041,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    height: Dimensions.get('window').width / 5, // approximate a square
  },
  itemText: {
    fontWeight: '400',
    color: 'white',
    fontSize: 25,
    lineHeight: 29.83,
  },
  passwordDot: {
    height: 18,
    width: 18,
    borderRadius: 100,
    backgroundColor: 'white',
  },
});
