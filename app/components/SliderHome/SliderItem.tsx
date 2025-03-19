import { Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ImageSliderType } from '../../data/SliderData'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
    item: ImageSliderType;
    index: number;
    scrollX: SharedValue<number>;
}

const {width} = Dimensions.get('screen');

const SliderItem = ({index, item, scrollX}: Props) => {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.95, 1, 0.95],
                        Extrapolation.CLAMP
                    ),
                }
            ],
        };
    });

    return (
        <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
            <Image source={item.image} style={styles.image} />
        </Animated.View>
    )
}

export default SliderItem

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: width, 
        gap: 20,
    },
    image: {
        width: '100%',
        height: 375,
        borderRadius: 20,
        objectFit: 'fill',
    }
})