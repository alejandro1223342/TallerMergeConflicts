import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy Martina</Text>
        <Text style={styles.product1}>Producto 1: Camiseta</Text>
        <Text style={styles.product2}>Producto 2: Pantalón</Text>
        <Text style={styles.product3}>Producto 3: Zapatillas</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('Wellcome_Martina');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    product1: {
        color: 'red', 
        fontSize: 16,
        marginBottom: 10,
    },
    product2: {
        color: 'blue', 
        fontSize: 16,
        marginBottom: 10,
    },
    product3: {
        color: 'green', 
        fontSize: 16,
        marginBottom: 20,
    },
  });