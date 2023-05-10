import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../utils/constants';
import { renderImage } from '../../utils/helpers';
import Image from 'react-native-fast-image'
import { Utilities } from '..';
interface AttachmentsProps { }

const Attachments = (props: AttachmentsProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: theme.fontHeadings.semibold, color: theme.colors.white, fontSize: 15 }}>ATTACHMENT</Text>

            <View style={{ height: 110, paddingTop: 10, flexDirection: "row", marginTop: 0 }}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <View style={styles.imageCard}>
                        <Image source={{ uri: renderImage() }} resizeMode="cover" style={{ height: "100%", width: "100%" }} />
                    </View>
                    <View style={styles.imageCard}>
                        <Image source={{ uri: renderImage() }} resizeMode="cover" style={{ height: "100%", width: "100%" }} />
                    </View>
                    <View style={styles.imageCard}>
                        <Image source={{ uri: renderImage() }} resizeMode="cover" style={{ height: "100%", width: "100%" }} />
                    </View>
                    <View style={styles.imageCard}>
                        <Image source={{ uri: renderImage() }} resizeMode="cover" style={{ height: "100%", width: "100%" }} />
                    </View>

                </ScrollView>
                <View style={{ width: 90, height: 90, backgroundColor: theme.colors.lightgray, borderRadius: 10, marginLeft: 5, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: theme.colors.borderorangelight }}>
                    <Utilities.Icons.AntDesign name='upload' size={25} color={theme.colors.borderorangelight} />
                </View>
            </View>
        </View>
    );
};

export default Attachments;

const styles = StyleSheet.create({
    container: {
        width: "80%",
        // borderWidth: 1,
        // borderColor: "white",
        alignSelf: "center"
    },
    imageCard: { width: 90, height: 90, borderRadius: 10, marginRight: 10, overflow: 'hidden', },
});
