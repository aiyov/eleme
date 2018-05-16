import {goods} from '../../../data.json'
import React, {Component} from 'react';
import {scaleSize, pixelRatio, setSpText} from '../../common/screenUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View, Image, FlatList, SectionList} from 'react-native';

export default class Goods extends Component<props> {
    componentDidMount() {
        // console.log(goods)
    }

    render() {
        return (
            <View style={styles.foods}>
                <View style={styles.foodsType}>
                    <GoodsType/>
                </View>
                <View style={styles.foodsItem}>
                    <FoodsItem/>
                </View>
                <CartControl />
            </View>
        )
    }
}

class CartControl extends Component<props> {
    render (){
        return (
            <View style={styles.shopcar}>
                <View style={styles.contentLeft}>
                    <Text>123</Text>
                </View>
                <View  style={styles.contentRight}>
                   {/*<View style={styles.notEnough}>
                       <Text style={styles.notEnoughText}>还差Y10元起送</Text>
                   </View>*/}
                    <View style={styles.enough}>
                        <Text style={styles.enoughText}>去结算</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class FoodsItem extends Component<props> {
    _keyExtractor = (item, index) => {
        return String(index)
    };
    _renderItem = ({item}) => (
        <View style={styles.foodList}>
            <Image style={styles.foodImg} source={{uri: item.icon}}/>
            <View style={styles.foodsInfo}>
                <Text style={styles.foodsName}>{item.name}</Text>
                {item.description ? <Text style={styles.remark}>{item.description}</Text> : null}
                <Text style={styles.sellCount}>
                    月售{item.sellCount}份 <Text style={styles.reputation}>好评率{item.rating}%</Text>
                </Text>
                <Text style={styles.foodsPrice}>
                    ￥{item.price} {item.oldPrice ? <Text style={styles.oldPrice}>￥{item.oldPrice}</Text> : null}
                </Text>
                <View style={styles.cartcontrol}>
                    <Icon name="minus-circle" size={24} color="#00a0dc"/>
                    <Text style={styles.cartNum}>3</Text>
                    <Icon name="plus-circle" size={24} color="#00a0dc"/>
                </View>
            </View>
        </View>
    )

    _renderSectionHeader = (section) => (
        <Text style={styles.title}>{section.section.name}</Text>
    )

    _lineSpace=()=>(
        <View style={styles.lineSpace} />
    )

    render() {
        return (
            <SectionList
                style={styles.foodsItem}
                keyExtractor={this._keyExtractor}
                renderSectionHeader={this._renderSectionHeader}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._lineSpace}
                sections={goods}
            />
        )
    }
}

class GoodsType extends Component<props> {
    constructor(prop) {
        super()
        this.state = {
            classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    }

    _keyExtractor = (item, index) => String(index);
    _renderItem = ({item, index}) => (
        <View style={index == 2 ? styles.current : styles.goodsTypeWrapper}>
            <View
                style={index == 2 || index == 1 || index == goods.length - 1 ? styles.currentTypeList : styles.goodsTypeList}>
                <Text style={styles.goodsTypeText}>
                    {item.type === 0 ? <Image style={styles.type}
                                              source={require('../../assets/goods/decrease_3.png')}/> : null}
                    {item.type === 1 ? <Image style={styles.type}
                                              source={require('../../assets/goods/discount_3.png')}/> : null}
                    {item.type === 2 ? <Image style={styles.type}
                                              source={require('../../assets/goods/special_3.png')}/> : null}
                    {item.type === 3 ? <Image style={styles.type}
                                              source={require('../../assets/goods/invoice_3.png')}/> : null}
                    {item.type === 4 ? <Image style={styles.type}
                                              source={require('../../assets/goods/guarantee_3.png')}/> : null}
                    {item.name}
                </Text>
            </View>
        </View>
    )

    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false} //隐藏竖直滚动条
                keyExtractor={this._keyExtractor}
                data={goods}
                renderItem={this._renderItem}
            />
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
        backgroundColor: '#fff'
    },
    goodsTypeWrapper: {
        width: scaleSize(160),
        height: scaleSize(108),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f5f7',
    },
    goodsTypeList: {
        width: scaleSize(112),
        height: scaleSize(108),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(7,17,27,0.1)'
    },
    currentTypeList: {
        width: scaleSize(112),
        height: scaleSize(108),
        justifyContent: 'center',
    },
    current: {
        width: scaleSize(160),
        height: scaleSize(108),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    goodsTypeText: {
        fontSize: 12,
    },
    type: {
        width: 28,
        height: 28,
        marginRight: 1,
    },
    title: {
        paddingLeft: scaleSize(28),
        height: scaleSize(52),
        fontSize: 12,
        lineHeight: scaleSize(52),
        color: 'rgb(147, 153, 159)',
        borderLeftWidth: 2,
        borderLeftColor: '#d9dde1',
        backgroundColor: '#f3f5f7',
        includeFontPadding: false,
    },
    foodList: {
        padding: scaleSize(36),
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    foodImg: {
        width: scaleSize(104),
        height: scaleSize(104),
        marginRight: scaleSize(20)
    },
    foodsInfo: {
        flex: 1,
    },
    foodsName: {
        marginTop: scaleSize(4),
        marginBottom: scaleSize(16),
        fontSize: 14,
        color: 'rgb(7,17,27)',
        lineHeight: 16,
        includeFontPadding: false,
    },
    remark: {
        marginBottom: scaleSize(16),
        fontSize: 10,
        lineHeight: 12,
        color: 'rgb(147, 153, 159)',
        includeFontPadding: false,
    },
    sellCount: {
        fontSize: 10,
        lineHeight: 12,
        color: 'rgb(147, 153, 159)',
        includeFontPadding: false,
    },
    reputation: {
        paddingLeft: scaleSize(24)
    },
    foodsPrice: {
        fontSize: 14,
        lineHeight: scaleSize(48),
        color: '#f01414',
        fontWeight: '700',
        includeFontPadding: false,
    },
    oldPrice: {
        fontSize: 12,
        color: 'rgb(147, 153, 159)',
        textDecorationLine: 'line-through'
    },
    cartcontrol: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: scaleSize(48),
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartNum: {
        paddingHorizontal: scaleSize(12),
        includeFontPadding: false
    },
    lineSpace: {
        height: 1,
        backgroundColor: 'rgba(7,17,27,0.1)',
        marginHorizontal: scaleSize(36),
    },
    shopcar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        height: 50,
    },
    contentLeft: {
        flex: 1,
        height: 50,
        backgroundColor: '#141d27'
    },
    contentRight: {
        width: 105,
        height: 50,
    },
    notEnough: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b333b'
    },
    notEnoughText: {
        fontSize: 12,
        fontWeight: '700',
        color: 'rgba(255,255,255,0.4)',
    },
    enough: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b43c'
    },
    enoughText: {
        fontSize: 12,
        fontWeight: '700',
        color: 'rgba(255,255,255,1)',
    }
})