import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How are you?', isUser: false, name: 'John Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '2', text: 'I am good, thanks! How about you?', isUser: true, name: 'User', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: newMessage, isUser: true, name: 'User', image: 'https://example.com/user.jpg' }]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.receivedMessage]}>
      <Image source={{ uri: item.image }} style={styles.contactImage} />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.contactName}>{item.name}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Chat</Text>
      <View style={styles.contactContainer}>
        {contacts.map((contact, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.contact, { backgroundColor: selectedContact?.id === contact.id ? '#ddd' : 'white' }]} 
            onPress={() => setSelectedContact(contact)}
          >
            <Image source={{ uri: contact.image }} style={styles.contactImage} />
            <Text style={styles.contactName}>{contact.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const contacts = [
    { id: '1', name: 'John Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '2', name: 'Jane Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '3', name: 'Jim Smith', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messageList}
        contentContainerStyle={{ paddingBottom: 70 }} // Adjust this value to fit the footer height
        inverted // Invert to show the latest message at the bottom
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder='Type a message...'
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name='send' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginVertical:100,
    height:600

  },
  header: {
    backgroundColor: 'black',
    padding: 16,
    alignItems: 'center',
    marginTop:20
    // Removed marginBottom to avoid pushing the content down
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 16,
    // Removed paddingVertical to use the contentContainerStyle for bottom padding
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'purple',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'purple',
  },
  messageText: {
    color: 'black',
    flex: 1,
    marginLeft: 10,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    width: 118,
  },
  contactName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'black', // Ensures it matches the container
    marginBottom:20



  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft:40,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    height: 60,
    // Set a width that's more reasonable for the input field
    maxWidth: Dimensions.get('window').width - 100, // Adjust based on the footer layout
  },
  sendButton: {
    backgroundColor: 'black',
    marginRight:20,
    borderRadius: 20,
    padding: 10,
  },
});

export default Chat;
