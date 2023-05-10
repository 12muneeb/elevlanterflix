import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { screens } from '../..';
import { Utilities } from '../../../components';

interface MessagePageProps {
    componentId: string;
}
let MessageCard: any;

const MessagePage = (props: MessagePageProps) => {
    const [didPageAppear, setDidpageAppear] = useState(false);

    useEffect(() => {
        const listener = {
            componentDidAppear: () => {
                if (!MessageCard) {
                    MessageCard = require('../../../components/message/Card').default;
                    setDidpageAppear(true);
                }
            },
            componentDidDisappear: () => {
                console.log('RNN', `componentDidDisappear`);
            }
        };
        // Register the listener to all events related to our component
        const unsubscribe = screens.N.events().registerComponentListener(listener, props.componentId);
        return () => {
            // Make sure to unregister the listener during cleanup
            unsubscribe.remove();
        };
    }, []);


    return (
        <View style={styles.container}>
            <Utilities.HomeHeader heading="MESSAGES" />

            {didPageAppear ?
                <ScrollView contentContainerStyle={{ paddingTop: 10, paddingBottom: 100 }}>
                    <MessageCard componentId={props.componentId} />

                </ScrollView> : null}

        </View>
    );
};

export default MessagePage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
