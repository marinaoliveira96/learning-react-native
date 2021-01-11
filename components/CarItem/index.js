import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import StyledButton from '../StyledButton';
import styles from './styles';

export default function CartItem({ name, tagLine, tagLineCTA, image }) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagLine}{' '}
                    <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={'Custom Order'}
                    onPress={() => {
                        console.warn('Custom Order was pressed');
                    }}
                />
                <StyledButton
                    type="secondary"
                    content={'Existing Inventory'}
                    onPress={() => {
                        console.warn('Custom order was pressed');
                    }}
                />
            </View>
        </View>
    );
}
