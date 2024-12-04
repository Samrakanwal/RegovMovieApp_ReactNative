import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/userSlice';


const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const { name, email, profileImageUrl } = useSelector((state: any) => state.user);  

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newProfileImageUrl, setNewProfileImageUrl] = useState(profileImageUrl);

  const handleSaveProfile = () => {
    dispatch(updateUserProfile({
      name: newName,
      email: newEmail,
      profileImageUrl: newProfileImageUrl,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.profileImageContainer}>
        {newProfileImageUrl ? (
          <Image
            source={{ uri: newProfileImageUrl }}
            style={styles.profileImage}
          />
        ) : (
          <View style={styles.profileImageFallback}>
            <Text style={styles.profileImageText}>No Image</Text>
          </View>
        )}
        <TouchableOpacity style={styles.changeImageButton}>
          <Text style={styles.changeImageText}>Change Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={newEmail}
          onChangeText={setNewEmail}
        />
      </View>

      <Button title="Save Profile" onPress={handleSaveProfile} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileImageFallback: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: {
    color: '#fff',
    fontSize: 14,
  },
  changeImageButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  changeImageText: {
    color: '#fff',
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default UserProfileScreen;
