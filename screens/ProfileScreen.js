import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Ionicons name="person-circle" size={80} color="#555" />
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.profileName}>Ayana</Text>

        <View style={styles.formContainer}>
          {[
            { label: 'Name', value: 'Ayana' },
            { label: 'Last name', value: '' },
            { label: 'Date of birth', value: '12/28/2000' },
            { label: 'Sex', value: 'Female' },
            { label: 'Phone number', value: '+996 777 777 777' },
            { label: 'Email', value: '' },
            { label: 'Native language', value: 'English' },
          ].map((item, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{item.label}</Text>
              <TextInput
                style={styles.input}
                value={item.value}
                placeholder={item.label}
                editable={true}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  header: {
    backgroundColor: "#3B3B3B",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileImageContainer: {
    alignItems: "flex-start",
    marginTop: 20,
    position: 'relative',
  },
  cameraIcon: {
    position: 'absolute',
    alignItems: "flex-start",
    bottom: 0,
    right: 0,
    backgroundColor: "#FF5A5F",
    borderRadius: 20,
    padding: 5,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "flex-start",
    marginBottom: 15,
  },
  formContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#E5E7EB",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#A00000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
