import { StyleSheet, Text, View } from 'react-native'


const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
  },
})