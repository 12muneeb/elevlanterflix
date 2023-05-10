import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { EventComponents, Utilities } from '../../../components';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { theme } from '../../../utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigationBottomTabSelect, useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist';
import { screens } from '../..';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    withDelay,
    Extrapolate,
    interpolate,
} from 'react-native-reanimated';
import { createAnimatableComponent } from 'react-native-animatable';

const AnimatedButton = createAnimatableComponent(Button);


interface EventsPageProps { componentId: string; }

let OnGoingCarousel: any;
let PastEventsVertical: any;

const EventsPage = (props: EventsPageProps) => {
    const [didPageAppear, setDidpageAppear] = useState(false);
    const translationY = useSharedValue(0);

    useEffect(() => {
        const listener = {
            componentDidAppear: () => {
                if (!OnGoingCarousel || !PastEventsVertical) {
                    OnGoingCarousel = require('../../../components/event/OnGoingCarousel').default;
                    PastEventsVertical = require('../../../components/event/PastEventsVertical').default;
                    setDidpageAppear(true);
                }
            },
            componentDidDisappear: () => {
                console.log('RNN', `componentDidDisappear`);
            }
        };
        // Register the listener to all events related to our component
        const unsubscribe = screens.N.events().registerComponentListener(listener, props.componentId);
        return () => {
            // Make sure to unregister the listener during cleanup
            unsubscribe.remove();
        };
    }, []);


    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            // console.log("oncrdasd");
            translationY.value = event.contentOffset.y;
        },
        onBeginDrag: (e) => {

            //   isScrolling.value = true;
        },
        onEndDrag: (e) => {
            //   isScrolling.value = false;
        },
    });


    const animatedStyle = useAnimatedStyle(() => {
        console.log("tanslationY", translationY.value);

        const interpolateY = interpolate(
            translationY.value,
            [0, 80],
            [-30, 20],
            Extrapolate.CLAMP
        )

        return {
            // transform: [{
            //     translateY: translationY.value
            // }],
            top: -interpolateY,
        };
    });

    return (
        <View style={styles.container}>
            <Utilities.HomeHeader calender heading="EVENTS" />

            <Animated.View style={[styles.animatedButtonCon, theme.colors.shadow, animatedStyle]}>
                <Text style={styles.animBtnTxt}>My Get together</Text>
            </Animated.View>
            <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler} contentContainerStyle={{ paddingBottom: 110, zIndex: 10000, paddingTop: 80 }}>
                {didPageAppear ?
                    <>
                        <OnGoingCarousel />
                        <PastEventsVertical />
                    </>
                    : null}

            </Animated.ScrollView>
            {/* 
            {didPageAppear &&
                <React.Suspense fallback={<Text>Loading</Text>}>
                    <EventComponents.OnGoingCarousel />
                    <EventComponents.PastEventsVertical />
                </React.Suspense>} */}
        </View>
    );
};

export default EventsPage;

const styles = StyleSheet.create({
    container: {},
    animatedButtonCon: { position: "absolute", backgroundColor: theme.colors.lightgray, width: "60%", alignSelf: "center", marginVertical: 20, borderRadius: 50, height: verticalScale(40), justifyContent: "center", zIndex: 10000, alignItems: "center" },
    animBtnTxt: { fontFamily: theme.fontRegulars.regular, textTransform: "none", color: theme.colors.borderorangelight, fontSize: moderateScale(15) }
});
