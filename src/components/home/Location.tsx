import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    withDelay,
    Extrapolate,
    interpolate,
    interpolateColor,
} from 'react-native-reanimated';
import { createAnimatableComponent } from 'react-native-animatable';



interface LocationComponentProps {
    animatedYValue?: any
}

const LocationComponent = (props: LocationComponentProps) => {
    const animatedStyle = useAnimatedStyle(() => {
        console.log("tanslationY", props.animatedYValue.value);

        const interpolateY = interpolate(
            props.animatedYValue.value,
            [0, 80],
            [-55, 10],
            Extrapolate.CLAMP
        )

        const interpolateScale = interpolate(
            props.animatedYValue.value,
            [0, 80],
            [1, .8],
            Extrapolate.CLAMP
        )


        const interpolateColorA = interpolateColor(
            props.animatedYValue.value,
            [0, 80],
            ['transparent', theme.colors.formred],
        )

        const interpolateBorder = interpolateColor(
            props.animatedYValue.value,
            [70, 80],
            [0, 1],
        )

        return {
            top: -interpolateY,
            transform: [
                {
                    scale: interpolateScale
                }
            ],
            backgroundColor: interpolateColorA,
            borderWidth: props.animatedYValue.value > 70 ? 1 : 0,
            borderColor: theme.colors.borderorangelight
        };
    });


    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Text style={{ color: theme.colors.white, fontFamily: theme.fontHeadings.semibold, fontSize: moderateScale(15) }}>LOCATION</Text>

            <View style={{ flexDirection: "row", marginVertical: 5, alignItems: "center" }}>
                <Utilities.Icons.Entypo name='location' size={15} color={theme.colors.white} />

                <Text style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontRegulars.regular, }}>  San Francisco, CA</Text>
            </View>
        </Animated.View>
    );
};

export default LocationComponent;

const styles = StyleSheet.create({
    container: {
        // width: "90%",
        alignSelf: "flex-start",
        marginVertical: 10,
        position: "absolute",
        height: 70,
        top: 55,
        // borderWidth: 1,
        // borderColor: "white",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginLeft: "4%",
        zIndex: 10000
    }
});
