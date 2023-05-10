import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { misc } from '../../../assets/images';
import { AuthComponents, FormComponents, Utilities } from '../../components';
import { theme } from '../../utils/constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-paper';
import { pageConfiguration } from '../../utils/configurations';
interface SignupPageProps {
    componentId: string
}

const SignupPage = (props: SignupPageProps) => {
    const pageConf: PageConfigurations = pageConfiguration.SIGNUP;

    const onFormSubmitted = (form: any) => {
        console.log("form has been submitted", form);

    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView >
                <FormComponents.FormBuilder floating avatar sharedKey={pageConf.key} componentId={props.componentId} secondaryActions={pageConf.secondaryActions} fields={pageConf.fields} heading={pageConf.title} actionText={pageConf.actionText} onFormSubmitted={onFormSubmitted.bind(null)} />
            </KeyboardAwareScrollView>
        </View>
    );
};

export default SignupPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backdrop
    },
    btmAction: { marginLeft: -10 },
    labelStyle: { textTransform: "none", fontFamily: theme.fontRegulars.regular }
});
