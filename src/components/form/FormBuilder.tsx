import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../../utils/constants';
import FieldComponent from './Field';
import { Formik, FormikProps } from 'formik';
import { Utilities } from '..';
import { getInitialValues, getValidationScheema, renderImage } from '../../utils/helpers';
import { screens } from '../../screens';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { pageConfiguration } from '../../utils/configurations';
import Image from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable'
import { faker } from '@faker-js/faker';
interface FormBuilderProps {
  heading: string;
  actionText: string;
  fields: Field[];
  secondaryActions: Actions[] | undefined;
  onFormSubmitted: (form: any) => void;
  componentId: string;
  sharedKey: string;
  avatar?: boolean;
  floating?: boolean;
  viewMode?: boolean;
  backgroundColor?: string;
  noBorder?: boolean;
  initialValues?: string[];
  floatingNoTopSpace?: boolean;
}

const FormBuilder = (props: FormBuilderProps) => {

  const formRef = React.useRef<FormikProps<any>>(null);

  const initialValues = getInitialValues(props.fields, props.initialValues ? props.initialValues : ["dummyemail@gmai.com", "qwertyuiop"]);
  const validationScheema = getValidationScheema(props.fields);

  const onPressSubmit = () => {
    formRef.current?.submitForm();
  }

  const onSecondaryOptionClicked = (action: Actions) => {
    switch (action.key) {
      case "forgetpass":
        screens.push(props.componentId, "ForgotPassword", {})
        break;
    }
  }

  const onEvents = React.useCallback((event: string) => {
    props.onFormSubmitted({
      custom_event: "button_click",
      key: event
    })
  }, [null]);


  return (
    <View nativeID={props.sharedKey + 'form'} style={[styles.container, props.avatar ? { marginTop: props.floatingNoTopSpace ? 60 : 150 } : {}, props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}, props.noBorder ? { borderWidth: 0 } : {}, props.viewMode ? { marginVertical: 10, paddingVertical: 0 } : {}]}>
      {!props.viewMode && !props.avatar && props.heading && <Text style={styles.heading}>{props.heading}</Text>}



      {props.avatar &&
        <Utilities.Avatar />
      }


      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={validationScheema}
        onSubmit={props.onFormSubmitted && props.onFormSubmitted.bind(null)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {props.fields && props.fields.map((field, index) => {
              return (
                <FieldComponent onEvents={onEvents} floating={props.floating} handleChange={handleChange} touched={touched[field.key]} error={errors[field.key]} value={values[field.key]} key={field.key} field={field} />
              )
            })}

            {props.secondaryActions && props.secondaryActions.map((btn: Actions, indx: any) => {
              return (
                <View key={btn.key} style={styles.seccon}>
                  <Button onPress={onSecondaryOptionClicked.bind(null, btn)} color={theme.colors.white} labelStyle={styles.secondary_action}>{btn.title}</Button>
                </View>
              )
            })}
          </>
        )}
      </Formik>


      {!props.viewMode && props.actionText !== "" && <Utilities.ButtonGradient onPress={onPressSubmit} actionText={props.actionText} />}

    </View>
  );
};

export default FormBuilder;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: theme.colors.formred,
    alignSelf: "center",
    marginVertical: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.borderorange,
    paddingVertical: 20
  },
  heading: {
    color: theme.colors.white,
    fontFamily: theme.fontHeadings.semibold,
    fontSize: 22,
    marginVertical: 6
  },
  secondary_action: { fontSize: 11, fontFamily: theme.fontRegulars.medium, textDecorationLine: "underline", fontStyle: "normal", textTransform: "none" },
  linearGradient: {
    width: "90%",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: theme.colors.black,
    fontFamily: theme.fontHeadings.semibold,
  },
  seccon: { width: "94%", justifyContent: "flex-end", alignItems: "flex-end", marginVertical: 3 },
  avatarCon: { justifyContent: "center", alignItems: "center", width: "100%", height: 180, marginTop: -(180 / 2) },
  avatarMidCon: { width: 150, height: 150, justifyContent: "center", alignItems: "center" },
  avatar: { overflow: 'hidden', width: "90%", height: "90%", backgroundColor: "gray", borderRadius: 150, borderWidth: 1, borderColor: theme.colors.borderorange },
  avatarIconCon: { width: 35, height: 35, borderRadius: 25, backgroundColor: theme.colors.borderorangelight, position: "absolute", bottom: 10, right: 10, justifyContent: "center", alignItems: "center" },
});
