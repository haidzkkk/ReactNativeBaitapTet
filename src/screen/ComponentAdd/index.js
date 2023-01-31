import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";



const LayoutAdd = () =>{
    return(
        <View>
        <View style={styles.verticleLine}>
          <TextInput style={styles.textInput} />
          <Button
            title='Hủy'
            onPress={() => setSwitchState(!switchState)}></Button>
        </View>
        <View style={styles.verticleLine}>
          <TextInput style={styles.textInput} />
          <Button
            title='Hủy'
            onPress={() => setSwitchState(!switchState)}></Button>
        </View>

      </View>
    )
};

export default LayoutAdd;

const styles = StyleSheet.create({

    verticleLine: {
      alignItems: 'center',
      flexDirection: 'row',   // nguyên nhân cho component vertical
      justifyContent: 'space-evenly',
      width: '100%',
      marginBottom: 20,
    }
  });
  