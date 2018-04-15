/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Header from './src/component/header/header'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
               <Header></Header>
                <View>
                    <Text>商品</Text>
                    <Text>评论</Text>
                    <Text>商家</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
