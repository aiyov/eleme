import React, {Component} from 'react';
import {scaleSize, pixelRatio, setSpText} from '../../common/screenUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Header extends Component<Props> {
    componentDidMount() {
        console.log(setSpText(16))
    }

    render() {
        return (
            <View>
                <View style={styles.contentWrapper}>
                    <Image
                        style={styles.avatar}
                        source={{uri: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'}}/>
                    <View style={styles.shop}>
                        <View style={styles.brand}>
                            <Image style={styles.brandTitle} source={require('../../assets/header/brand.png')}/>
                            <Text allowFontScaling={false} style={styles.name}>粥品香坊（回龙观）</Text>
                        </View>
                        <Text style={styles.delivery}>蜂鸟专送/38分钟送达</Text>
                        <View style={styles.discount}>
                            <Image style={styles.discountTitle} source={require('../../assets/header/decrease_1.png')}/>
                            <Text allowFontScaling={false} style={styles.discountDetail}>在线支付满28减5</Text>
                        </View>
                    </View>
                    <View style={styles.discountCount}>
                        <Text style={styles.discountCountText}>5个</Text>
                        <Icon name='chevron-right' style={styles.arrowRight}></Icon>
                    </View>
                </View>
                <View style={styles.bulletinWrapper}>
                    <Text>456789</Text>
                </View>
                <View style={styles.background}></View>
                <View style={styles.detail}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contentWrapper: {
        paddingTop: scaleSize(48),
        paddingRight: scaleSize(24),
        paddingBottom: scaleSize(36),
        paddingLeft: scaleSize(48),
        flexDirection: 'row'
    },
    avatar: {
        width: scaleSize(128),
        height: scaleSize(128),
        marginRight: scaleSize(32)
    },
    shop: {
        height: scaleSize(128),
    },
    brandTitle: {
        width: scaleSize(60),
        height: scaleSize(36),
    },
    brand: {
        flexDirection: 'row',
        paddingTop: scaleSize(4)
    },
    name: {
        marginLeft: scaleSize(12),
        lineHeight: setSpText(18),
        fontSize: setSpText(16),
        fontWeight: 'bold',
        includeFontPadding: false,
        color: '#fff',
        textAlignVertical: 'top'
    },
    delivery: {
        marginTop: scaleSize(16),
        fontSize: setSpText(12),
        lineHeight: setSpText(14),
        fontWeight: '200',
        color: '#fff'
    },
    discount: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: scaleSize(4)
    },
    discountTitle: {
        width: scaleSize(24),
        height: scaleSize(24),
        marginRight: scaleSize(8)
    },
    discountDetail: {
        includeFontPadding: false,
        fontSize: setSpText(10),
        lineHeight: setSpText(12),
        fontWeight: '200',
        color: '#fff'
    },
    discountCount: {
        flexDirection: 'row',
        height: scaleSize(48),
        borderRadius: scaleSize(16),
        paddingHorizontal: scaleSize(16),
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        bottom: scaleSize(36),
        right: scaleSize(24)
    },
    discountCountText :{
        includeFontPadding: false,
        fontSize: setSpText(12),
        lineHeight: scaleSize(48),
        fontWeight: '200',
        color: '#fff',
    },
    arrowRight: {
        marginLeft: scaleSize(4),
        lineHeight: scaleSize(48),
        color: '#fff',
    },
    bulletinWrapper: {
        height: 48,
        backgroundColor: 'yellow'
    },
    background: {
        padding: scaleSize(48),
        backgroundColor: 'green'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    Text: {
        includeFontPadding: false,
    }
});