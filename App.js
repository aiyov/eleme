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
    Image,
    TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './src/component/header/header';
import {scaleSize} from "./src/common/screenUtils";
import Goods from "./src/component/goods/goods";

class Profile extends Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        )
    }
}

class Contacts extends Component {
    render() {
        return (
            <View>
                <Text style={styles.one}>第一个</Text>
                <Text style={styles.two}>第二个</Text>
            </View>
        )
    }
}

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {selectedTab: 'goods'}
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(state) {
        this.setState({
            selectedTab: state
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <View style={styles.nav}>
                    <TouchableOpacity
                        style={styles.navItem}
                        onPress={() => {
                            this.changeTab('goods')
                        }}
                    >
                        <Text style={this.state.selectedTab == 'goods' ? styles.selected : styles.navText}>商品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navItem}
                        onPress={() => {
                            this.changeTab('comment')
                        }}
                    >
                        <Text style={this.state.selectedTab == 'comment' ? styles.selected : styles.navText}>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navItem}
                        onPress={() => {
                            this.changeTab('merchants')
                        }}
                    >
                        <Text style={this.state.selectedTab == 'merchants' ? styles.selected : styles.navText}>商家</Text>
                    </TouchableOpacity>
                </View>
                <TabNavigator
                    style={styles.navTab}
                    tabBarStyle={{height: 0, overflow: 'hidden'}}
                    sceneStyle={{paddingBottom: 0}}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'goods'}>
                        <Goods/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'comment'}>
                        <Contacts/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'merchants'}>
                        <Profile/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    one: {
        width: 200,
        height: 200,
        backgroundColor: 'blue',
        zIndex: 1,
    },
    two: {
        width: 200,
        height: 200,
        marginTop: -50,
        backgroundColor: 'yellow'
    },
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    nav: {
        flexDirection: 'row',
        height: scaleSize(80),
        backgroundColor: '#fff'
    },
    navItem: {
        flex: 1,
    },
    navText: {
        fontSize: 14,
        lineHeight: scaleSize(80),
        textAlign: 'center',
        color: 'rgb(77,85,93)',
        includeFontPadding: false,
    },
    selected: {
        fontSize: 14,
        lineHeight: scaleSize(80),
        textAlign: 'center',
        color: 'rgb(240,20,20)',
        includeFontPadding: false,
    },
    navTab: {
        flex: 1,
    }
});
