import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import { renderImage } from '../../utils/helpers';
interface MessageCustomTitleProps { }

const MessageCustomTitle = (props: MessageCustomTitleProps) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 50, height: 50, backgroundColor: theme.colors.lightgray, borderRadius: 25, marginBottom: 3, borderWidth: 1, borderColor: theme.colors.borderorangelight, overflow: 'hidden', }}>
                <Image resizeMode='cover' source={{ uri: renderImage() }} style={StyleSheet.absoluteFill} />
            </View>
            <Text style={{ color: theme.colors.gray, fontFamily: theme.fontRegulars.semibold, fontSize: 15 }}>Melissa</Text>
        </View>
    );
};

export default MessageCustomTitle;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: widthPercentageToDP('60%'),
        zIndex: 1000
    }
});
