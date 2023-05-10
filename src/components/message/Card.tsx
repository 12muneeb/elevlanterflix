// import { faker } from '@faker-js/faker';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { renderImage, renderName, renderParagraphs, renderTimeNames } from '../../utils/helpers';
import { Bounceable } from 'rn-bounceable';
import { screens } from '../../screens';

interface MessageCardProps {
    componentId: string;
}

const MessageCard = (props: MessageCardProps) => {

    const onPressMessage = () => {
        screens.push(props.componentId, "MessageThread")
    }


    return (
        <Bounceable onPress={onPressMessage.bind(null)} activeScale={.98} contentContainerStyle={[styles.container, theme.colors.shadow]}>
            <View style={{ width: 50, alignItems: "center", paddingTop: 15 }}>
                <View style={[{ width: 40, height: 40, borderRadius: 30, borderColor: theme.colors.borderorangelight, marginLeft: 15, borderWidth: 1, backgroundColor: theme.colors.lightgray, overflow: 'hidden', }, theme.colors.shadow]}>
                    <Image resizeMode='contain' style={StyleSheet.absoluteFill} source={{ uri: renderImage() }} />
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20, }}>
                <View style={{ flexDirection: "row", paddingTop: 11, justifyContent: "space-between", alignItems: "flex-end" }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: theme.fontRegulars.semibold, fontSize: moderateScale(18), color: theme.colors.borderorangelight, maxWidth: "70%" }}>{renderName()}</Text>
                    <Text style={{ fontFamily: theme.fontRegulars.regular, fontSize: moderateScale(10), color: theme.colors.gray, marginBottom: 5 }}>{renderTimeNames()}</Text>

                </View>

                <Text numberOfLines={3} style={{ fontFamily: theme.fontRegulars.regular, fontSize: moderateScale(11, 1), color: theme.colors.gray, marginBottom: 5 }}>{renderParagraphs()}</Text>

            </View>
        </Bounceable>
    );
};

export default MessageCard;

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: theme.colors.lightgray,
        width: "90%",
        alignSelf: "center",
        marginVertical: 5,
        borderRadius: 20,
        overflow: "hidden",
        flexDirection: "row"
    }
});
