import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { misc } from '../../../assets/images';
import Image from 'react-native-fast-image'
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import { screens } from '../../screens';


interface LogoAndFistProps {
  height: number;
  fistH: number;
  sharedKey: string;
  back?: boolean;
  componentId: string;
}

const LogoAndFist = (props: LogoAndFistProps) => {

  const onGoBack = () => {
    screens.pop(props.componentId)
  }


  return (
    <View nativeID={props.sharedKey + 'punch'} style={styles(props).container}>
      <Image resizeMode='contain' source={misc.Logo} style={styles(props).logo} />
      <Image resizeMode='contain' source={misc.Fist} style={styles(props).fist} />
      {props.back && <Utilities.Icons.Ionicons onPress={onGoBack.bind(null)} name='chevron-back' color={theme.colors.white} size={25} style={{ position: "absolute", top: 20, left: 10, zIndex: 100 }} />}
    </View>
  );
};

export default LogoAndFist;

export const styles = (props: any) => StyleSheet.create({
  logo: {
    width: "100%",
    height: props.height
  },
  fist: {
    height: props.fistH,
    alignSelf: "center",
    width: 120,
    marginTop: -10
  },
  container: {
    width: "100%"
  }
});
