import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { screens } from '../..';
import { FormComponents, ProfileComponents, Utilities } from '../../../components';
import { useServices } from '../../../services';
import { pageConfiguration } from '../../../utils/configurations';
import { theme } from '../../../utils/constants';
import { renderName } from '../../../utils/helpers';

interface ProfilePageProps {
    componentId: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const pageConf: PageConfigurations = pageConfiguration.VIEWPROFILE;
    const { events } = useServices();


    const onSettingClicked = () => {
        screens.push(props.componentId, "EditProfile")
    }

    React.useEffect(() => {
        events.registerButtonDelegate("settings", onSettingClicked.bind(null))
    }, [null]);



    const onFormSubmitted = (form: any) => {
        // TabsApp();
    }


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <Utilities.HomeHeader large heading="USER PROFILE" />
                <View style={{ zIndex: 1000000 }}>
                    <Utilities.Avatar />
                </View>

                <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontHeadings.semibold, alignSelf: "center", fontSize: 25, maxWidth: "50%" }}>{renderName()}</Text>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: theme.colors.white, fontFamily: theme.fontRegulars.medium, alignSelf: "center", fontSize: 13, maxWidth: "50%" }}>{"San Francisco, CA"}</Text>

                <FormComponents.FormBuilder initialValues={["johnsmith@example.com", "lorem ipsum dorat lor ip dorat rem ipsum dorat lorem ipsum dorat lorem ipsum dorat dorat lorem ipsum dorat."]} floating noBorder backgroundColor={"transparent"} viewMode avatar={false} sharedKey={pageConf.key} componentId={props.componentId} secondaryActions={pageConf.secondaryActions} fields={pageConf.fields} heading={pageConf.title} actionText={pageConf.actionText} onFormSubmitted={onFormSubmitted.bind(null)} />

                <ProfileComponents.Attachments />

            </ScrollView>

        </View>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {}
});
