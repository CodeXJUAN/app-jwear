import { Dimensions, StyleSheet, View, ViewToken } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { ImageSliderType } from '../../data/SliderData'
import Animated, { scrollTo, useSharedValue, useAnimatedScrollHandler, useAnimatedRef, useDerivedValue } from 'react-native-reanimated'
import SliderItem from './SliderItem'
import Pagination from './Pagination'


type Props = {
    itemList: ImageSliderType[];
}

const {width} = Dimensions.get('screen');

const Slider = ({itemList} : Props) => {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const [data, setData] =  useState(itemList);
    const ref = useAnimatedRef<Animated.FlatList<any>>();
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const interval = useRef<NodeJS.Timeout>();
    const offset = useSharedValue(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
        onMomentumEnd: (event) => {
            offset.value = event.contentOffset.x;
        },
    });

    useEffect(() => {
        if(isAutoPlay == true) {
            interval.current = setInterval(() => {
                offset.value = offset.value + width;
            }, 3500);
         }else{
            clearInterval(interval.current);
         } 
         
         return () => {
                clearInterval(interval.current);
        };
    }, [isAutoPlay, offset, width]);

    useDerivedValue(() => {
        scrollTo(ref, offset.value, 0, true);
    });

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const onViewableItemsChanged = ({viewableItems} : {viewableItems : ViewToken[]}) => {
        if(viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
            setPaginationIndex(viewableItems[0].index % itemList.length);
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged},
    ]);

    return (
        <View>
            <Animated.FlatList 
                ref={ref}
                data={data} 
                renderItem={({item,index}) => (
                    <SliderItem item={item} index={index} scrollX={scrollX} /> 
                )} 
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                pagingEnabled
                onScroll={onScrollHandler}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onEndReached={() => setData([...data, ...itemList])}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => {
                    setIsAutoPlay(false);
                }}
                onScrollEndDrag={() => {
                    setIsAutoPlay(true);
                }}
            />
            <Pagination 
                items={itemList} 
                scrollX={scrollX} 
                paginationIndex={paginationIndex} 
            />
        </View>
    )
}

export default Slider