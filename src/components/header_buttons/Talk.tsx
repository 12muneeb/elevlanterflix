import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Image from 'react-native-fast-image'
import { Bounceable } from 'rn-bounceable';
import { misc } from '../../../assets/images';
import { useServices } from '../../services';

interface TalkButtonProps {
    id: event_type;
}
const TalkButton = (props: TalkButtonProps) => {
    const { events } = useServices();
    const onPressButton = () => {
        // console.log("talk button has this", props);
        events.triggerButtonClick(props.id);
    }


    let image;

    switch (props.id) {
        case "messages":
            image = misc.Talk;
            break;
        case "filters":
            image = misc.Filter;
            break;
        case "calender":
            image = misc.Calender;
            break;
        case "settings":
            image = misc.Settings
            break;
        default:

            break;
    }

    return (
        <TouchableOpacity onPress={onPressButton.bind(null)} activeOpacity={.7} style={styles.btnContainer}>
            <Image resizeMode='contain' source={image} style={{ width: 22, height: 22 }} />
        </TouchableOpacity>
    );
};

export default TalkButton;

const styles = StyleSheet.create({
    container: {},
    btnContainer: {
        paddingRight: 8,
        zIndex: 10,
        width: 45,
        height: 25,
        paddingHorizontal: 10,
        elevation: 1000,
        paddingTop: Platform.OS === "ios" ? 0 : 10
    },
});
