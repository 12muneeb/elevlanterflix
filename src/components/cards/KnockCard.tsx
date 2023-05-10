import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image'
import { Bounceable } from 'rn-bounceable';
import { misc } from '../../../assets/images';
import { theme } from '../../utils/constants';
import { renderImage, renderName } from '../../utils/helpers';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface KnockCardProps { }

const KnockCard = (props: KnockCardProps) => {
    return (
        <View style={{ width: "92%", alignSelf: "center", height: verticalScale(70), backgroundColor: theme.colors.lightgray, borderRadius: 20, marginVertical: 5, flexDirection: "row", paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ width: 50, height: 50, backgroundColor: "white", borderRadius: 25, borderWidth: 1, borderColor: theme.colors.borderorangelight, overflow: 'hidden', }}>
                <Image resizeMode='cover' source={{ uri: renderImage() }} style={{ width: "100%", height: "100%" }} />

            </View>

            <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontHeadings.medium, marginLeft: 15, maxWidth: "25%" }}>{renderName().split(' ').shift()} </Text>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ marginTop: 3, color: theme.colors.white, fontFamily: theme.fontRegulars.medium, maxWidth: "68%" }}> accepted your request!</Text>
            </View>


            <Bounceable activeScale={.9} contentContainerStyle={{ width: 50, height: 50, backgroundColor: theme.colors.backdrop, borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                <Image resizeMode='contain' source={misc.Fist} style={{ width: "70%", height: "70%", transform: [{ rotate: '-30deg' }] }} />
            </Bounceable>

        </View>
    );
};

export default KnockCard;

const styles = StyleSheet.create({
    container: {}
});
