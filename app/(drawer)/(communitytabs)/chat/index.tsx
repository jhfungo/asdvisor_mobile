import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import ContactCard from '~/components/community/ContactCard';

const Contact = () => {
  return (
    <ScrollView>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </ScrollView>
  );
};

export default Contact;
