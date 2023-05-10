import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import { MessageComponents, Utilities } from '../../../components';
import { theme } from '../../../utils/constants';


const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};

let containerCount = 0;

let { width } = Dimensions.get("window");

let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
});


let _layoutProvider = new LayoutProvider(
    index => {
        // if (index % 3 === 0) {
        return ViewTypes.FULL;
        // } else if (index % 3 === 1) {
        // return ViewTypes.HALF_LEFT;
        // } else {
        // return ViewTypes.HALF_RIGHT;
        // }
    },
    (type, dim) => {
        switch (type) {
            case ViewTypes.HALF_LEFT:
                dim.width = width / 2;
                dim.height = 160;
                break;
            case ViewTypes.HALF_RIGHT:
                dim.width = width / 2;
                dim.height = 160;
                break;
            case ViewTypes.FULL:
                dim.width = width;
                dim.height = 140;
                break;
            default:
                dim.width = 0;
                dim.height = 0;
        }
    }
);

interface MessageThreadProps { }

const MessageThread = (props: MessageThreadProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}>MessageThread</Text>
        </View>
    );
};


const thread_styles = StyleSheet.create({
    container: {}
});


interface MessageThreadViewProps { }

const MessageThreadView = (props: MessageThreadViewProps) => {

    const _generateArray = (n: number) => {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }



    //Given type and data return the view component
    const _rowRenderer = (type: any, data: any) => {
        if (data.timestamp) {
            return (
                <View style={{
                    height: 40, width: "100%", transform: [{
                        scaleY: -1
                    }],
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 5
                }}>
                    <Text style={{ color: theme.colors.borderorangelight, fontFamily: theme.fontHeadings.medium, fontSize: 13 }}>{data.message}</Text>
                </View>
            )
        }


        return (
            <MessageComponents.ThreadCard message={data.message} me={data.me} />
        )

    }

    const _dataProvider = dataProvider.cloneWithRows([
        {
            message: "Lorem ipsum dolor sit amet",
            me: true,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: true,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: true,
            timestamp: false
        },
        {
            message: "Monday, 10:40 am",
            me: false,
            timestamp: true
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet",
            me: true,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: true,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: true,
            timestamp: false
        },
        {
            message: "Monday, 10:40 am",
            me: false,
            timestamp: true
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        },
        {
            message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            me: false,
            timestamp: false
        }
    ])


    return (
        <React.Fragment>
            <Utilities.HomeHeader smallHeader heading="WHO'S HERE" />

            <RecyclerListView forceNonDeterministicRendering contentContainerStyle={styles.contentContainerStyle} style={styles.listStyle} layoutProvider={_layoutProvider} dataProvider={_dataProvider} rowRenderer={_rowRenderer} />
        </React.Fragment>
    );
};

export default MessageThreadView;

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#00a1f1",
        transform: [{
            scaleY: -1
        }]
    },
    containerGridLeft: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffbb00",
        transform: [{
            scaleY: -1
        }]
    },
    containerGridRight: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#7cbb00",
        transform: [{
            scaleY: -1
        }]
    },
    listStyle: {
        transform: [{
            scaleY: -1
        }]
    },
    contentContainerStyle: {
        paddingTop: 80,
        paddingBottom: 20
    }
});
