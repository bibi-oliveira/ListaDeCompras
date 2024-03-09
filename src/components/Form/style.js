import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  
  productInput: {
    marginRight: 5,
  },
  priceInput: {
    marginLeft: 5,
  },
  quantityInput: {
    marginLeft: 5,
  },
  button:{
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#a13854",
    paddingTop: 10,
    paddingBottom: 10,
    margin: 8,
    alignSelf: 'center'
  },
  listItem:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccc'
  },
  list:{
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 270
  },
  deleteButton: {
    color: '#ff7455',
    marginLeft: 10,
  },
})

export default styles