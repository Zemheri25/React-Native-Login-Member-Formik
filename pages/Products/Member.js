import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Member = ({ route, navigation }) => {
  const InfoRow = ({ title, value }) => {
    return (
      <View style={styles.infoMessagecontainer}>
        <Text>{title} :</Text>
        <Text>{value}</Text>
      </View>
    );
  };

  const onPress = () => {
    route.params.handleReset()
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text>Member</Text>
      <InfoRow title={"Name"} value={route.params.inputName} />
      <InfoRow title={"Surname"} value={route.params.inputSurname} />
      <InfoRow title={"Mail"} value={route.params.mail} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0957D0",
    padding: 10,
    width: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  infoMessagecontainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#adabb3",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
  },
});
