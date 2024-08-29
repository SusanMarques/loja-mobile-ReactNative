import { SafeAreaView, StyleSheet, Text, View,  StatusBar, Image, FlatList } from 'react-native';
import { list } from './data';
import { ProductItem } from './components/product-item';
import { Product } from './type/products';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Image
      source={require('./assets/capa.jpg')}
      resizeMode='cover'
      style={styles.banner}
      />
      <View>
  
      <FlatList
      data={list}
      renderItem={({item}:{item:Product}) => (<ProductItem product={item}/> )}
      keyExtractor={item => item.id.toString()}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner:{
   width: 330,
   height: 90
  }
});
