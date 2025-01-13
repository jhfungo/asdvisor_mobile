import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';

interface Message {
  id: string;
  message: string;
  sender_id: string;
  recipient_id: string;
  created_at: string;
}
const useGetChatApi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [errors, setErrors] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from('chat').select(
        // `*, recipient: user!chat_recipient_id_fkey(first_name, last_name), sender: user!chat_sender_id_fkey(first_name, last_name)
        //   `
        '*'
      );

      if (data) {
        setMessages(data);
      }
    };
    fetchMessages();
  }, []);
  return { messages, errors };
};

export default useGetChatApi;
