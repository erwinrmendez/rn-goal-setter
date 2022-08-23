import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoal, modalVisible, closeModal }) => {
  const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleAdd = () => {
    if (!text) return;

    addGoal(text);
    setText("");
    closeModal();
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal..."
          style={styles.textInput}
          onChangeText={handleInputChange}
          value={text}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={handleAdd} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={closeModal} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    paddingVertical: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    width: "80%",
    justifyContent: "space-around",
  },
  btn: {
    width: "45%",
  },
});

export default GoalInput;
