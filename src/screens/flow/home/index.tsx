import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { screens } from '../..';

import { HomeComponents, Utilities } from '../../../components';
import { useServices } from '../../../services';
import { theme } from '../../../utils/constants';


import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    withDelay,
    Extrapolate,
    interpolate,
} from 'react-native-reanimated';
import { createAnimatableComponent } from 'react-native-animatable';


interface HomePageProps {
    componentId: string
}


const HomePage = (props: HomePageProps) => {
    const { events } = useServices();
    const translationY = useSharedValue(0);


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



    const onMessagesClick = (event: event_type) => {
        switch (event) {
            case "messages":
                screens.push(props.componentId, "Knocks")
                break
        }
    }


    React.useEffect(() => {
        events.registerButtonDelegate("messages", onMessagesClick.bind(null, 'messages'));
        events.registerButtonDelegate("filters", onMessagesClick.bind(null, 'filters'));
    }, [null]);

    return (
        <View style={styles.container}>
            <Utilities.HomeHeader animatedYValue={translationY} search messages filters heading="WHO'S HERE" />
            <HomeComponents.Location animatedYValue={translationY} />

            <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler} contentContainerStyle={{ paddingBottom: 90, paddingTop: 140 }}>
                <React.Suspense fallback={<Text>loading...</Text>}>
                    <Utilities.BigCard />
                </React.Suspense>

                <React.Suspense fallback={<Text>loading...</Text>}>
                    <Utilities.BigCard />
                </React.Suspense>

                <React.Suspense fallback={<Text>loading...</Text>}>
                    <Utilities.BigCard />
                </React.Suspense>
            </Animated.ScrollView>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backdrop,
        width: "100%"
    }
});
