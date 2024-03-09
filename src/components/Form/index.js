import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';

export default function Form() {
  const [item, setItem] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [items, setItems] = useState([]);

  const addItemToList = () => {
    if (item.trim() !== '' && preco.trim() !== '' && quantidade.trim() !== '') {
      const newItem = {
        key: String(items.length),
        produto: item,
        preco: parseFloat(preco.replace(',','.')),
        quantidade: parseFloat(quantidade.replace(',','.')),
      };
      setItems([...items, newItem]);
      setItem('');
      setPreco('');
      setQuantidade('');
    }
  };

  const calculateTotal = () => {
    let total = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    return total.toFixed(2);
  };

  const removeItem = (key) => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  };

  const renderItem = ({ item }) => {
    const { produto, preco, quantidade } = item;
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{produto}</Text>
        <Text style={styles.itemText}> - Price: $ {preco.toFixed(2)}</Text>
        <Text style={styles.itemText}> - Qnt: {quantidade.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => removeItem(item.key)}>
          <Text style={styles.deleteButton}>remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.productInput]}
          placeholder="Product"
          onChangeText={(text) => setItem(text)}
          value={item}
        />
        <TextInput
          style={[styles.input, styles.priceInput]}
          keyboardType="numeric"
          placeholder="Price"
          onChangeText={(text) => setPreco(text)}
          value={preco}
        />
        <TextInput
          style={[styles.input, styles.quantityInput]}
          keyboardType="numeric"
          placeholder="amount"
          onChangeText={(text) => setQuantidade(text)}
          value={quantidade}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={addItemToList}>
        <Text>Add item</Text>
      </TouchableOpacity>
      <View style={styles.limit}>
      <FlatList 
        style={styles.list}
        data={items}
        renderItem={renderItem}
      />
      </View>
      <TouchableOpacity style={styles.button}
      onPress={() => alert(`Total: $ ${calculateTotal()}`)}
      >
        <Text>Calculate total</Text>
      </TouchableOpacity>
    </View>
  );
}
