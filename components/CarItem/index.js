import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import StyledButton from '../StyledButton';
import styles from './styles';

export default function CartItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting with $99</Text>
            </View>
            <StyledButton type="primary" />
        </View>
    );
}
