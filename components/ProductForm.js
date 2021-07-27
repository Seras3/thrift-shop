import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProductToShop, editProductFromShop } from '../store/actions/shop';
import { defaultStyles } from '../constants/default-styles';
import _ from 'lodash';

import { Formik } from 'formik';
import * as Yup from 'yup';


const ProductForm = ({ product, navigation }) => {
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const isEdit = product ? true : false;


  let priceInputStyle = { borderColor: colors.primary, flex: 2, textAlign: 'right' };

  if (isEdit) {
    priceInputStyle = StyleSheet.compose(priceInputStyle, defaultStyles.disableInputStyle);
  }

  return (
    <Formik
      initialValues={{
        title: product ? product.title : '',
        price: product ? product.price : '',
        description: product ? product.description : '',
        imageUrl: product ? product.imageUrl : ''
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        price: Yup.number().required('Required').typeError('Enter a number'),
        description: Yup.string().min(5, 'Minimum 5 characters.'),
        imageUrl: Yup.string().url("Invalid url")
      })}
    >
      {props => {

        const { title, price, description, imageUrl } = props.values;

        const handleSubmit = useCallback(async () => {
          try {
            const errors = await props.validateForm();

            const isValidForm = _.isEmpty(errors);

            if (isValidForm) {

              if (isEdit) {
                dispatch(editProductFromShop({ ...product, title, price, description, imageUrl }));
              } else {
                dispatch(addProductToShop({ title, price, description, imageUrl }));
              }
              navigation.navigate('ManageProducts');
            }
          } catch (err) {
            console.log("INVALID INPUT")
            Alert.alert("Invalid input", "Review the input please :D");
          }
        }, [title, price, description, imageUrl]);

        useEffect(() => {
          navigation.setParams({ handleSubmit });
        }, [handleSubmit]);

        return (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>
                Title :
              </Text>
              <TextInput
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
                autoFocus
                placeholder="Product name"
                style={StyleSheet.compose(styles.input, { borderColor: colors.primary })}
              />
              {props.touched.title && props.errors.title ? (
                <Text style={styles.error}>{props.errors.title}</Text>
              ) : null}
            </View>
            <View style={StyleSheet.compose(styles.inputContainer, styles.inputContainerRow)}>
              <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary, flex: 1 })}>Price :</Text>
              <TextInput
                onChangeText={props.handleChange('price')}
                onBlur={props.handleBlur('price')}
                value={props.values.price}
                placeholder="19.99"
                style={StyleSheet.compose(styles.input, priceInputStyle)}
                editable={!isEdit}
                selectTextOnFocus={!isEdit}
                keyboardType="numeric"
              />
              <Text style={StyleSheet.compose(styles.dollar, { color: colors.primary })}>$</Text>
            </View>
            {props.touched.price && props.errors.price ? (
              <Text style={styles.error}>{props.errors.price}</Text>
            ) : null}
            <View style={styles.inputContainer}>
              <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>Description :</Text>
              <TextInput
                onChangeText={props.handleChange('description')}
                onBlur={props.handleBlur('description')}
                value={props.values.description}
                placeholder='Product description'
                style={StyleSheet.compose(styles.input, { borderColor: colors.primary })}
                multiline
                numberOfLines={3}
              />
              {props.touched.description && props.errors.description ? (
                <Text style={styles.error}>{props.errors.description}</Text>
              ) : null}
            </View>
            <View style={styles.inputContainer}>
              <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>Image URL :</Text>
              <TextInput
                onChangeText={props.handleChange('imageUrl')}
                onBlur={props.handleBlur('imageUrl')}
                value={props.values.imageUrl}
                style={StyleSheet.compose(styles.input, { borderColor: colors.primary })}
                keyboardType="url"
                placeholder="Image address"
              />
              {props.touched.imageUrl && props.errors.imageUrl ? (
                <Text style={styles.error}>{props.errors.imageUrl}</Text>
              ) : null}
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  inputContainer: {
    marginVertical: 20,
  },
  inputContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    flex: 1
  },
  dollar: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 5
  },
  input: {
    marginTop: 10,
    width: '100%',
    fontSize: 19,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
    paddingTop: 5,
    paddingBottom: 2,
    paddingHorizontal: 5
  },
  error: {
    color: 'red'
  }
});
