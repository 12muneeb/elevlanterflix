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
interface ResetPasswordPageProps {
    componentId: string;
}

const ResetPasswordPage = (props: ResetPasswordPageProps) => {
    const pageConf: PageConfigurations = pageConfiguration.RESETPASSWORD;

    const onFormSubmitted = (form: any) => {
        console.log("form has been submitted", form);
        TabsApp()
    }

    return (
        <KeyboardAwareScrollView>
            <AuthComponents.LogoAndFist componentId={props.componentId} back sharedKey={pageConf.key} height={200} fistH={80} />
            <FormComponents.FormBuilder floating componentId={props.componentId} sharedKey={pageConf.key} secondaryActions={pageConf.secondaryActions} fields={pageConf.fields} heading={pageConf.title} actionText={pageConf.actionText} onFormSubmitted={onFormSubmitted.bind(null)} />


            {pageConf.bottomActions &&
                <View nativeID='bottom_actions' style={{ width: "100%", height: 45, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.regular }}>Don't have an account?</Text>
                        <Button color={theme.colors.borderorangelight} labelStyle={styles.labelStyle} style={styles.btmAction}>Sign Up</Button>
                    </View>
                </View>}


        </KeyboardAwareScrollView>
    );
};

export default ResetPasswordPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backdrop
    },
    btmAction: { marginLeft: -10 },
    labelStyle: { textTransform: "none", fontFamily: theme.fontRegulars.regular }
});
