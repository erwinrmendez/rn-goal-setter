import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoal = (text) => {
    const len = goals.length;
    const nextId = len ? goals[len - 1].id + 1 : 1;

    setGoals((prev) => [...prev, { id: nextId, text }]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const onClose = () => setModalVisible(false);

  return (
    <View style={styles.appContainer}>
      {modalVisible && (
        <GoalInput
          addGoal={addGoal}
          modalVisible={modalVisible}
          closeModal={onClose}
        />
      )}
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setModalVisible(true)}
      />
      <FlatList
        style={styles.goalsContainer}
        data={goals}
        keyExtractor={(item, _) => item.id}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} deleteGoal={deleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 1,
    marginTop: 16,
  },
});
