import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoal(item.id)}
        android_ripple={{ color: "#210644" }}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressed: {
    borderRadius: 6,
    backgroundColor: "#210644",
  },
});

export default GoalItem;
