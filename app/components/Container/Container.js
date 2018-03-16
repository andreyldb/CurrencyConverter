import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
<<<<<<< HEAD
  <View style={styles.container}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
=======
    <View style={styles.container}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.any,
>>>>>>> 6c7a57e2aa5aac67f12b929c6696e8353dbc9d6f
};

export default Container;
