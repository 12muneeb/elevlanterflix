import * as React from 'react';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { misc } from '../../../assets/images';
import { theme } from '../../utils/constants';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface CountDownTimerProps { }

const CountDownTimer = (props: CountDownTimerProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={misc.TimeForward} style={styles.icon} />
            </View>
            <View>
                <CountDown
                    until={0 + 30}
                    showSeparator
                    separatorStyle={styles.separatorStyle}
                    size={15}
                    onFinish={() => Alert.alert('Finished')}
                    digitStyle={styles.digitStyle}
                    digitTxtStyle={styles.digitText}
                    timeToShow={['M', 'S']}
                    timeLabels={{ m: 'MM', s: 'SS' }}
                />
            </View>
        </View>
    );
};

export default CountDownTimer;

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: -10
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: "center"
    },
    digitStyle: {
        marginHorizontal: 0
    },
    digitText: { color: theme.colors.borderorangelight, fontFamily: theme.fontRegulars.medium, fontSize: moderateScale(15) },
    separatorStyle: { color: theme.colors.borderorangelight, fontFamily: theme.fontRegulars.medium, fontSize: moderateScale(15), marginTop: -20 }
});
