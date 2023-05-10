import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import { misc } from '../../../assets/images'
import Image from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable'
import { Bounceable } from 'rn-bounceable';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated, {
    useAnimatedStyle,
    Extrapolate,
    interpolate,
} from 'react-native-reanimated';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const AnimatedTextBox = Animated.createAnimatedComponent(TextInput);
const AnimatedIconAntDesign = Animated.createAnimatedComponent(AntDesign);
interface HomeHeaderProps {
    heading: string;
    search?: boolean;
    back?: boolean;
    messages?: boolean;
    filters?: boolean;
    editable?: boolean;
    calender?: boolean;
    animatedYValue?: any;
    large?: boolean;
    smallHeader?: boolean;
}

const HomeHeader = (props: HomeHeaderProps) => {

    let animatedStyle = {};
    let animatedStyleTextBox = {};
    let animatedStyleIcon = {};


    if (props.animatedYValue) {
        animatedStyle = useAnimatedStyle(() => {

            const interpolateScale = interpolate(
                props.animatedYValue.value,
                [0, 80],
                [.8, .14],
                Extrapolate.CLAMP
            )

            const interpolateScaleTransform = interpolate(
                props.animatedYValue.value,
                [70, 80],
                [1, 1.3],
                Extrapolate.CLAMP
            )

            const interpolateMoveY = interpolate(
                props.animatedYValue.value,
                [70, 80],
                [0, 10],
                Extrapolate.CLAMP
            )

            const interpolateXAxis = interpolate(
                props.animatedYValue.value,
                [0, 80],
                [0, 3],
                Extrapolate.CLAMP
            )

            return {
                transform: [{ scale: interpolateScaleTransform }],
                width: `${interpolateScale * 100}%`,
                left: `${interpolateXAxis * 100}%`,
                top: interpolateMoveY
            }
        });

        animatedStyleTextBox = useAnimatedStyle(() => {
            const interpolateScale = interpolate(
                props.animatedYValue.value,
                [70, 80],
                [.8, 0],
                Extrapolate.CLAMP
            )
            return {
                width: `${interpolateScale * 100}%`,
            }
        });

        animatedStyleIcon = useAnimatedStyle(() => {
            const interpolateXAxis = interpolate(
                props.animatedYValue.value,
                [70, 80],
                [0, -7],
                Extrapolate.CLAMP
            )
            return {
                left: interpolateXAxis,
            }
        });
    }


    return (
        <View nativeID='header' style={[styles.container_, !props.search ? { height: 30 } : {}, props.large ? { height: 90, backgroundColor: theme.colors.formred, borderBottomStartRadius: 30, borderBottomEndRadius: 30 } : {}, props.smallHeader ? { height: 20 } : {}]}>
            <View style={[styles.searchCon, props.smallHeader ? { height: 20 } : {}]}>
                {props.search &&
                    // autoFocus={props.editable}
                    <Animated.View style={[styles.search, styles.shadow, animatedStyle]}>
                        <AnimatedTextBox style={[styles.searchText, animatedStyleTextBox]} placeholder={'Search'} placeholderTextColor={theme.colors.gray} />
                        <AnimatedIconAntDesign name='search1' color={theme.colors.gray} size={17} style={animatedStyleIcon} />
                    </Animated.View>
                }
            </View>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: theme.colors.formred,
    },
    container_: { height: 0, width: "100%", zIndex: 10000 },
    headercon: { width: "100%", flex: 1, flexDirection: "row", height: 60 },
    headright: { width: 50, justifyContent: "center", alignItems: "center" },
    headbody: { flex: 1, justifyContent: "center", alignItems: "center" },
    headleft: { width: 50, justifyContent: "center", alignItems: "center" },
    heading: { color: theme.colors.white, fontFamily: theme.fontRegulars.semibold, fontSize: 16 },
    searchCon: { width: "100%", height: 30, borderBottomStartRadius: 40, borderBottomEndRadius: 40, backgroundColor: theme.colors.formred, alignItems: "center" },
    search: { justifyContent: "space-between", alignItems: "center", paddingHorizontal: 17, height: 50, width: "80%", backgroundColor: theme.colors.lightgray, borderRadius: 40, flexDirection: "row" },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    searchText: { color: theme.colors.gray, opacity: .6 },
    icon: { width: "43%", height: "43%" },
});
