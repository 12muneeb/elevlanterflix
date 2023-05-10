import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import { renderImage } from '../../utils/helpers';
interface ThreadCardProps {
    message: string;
    me: boolean | undefined;
    time?: string;
}

const ThreadCard = (props: ThreadCardProps) => {


    if (props.me) {
        return (
            <View style={[styles.container]}>
                <View style={{ overflow: "hidden", width: 40, height: 40, backgroundColor: theme.colors.lightgray, borderRadius: 40, marginHorizontal: 10, borderWidth: 1, borderColor: theme.colors.borderorangelight }}>
                    <Image resizeMode="cover" source={{ uri: renderImage() }} style={StyleSheet.absoluteFill} />
                </View>
                <View style={{ flex: 1, backgroundColor: theme.colors.lightgray, padding: 15, borderRadius: 20, marginTop: -15, marginLeft: 10 }}>
                    <Text style={{ color: theme.colors.gray, fontFamily: theme.fontRegulars.regular, fontSize: 14, opacity: .8 }}>{props.message}</Text>
                    <Utilities.Icons.AntDesign name='caretleft' size={25} color={theme.colors.lightgray} style={{ left: -15, top: 23, position: "absolute", }} />

                </View>
                <View style={{ width: 80, alignItems: "flex-end", paddingHorizontal: 10, paddingTop: 13 }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.medium, fontSize: 14 }}>{props.time ? props.time : "10:00 pm"}</Text>
                </View>
            </View>
        );
    }


    return (
        <View style={[styles.container]}>
            <View style={{ width: 80, alignItems: "flex-end", paddingHorizontal: 10, paddingTop: 13 }}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.medium, fontSize: 14 }}>{props.time ? props.time : "10:00 pm"}</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: theme.colors.formredlight, padding: 15, borderRadius: 20, marginTop: -15, marginRight: 10 }}>
                <Text style={{ color: theme.colors.gray, fontFamily: theme.fontRegulars.regular, fontSize: 14, opacity: .8 }}>{props.message}</Text>
                <Utilities.Icons.AntDesign name='caretright' size={25} color={theme.colors.formred} style={{ right: -15, top: 23, position: "absolute", }} />

            </View>
            <View style={{ overflow: "hidden", width: 40, height: 40, backgroundColor: theme.colors.lightgray, borderRadius: 40, marginHorizontal: 10, borderWidth: 1, borderColor: theme.colors.borderorangelight }}>
                <Image resizeMode="cover" source={{ uri: renderImage() }} style={StyleSheet.absoluteFill} />
            </View>

        </View>
    );


};

export default ThreadCard;

const styles = StyleSheet.create({
    container: {
        transform: [{
            scaleY: -1
        }],
        flexDirection: "row",
        width: "100%",
        marginVertical: 20
    }
});
