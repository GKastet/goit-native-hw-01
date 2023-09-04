import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SinglePost from "../components/singlePost/singlePost";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const PostsScreen = () => {
  // const [fotoCoords, setFotoCoords] = useState(null)

  // useEffect(()=>{
  //   if(!fotoCoords)return
  //   const { params: {fotoCoords} } = useRoute();
  //   console.log('123', fotoCoords);
  //   setFotoCoords(fotoCoords)
  // }, [])
  //console.log('fotocoords', fotoCoords);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <View style={styles.imgUserThumb}>
          <Image style={styles.imgUser} />
        </View>
        <View>
          <Text style={styles.userName}>Ivan Mazepa</Text>
          <Text style={styles.userEmail}>test@test.com</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </ScrollView>
      <View style={styles.allPosts}>
        {/* <FlatList>
          </FlatList> */}
        {/* <ScrollView style={{ flex: 1 }}>
          <SinglePost />
          <SinglePost />
        </ScrollView> */}
        {/* <FlatList
          data={courses}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  user: {
    // width: "100%",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  imgUserThumb: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    overflow: "hidden",
  },
  imgUser: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    //borderRadius: 8,
  },
  userName: {
    fontFamily: "Roboto-700",
    fontSize: 13,
    color: "#212121",
    lineHeight: 15.23,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "#212121",
    lineHeight: 12.9,
  },
  allPosts: {},
});
