import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { detailedProducts } from '../utils/storeData';

interface Props extends NativeStackScreenProps<any,any>{}

const DetailedProduct = ({route}: Props) => {

    const params = route.params

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
          "Added to cart!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          10,
          50
        );
      };

  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{ uri: `${detailedProducts[params.id].image}` }}
      />
      <Text style={styles.productName}>{detailedProducts[params.id].name}</Text>
      <Text style={styles.productPrice}>${detailedProducts[params.id].unit_price}</Text>
      <Text style={styles.productPrice}>{detailedProducts[params.id].stock} Avaliable</Text>
      <Text style={styles.productDescription}>
        {detailedProducts[params.id].description}}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showToastWithGravityAndOffset} disabled={detailedProducts[params.id].stock === 0}>
          <Text style={styles.buttonText}>{detailedProducts[params.id].stock === 0 ? 'Out of stock' : 'Add to cart'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#999',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff9900',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailedProduct;
