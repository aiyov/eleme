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
      <View style={styles.header}>
        <View style={styles.background}>
          <Image
            style={styles.back}
            source={{uri: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'}}/>
        </View>
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
          <Image style={styles.bulletinImage} source={require('../../assets/header/bulletin.png')}/>
          <Text style={styles.bulletinText} numberOfLines={1}>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</Text>
          <Icon name='chevron-right' style={styles.bulletinMore}></Icon>
        </View>
        <View style={styles.detail}></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(7,17,27,0.5)',
  },
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
  discountCountText: {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleSize(56),
    backgroundColor: 'rgba(7,17,27,0.2)'
  },
  bulletinImage: {
    marginLeft: scaleSize(24),
    marginRight: scaleSize(8)
  },
  bulletinText: {
    flex: 1,
    fontSize: setSpText(10),
    fontWeight: '200',
    color: '#fff'
  },
  bulletinMore: {
    marginRight: scaleSize(24),
    marginLeft: scaleSize(8),
    fontSize: setSpText(10),
    fontWeight: 'normal',
    color: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex:-1
  },
  back: {
    flex: 1,
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