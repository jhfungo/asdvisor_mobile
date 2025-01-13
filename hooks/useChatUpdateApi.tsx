import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import userStore from '~/store/userStore';
import { supabase } from '~/utils/supabase';

interface Message {
  id: string;
  message: string;
  sender_id: string;
  recipient_id: string;
  created_at: string;
}
const useChatApi = (dynamicUID: string) => {
  const userAuth = userStore((user) => user);
  const [data, setData] = useState<Message>();
  const [error, setError] = useState<PostgrestError | null>(null);
  useEffect(() => {
    const channel = supabase
      .channel(`user-${dynamicUID}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat',
        },
        (payload) => {
          const newRecord = payload.new as Message;
          if (
            (newRecord.recipient_id === dynamicUID && newRecord.sender_id === userAuth.id) ||
            (newRecord.recipient_id === userAuth.id && newRecord.sender_id === dynamicUID)
          )
            setData(newRecord);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [dynamicUID]);

  return { data, error };
};

export default useChatApi;
