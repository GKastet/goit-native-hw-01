import { StyleSheet, Text, View } from 'react-native'


const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
    </View>
  )
}

export default CommentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
  },
})