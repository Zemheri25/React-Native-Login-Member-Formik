import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export const Home = ({ navigation }) => {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [mail, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [repassword, setRespassword] = useState("") ;

  useEffect(() => {
    setInputName("");
    setInputSurname("");
    setEmail("")
  }, [])

  const onPress = () => {
    if (!inputName) {
      setErrors((prevState) => {
        return {
          ...prevState,
          nameError: true,
        };
      });
    }
    if (!inputSurname) {
      setErrors((prevState) => {
        return {
          ...prevState,
          surnameError: true,
        };
      });
    }
    if (!mail) {
      setErrors((prevState) => {
        return {
          ...prevState,
          mailError: true,
        };
      });
    }
    if (!password) {
      setErrors((prevState) => {
        return {
          ...prevState,
          passwordError: true,
        };
      });
    }
    if (!repassword) {
      setErrors((prevState) => {
        return {
          ...prevState,
          rePasswordError: true,
        };
      });
    }
    if (password && repassword && repassword !== password) {
      window.alert("The passwords are must be same!");
    } else if (mail && inputSurname && inputName && password && repassword) {
      navigation.navigate("Member", {
        inputName,
        inputSurname,
        mail,
        handleReset
      });
    }
  };

  const handleReset = () => {
    setInputName("");
    setInputSurname("");
    setEmail("");
    setPassword("");
    setRespassword("");
    setErrors({});
  };

  const onChangeText = (e) => {
    setInputName(e);
    if (!e) {
      setErrors({ ...errors, nameError: true });
    } else {
      setErrors({ ...errors, nameError: false });
    }
  };

  const onChangeSurname = (e) => {
    setInputSurname(e);
    if (!e) {
      setErrors({ ...errors, surnameError: true });
    } else {
      setErrors({ ...errors, surnameError: false });
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e);
    if (!e) {
      setErrors({ ...errors, mailError: true });
    } else {
      setErrors({ ...errors, mailError: false });
    }
  };

  const onChangePassword = (e) => {
    setPassword(e);
    if (!e) {
      setErrors({ ...errors, passwordError: true });
    } else {
      setErrors({ ...errors, passwordError: false });
    }
  };

  const onChangeRepassword = (e) => {
    setRespassword(e);
    if (!e) {
      setErrors({ ...errors, rePasswordError: true });
    } else {
      setErrors({ ...errors, rePasswordError: false });
    }
  };

  const ErrorSpan = () => {
    return (
      <View style={styles.errorSpanContainer}>
        <Text style={styles.errorText}>You must fill in this field</Text>
      </View>
    );
  };

  return (
    <View style={styles.contanier}>
      <Text style={styles.header}>Login Page</Text>

      <View>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangeText}
            value={inputName}
            placeholder="Name..."
          />
          {errors.nameError && <ErrorSpan />}
        </View>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangeSurname}
            value={inputSurname}
            placeholder="Surname..."
          />
          {errors.surnameError && <ErrorSpan />}
        </View>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangeEmail}
            value={mail}
            placeholder="Mail..."
          />
          {errors.mailError && <ErrorSpan />}
        </View>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password..."
          />
          {errors.passwordError && <ErrorSpan />}
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            onChangeText={onChangeRepassword}
            value={repassword}
            placeholder="Re-Password..."
          />
          {errors.rePasswordError && <ErrorSpan />}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonReset} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer :{
    gap: 10,
    marginTop: 20
  },
  header: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 20,
    marginBottom: 20,
  },
  contanier: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
  },
  buttonReset: {
    alignItems: "center",
    backgroundColor: "#d02a09",
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0957D0",
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "white",
  },
  inputField: {
    borderColor: "#cfc6cf",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    color: "#544d54",
    height: 36,
    paddingLeft: 10,
  },
  areaInput: {
    marginBottom: 20
  },

  errorSpanContainer: {
    backgroundColor: "#FF0000",
    borderRadius: 2,
    width: 130,
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: "white",
    fontSize: 10,
  },
});
