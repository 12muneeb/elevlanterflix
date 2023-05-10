import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { misc } from '../../../assets/images';
import { AuthComponents, FormComponents, Utilities } from '../../components';
import { theme } from '../../utils/constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-paper';
import { pageConfiguration } from '../../utils/configurations';
import { screens } from '..';
import { TabsApp } from '../../../App';

interface PreLoginPageProps {
    componentId: string
}
type custom_event = "apple" | "facebook" | "email" | "google"
const PreLoginPage = (props: PreLoginPageProps) => {
    const pageConf: PageConfigurations = pageConfiguration.PRELOGIN;

    const onFormSubmitted = (form: any) => {
        console.log("preform submitted", form);
        if (form.custom_event == "button_click") {
            const custom_event: custom_event = form.key;
            switch (custom_event) {
                case "email":
                    screens.push(props.componentId, "Login")
                    break;
            }
        }

    }

    const onSignupPressed = () => {
        screens.push(props.componentId, "Signup", {}, {
            animations: {
                push: {
                    waitForRender: true,
                    enabled: true,
                    sharedElementTransitions: [
                        {
                            fromId: pageConf.key + 'form',
                            toId: pageConfiguration.SIGNUP.key + 'form',
                        }
                    ]
                },
                pop: {
                    waitForRender: true,
                    enabled: true,
                    sharedElementTransitions: [
                        {
                            fromId: pageConfiguration.SIGNUP.key + 'form',
                            toId: pageConf.key + 'form',
                        }
                    ]
                }
            }
        })
    }

    return (
        <KeyboardAwareScrollView>
            <AuthComponents.LogoAndFist componentId={props.componentId} sharedKey={pageConf.key} height={200} fistH={80} />
            <FormComponents.FormBuilder avatar={false} sharedKey={pageConf.key} componentId={props.componentId} secondaryActions={pageConf.secondaryActions} fields={pageConf.fields} heading={pageConf.title} actionText={pageConf.actionText} onFormSubmitted={onFormSubmitted.bind(null)} />

            {/* position: "absolute", bottom: 20,  */}
            {pageConf.bottomActions &&
                <View style={{ width: "100%", height: 45, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View nativeID='bottom_actions' style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.regular }}>Don't have an account?</Text>
                        <Button onPress={onSignupPressed.bind(null)} color={theme.colors.borderorangelight} labelStyle={styles.labelStyle} style={styles.btmAction}>Sign Up</Button>
                    </View>
                </View>
            }


        </KeyboardAwareScrollView>
    );
};

export default PreLoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backdrop

    },
    btmAction: { marginLeft: -10 },
    labelStyle: { textTransform: "none", fontFamily: theme.fontRegulars.regular }
});
