// import React, {useEffect} from 'react';
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
// import apiResquest from '../api/storeApi';
import { storeData } from '../utils/storeData';
import { useNavigation } from '@react-navigation/native';

const StoreScreen = () => {

    // useEffect(() => {
    //     apiResquest.get('/storeData').then(response => console.log(response));
    // }, []);

    const navigation = useNavigation();

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
      <Text style={styles.header}>Bricks Catalogue</Text>
      <ScrollView style={styles.scrollView}>
        {storeData.map((data)=> {
            return (
                <View key={data?.id} style={styles.product} >
                    <TouchableOpacity onPress={() => navigation.navigate('DetailedProduct', {id: data.id - 1})}>
                        <Image
                            style={styles.productImage}
                            source={{ uri: `${data.image}` }}
                        />
                    </TouchableOpacity>
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>{data.name}</Text>
                        <Text style={styles.productPrice}>{data.unit_price}</Text>
                        <TouchableOpacity style={styles.addToCartButton} onPress={showToastWithGravityAndOffset}>
                            <Text style={{...styles.addToCartText, color: data.stock === 0 && '#999'}} disabled={data.stock === 0} >{data.stock === 0 ? 'Out of stock' : 'Add to cart'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff9900',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#999',
  },
  productDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#ff9900',
    marginTop: 20,
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default StoreScreen;
