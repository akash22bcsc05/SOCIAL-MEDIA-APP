import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const notificationsData = [
  { index: '1', title: 'New Message', description: 'You have received a new message from John.' },
  { index: '2', title: 'Update Available', description: 'A new update is available for your app.' },
  { index: '3', title: 'Reminder', description: 'Don’t forget to check your calendar for today’s events.' },
  { index: '4', title: 'Liked', description: '@Ria Liked Your Post' },
  { index: '5', title: 'Comments', description: '@Her commented On your post' },
  { index: '6', title: 'Reminder', description: 'Don’t forget to check your calendar for today’s events.' },
  


  // Add more notifications here
];

const NotificationItem = ({ title, description, onPress }) => (
  <TouchableOpacity style={styles.notificationItem} onPress={onPress}>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
  </TouchableOpacity>
);

const Notifications = () => {
  const handleNotificationPress = (id) => {
    console.log(`Notification ${id} pressed`);
    // Handle notification press (e.g., navigate to a specific screen)
  };

  const renderNotification = ({ item }) => (
    <NotificationItem
      title={item.title}
      description={item.description}
      onPress={() => handleNotificationPress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        /*data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true} // Optional: Hide vertical scroll indicator**/
        keyExtractor={(key)=>{
          return key.index;
        }}
        data={notificationsData}
        renderItem={renderNotification}
        contentContainerStyle={styles.list}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  list: {
    padding: 16,
    margin:20,
    textAlign:'center'
  },
  notificationItem: {
    backgroundColor: 'purple',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  notificationContent: {
    flexDirection: 'column',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
  },
});

export default Notifications;
