import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Utilities } from '..';
import { theme } from '../../utils/constants';
import Popover from 'react-native-popover-view';
import TextInputMask from 'react-native-masked-input'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import ButtonGradient from '../buttons/ButtonGradient';
import OtpInputs from 'react-native-otp-inputs';

interface FieldComponentProps {
  field: Field;
  value: any;
  handleChange: any;
  touched: boolean | undefined | FieldComponentProps;
  error: string | undefined;
  floating?: boolean;
  onEvents: any;
}

const FieldComponent = (props: FieldComponentProps) => {
  const popoverRef = React.useRef();
  const [secure, setSecure] = React.useState(props.field.secure);
  const [showPopover, setShowPopover] = React.useState(true);
  const onChangeSecure = () => {
    setSecure(!secure);
  }

  console.log(props.value);

  const onPopOverClose = () => {
    setShowPopover(false)
  }


  if (props.field.type === "button_gradient") {
    return (
      <ButtonGradient fontColor={props.field.fontColor} icon={props.field.icon} gradient={props.field.gadients} onPress={props.onEvents.bind(null, props.field.key)} actionText={props.field.placeHolder} />
    )
  }


  return (
    <React.Fragment>
      <View style={[styles(props).container, props.field.backgroundColor ? { backgroundColor: props.field.backgroundColor } : {}, props.field.borderColor ? { borderColor: props.field.borderColor } : {}, props.field.borderRadius ? { borderRadius: props.field.borderRadius } : {}, !props.field.multiline ? { height: props.floating ? 60 : 55 } : {}]}>
        {props.field.type === "otp" ? null : <View style={styles(props).left}>
          {props.field.icon()}
        </View>}
        <View style={styles(props).right}>
          {props.floating &&
            <Text style={{ color: theme.colors.borderorangelight, fontSize: moderateScale(11), marginBottom: -5, marginTop: 3, marginLeft: 4 }}>{props.field.floating}</Text>
          }

          {props.field.type === "otp" ?
            <OtpInputs
              handleChange={(code) => console.log(code)}
              numberOfInputs={6}
              autofillFromClipboard={false}
              placeholder={props.field.placeHolder}
              placeholderTextColor={theme.colors.gray}
              inputContainerStyles={styles(props).otpInputContainer}
              textAlign="center"
              textAlignVertical="center"
              inputStyles={styles(props).otpInputStyle}
            />
            : props.field.masked ?
              <TextInputMask
                type={'custom'}
                options={
                  {
                    mask: props.field.mask
                  }
                }
                value={props.value}
                defaultValue={props.value}
                onChangeText={props.handleChange(props.field.key)}
                placeholderTextColor={theme.colors.gray}
                placeholder={props.field.placeHolder}
                style={[styles({ ...props, secure }).field, props.floating ? styles(props).floating : {}]}
              /> :
              <TextInput editable={props.field.disabled ? false : true} multiline={props.field.multiline} value={props.value} defaultValue={props.value} onChangeText={props.handleChange(props.field.key)} secureTextEntry={secure} placeholderTextColor={theme.colors.gray} placeholder={props.field.placeHolder} style={[styles({ ...props, secure }).field, props.floating && styles(props).floating]} />}
        </View>
        {props.field.secure && <View style={[styles(props).left, styles(props).end]}>
          {props.field.secure &&
            <Utilities.Icons.Entypo onPress={onChangeSecure.bind(null)} name={secure ? 'eye-with-line' : 'eye'} size={25} color={theme.colors.borderorangelight} />
          }
        </View>}

        {props.touched && props.error &&
          <TouchableOpacity ref={popoverRef} onPress={() => setShowPopover(true)} activeOpacity={.7} style={{ width: 22, height: 22, borderRadius: 20, backgroundColor: theme.colors.borderorange, position: "absolute", right: props.field.secure ? 58 : 20, top: 15, justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
            <Utilities.Icons.FontAwesome name={"exclamation"} size={15} color={theme.colors.white} />
          </TouchableOpacity>
        }

        {props.touched && props.error &&
          <Popover popoverStyle={{ backgroundColor: theme.colors.borderorange, width: 300, padding: 10 }} from={popoverRef} offset={25} placement="bottom" isVisible={showPopover} onRequestClose={onPopOverClose.bind(null)}>
            <Text style={{ color: theme.colors.white, textAlign: "center", fontFamily: theme.fontRegulars.regular }}>{props.field.error}</Text>
          </Popover>
        }



      </View>
      {props.field.type === "otp" &&
        <Utilities.CountDownTimer />
      }
    </React.Fragment>
  );
};

export default FieldComponent;


export const styles = (props: any) => StyleSheet.create({
  container: {
    // height: props.field.multiline ? 200 : props.floating ? 60 : 55,
    width: "90%",
    borderRadius: 50,
    borderColor: props.field.type === "otp" ? "transparent" : theme.colors.borderorangelight,
    borderWidth: 1,
    marginVertical: 7,
    flexDirection: "row"
  },
  left: {
    width: 45,
    // justifyContent: props.field.multiline ? "flex-start" : "center",
    alignItems: "flex-end",
    paddingRight: 10,
    paddingTop: 13
  },
  right: {
    flex: 1,
    paddingVertical: props.floating ? 5 : 0,
    overflow: "hidden"
  },
  field: {
    width: "90%",
    // borderWidth: 1,
    // height: "90%",
    color: theme.colors.white,
    fontFamily: theme.fontRegulars.regular,
    fontSize: moderateScale(14),
    // overflow: "hidden",
    // borderWidth: 1,
    // marginTop: 3,
    paddingTop: props.floating ? 7 : 11.5,
    // justifyContent: "flex-start",
    // zIndex: 1000
  },
  end: {
    width: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  floating: { paddingBottom: props.floating ? 20 : 0 },


  // otp styling
  otpInputContainer: {
    borderRadius: scale(50),
    borderColor: theme.colors.borderorangelight,
    borderWidth: 1,
    width: scale(43),
    height: scale(43),
    justifyContent: "center",
    alignItems: "center",
  },
  otpInputStyle: {
    color: theme.colors.white,
    fontFamily: theme.fontRegulars.medium,
  },

});
