import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Image from 'react-native-fast-image'
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import { renderImage } from '../../utils/helpers';

interface AvatarProps { }

const Avatar = (props: AvatarProps) => {
    return (
        <Animatable.View delay={300} animation={"bounceIn"} style={styles.avatarCon}>
            <View style={styles.avatarMidCon}>
                <View style={styles.avatar}>
                    <Image resizeMode='cover' style={StyleSheet.absoluteFill} source={{ uri: renderImage() }} />
                </View>
                <TouchableOpacity activeOpacity={.9} style={styles.avatarIconCon}>
                    <Utilities.Icons.Feather name='share' color={theme.colors.black} size={20} />
                </TouchableOpacity>
            </View>
        </Animatable.View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: {

    },
    avatarCon: { justifyContent: "center", alignItems: "center", width: "100%", height: 180, marginTop: -(180 / 2) },
    avatarMidCon: { width: 150, height: 150, justifyContent: "center", alignItems: "center" },
    avatar: { overflow: 'hidden', width: "90%", height: "90%", backgroundColor: "gray", borderRadius: 150, borderWidth: 1, borderColor: theme.colors.borderorange },
    avatarIconCon: { width: 35, height: 35, borderRadius: 25, backgroundColor: theme.colors.borderorangelight, position: "absolute", bottom: 10, right: 10, justifyContent: "center", alignItems: "center" },

});
