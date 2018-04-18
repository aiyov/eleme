import React, {Component} from 'react';
import {scaleSize, pixelRatio, setSpText} from '../../common/screenUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Goods extends Component<props> {
    render() {
        return (
            <View style={styles.foods}>
                <View style={styles.foodsType}></View>
                <View style={styles.foodsItem}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foods: {
        flex: 1,
        flexDirection: 'row',
    },
    foodsType: {
        width: scaleSize(160),
        backgroundColor: 'yellow'
    },
    foodsItem: {
        flex: 1,
        backgroundColor: 'black'
    }
})