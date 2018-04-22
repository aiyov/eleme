import React, {Component} from 'react';
import {scaleSize, pixelRatio, setSpText} from '../../common/screenUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

export default class Goods extends Component<props> {
    render() {
        return (
            <View style={styles.foods}>
                <View style={styles.foodsType}>
                    <GoodsType />
                </View>
                <View style={styles.foodsItem}></View>
            </View>
        )
    }
}

class GoodsType extends Component<props> {

    _keyExtractor = (item, index) => String(index);
    _renderItem = ({item, index}) => (
        <View style={index==2?styles.current:styles.goodsTypeWrapper}>
            <View style={index==2||index==1||index==9?styles.currentTypeList:styles.goodsTypeList}>
                {/*<Image style={styles.header} source={noHeader}/>*/}
                <Text style={styles.goodsTypeText}>{item.key}</Text>
            </View>
        </View>
    )
    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator= {false} //隐藏竖直滚动条
                keyExtractor={this._keyExtractor}
                data={[{key: '单人特色套餐'},{key: '双人特色套餐'},{key: '特色套餐'}, {key: '特色粥菜'},{key: '特色粥菜'},{key: '特色粥菜'},{key: '单人特色套餐'},{key: '特色套餐'},{key: '特色套餐'}, {key: '特色粥菜'}]}
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
        backgroundColor: 'black'
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
    }
})