import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, Platform } from 'react-native';
import { Utilities } from '..';
import { screens } from '../../screens';
import { theme } from '../../utils/constants';
import * as Animatable from 'react-native-animatable'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface BottomTabProps {
    componentId: string;
}

const BottomTab = (props: BottomTabProps) => {
    const [activeTab, setActiveTab] = React.useState(2);
    const [active, setActive] = React.useState(true);


    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardWillHide);

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };

    }, [null]);


    const onKeyboardShow = () => {
        setActive(false);
    }

    const onKeyboardWillHide = () => {
        setActive(true);
    }

    const links = [
        {
            title: "Map",
            icon: (active: boolean) => <Utilities.Icons.MaterialCommunityIcons color={active ? theme.colors.borderorangelight : theme.colors.gray} name='home-map-marker' size={active ? 35 : 30} />,
            key: 'map'
        },
        {
            title: "Users",
            icon: (active: boolean) => <Utilities.Icons.FontAwesome5 color={active ? theme.colors.borderorangelight : theme.colors.gray} name='users' size={active ? 30 : 25} />,
            key: 'users'
        },
        {
            title: "Home",
            icon: (active: boolean) => <Utilities.Icons.MaterialCommunityIcons color={active ? theme.colors.borderorangelight : theme.colors.gray} name='checkbox-multiple-blank' size={active ? 30 : 25} />,
            key: 'Home',
        },
        {
            title: "Emails",
            icon: (active: boolean) => <Utilities.Icons.Ionicons color={active ? theme.colors.borderorangelight : theme.colors.gray} name='mail' size={active ? 30 : 25} />,
            key: 'mails',
        },
        {
            title: "User",
            icon: (active: boolean) => <Utilities.Icons.FontAwesome color={active ? theme.colors.borderorangelight : theme.colors.gray} name='user' size={active ? 30 : 25} />,
            key: 'User'
        }
    ]


    const onTabChange = (index: number) => {
        setActiveTab(index);

        screens.N.mergeOptions('HomeComponent', {
            bottomTabs: {
                currentTabIndex: index
            }
        })
    }

    return (
        <Animatable.View animation={!active ? "slideOutDown" : "slideInUp"} style={styles.container}>
            {links && links.map((link, index) => {
                return (
                    <TouchableOpacity onPress={onTabChange.bind(null, index)} activeOpacity={.9} key={link.key} style={styles.btn}>
                        {link.icon(activeTab === index)}
                    </TouchableOpacity>
                )
            })}
        </Animatable.View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: moderateScale(60),
        bottom: Platform.OS === "android" ? 10 : 25,
        position: "absolute",
        alignSelf: "center",
        borderRadius: 40,
        flexDirection: "row",
        backgroundColor: theme.colors.red,
    },
    btn: { flex: 1, justifyContent: "center", alignItems: "center" }
});
