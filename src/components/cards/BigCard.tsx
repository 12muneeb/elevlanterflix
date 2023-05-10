import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../../utils/constants';
import Image from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient';
import { Utilities } from '..';
import { misc } from '../../../assets/images'
import { Bounceable } from 'rn-bounceable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { renderImage } from '../../utils/helpers';

interface BigUserCardProps { }

const BigUserCard = (props: BigUserCardProps) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: "100%", height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20, position: "absolute" }} resizeMode="cover" source={{ uri: renderImage() }} />
                <View style={{ width: "100%", height: "100%", justifyContent: "flex-end", alignItems: "center" }}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)']} style={{ position: "absolute", width: "100%", height: "100%" }} />
                    <Text style={{ color: theme.colors.white, fontSize: moderateScale(20), fontFamily: theme.fontHeadings.semibold }}>JOE</Text>


                    <Text style={{ color: theme.colors.white, fontSize: moderateScale(11), fontFamily: theme.fontRegulars.regular, textAlign: "center", marginBottom: 20, width: "90%" }}>Lorem ipsum dorat Lorem ipsum dorat  Lorem ipsum dorat, Lorem ipsum dorat Lorem ipsum doratLorem ipsum dorat , ipsum doratLorem ipsum dorat.</Text>

                </View>

            </View>
            <LinearGradient colors={['#282828', '#242424', '#242424', '#242424']} style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", height: 80, borderBottomEndRadius: 20, borderBottomStartRadius: 20, backgroundColor: theme.colors.lightgray }}>
                <Bounceable activeScale={.8} contentContainerStyle={{ width: 60, height: 60, marginHorizontal: 20, borderRadius: 100, backgroundColor: theme.colors.lightgray, justifyContent: "center", alignItems: "center" }}>
                    <Utilities.Icons.AntDesign name='close' color={theme.colors.gray} size={25} />
                </Bounceable>
                <Bounceable activeScale={.8} contentContainerStyle={{ width: 60, height: 60, marginHorizontal: 20, borderRadius: 100, backgroundColor: theme.colors.formred, justifyContent: "center", alignItems: "center" }}>
                    <Image resizeMode='contain' source={misc.Fist} style={{ width: 40, height: 40, transform: [{ scaleX: -1 }] }} />
                </Bounceable>

            </LinearGradient>
        </View>
    );
};

export default BigUserCard;

const styles = StyleSheet.create({
    container: {
        width: "92%",
        alignSelf: "center",
        height: moderateScale(350),
        overflow: "hidden",
        // borderWidth: 1,
        // borderColor: "white",
        borderRadius: 40,
        marginVertical: 10,
        backgroundColor: theme.colors.backdrop,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});
