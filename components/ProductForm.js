import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProductToShop, editProductFromShop } from '../store/actions/shop';

const ProductForm = ({ product, navigation }) => {
  const { colors } = useTheme();


  const [title, setTitle] = useState(product ? product.title : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : '');

  const dispatch = useDispatch();
  const isEdit = product ? true : false;

  const handleSubmit = () => {
    if (isEdit) {
      dispatch(editProductFromShop({ ...product, title, price, description, imageUrl }));
    } else {
      dispatch(addProductToShop({ title, price, description, imageUrl }));
    }
  }

  useEffect(() => {
    navigation.setParams({ handleSubmit });
  }, [title, price, description, imageUrl])

  const disableInputStyle = {
    color: 'grey',
    borderColor: 'grey',
  }

  let priceInputStyle = { borderColor: colors.primary, flex: 2, textAlign: 'right' };

  if (isEdit) {
    priceInputStyle = StyleSheet.compose(priceInputStyle, disableInputStyle);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>Title :</Text>
        <TextInput
          style={StyleSheet.compose(styles.input, { borderColor: colors.primary })}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={StyleSheet.compose(styles.inputContainer, styles.inputContainerRow)}>
        <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary, flex: 1 })}>Price :</Text>
        <TextInput
          style={StyleSheet.compose(styles.input, priceInputStyle)}
          value={price}
          editable={!isEdit}
          selectTextOnFocus={!isEdit}
          keyboardType="numeric"
          onChangeText={setPrice}
        />
        <Text style={StyleSheet.compose(styles.dollar, { color: colors.primary })}>$</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>Description :</Text>
        <TextInput
          style={StyleSheet.compose(styles.input, { borderColor: colors.primary, height: 100 })}
          value={description}
          multiline
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={StyleSheet.compose(styles.label, { textDecorationColor: colors.primary })}>Image URL :</Text>
        <TextInput
          style={StyleSheet.compose(styles.input, { borderColor: colors.primary })}
          value={imageUrl}
          keyboardType="url"
          onChangeText={setImageUrl}
        />
      </View>
    </View>
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
  }
});
