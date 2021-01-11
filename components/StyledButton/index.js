import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../StyledButton/styles';

export default function StyledButton(props) {
    const type = props.type;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => {
                    console.warn('Hey there');
                }}
            >
                <Text style={[styles.text, { color: textColor }]}>
                    Custom Order
                </Text>
            </Pressable>
        </View>
    );
}
