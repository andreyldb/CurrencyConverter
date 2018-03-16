import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
<<<<<<< HEAD
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    width: imageWidth / 2,
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
=======
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    logo: {
        width: imageWidth / 2,
    },
    text: {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        fontWeight: '600',
    },
>>>>>>> 6c7a57e2aa5aac67f12b929c6696e8353dbc9d6f
});
