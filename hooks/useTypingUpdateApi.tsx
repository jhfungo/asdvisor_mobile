import { useEffect, useState } from 'react';
import userStore from '~/store/userStore';
import { supabase } from '~/utils/supabase';

const useTypingUpdateApi = (dynamicUID: string) => {
  const [typingUser, setTypingUser] = useState<string>('');
  const userAuth = userStore((user) => user);
  useEffect(() => {
    const sub = supabase
      .channel(`typing_changes`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'typing',
          filter: `user_id=eq.${dynamicUID}`,
        },
        (payload) => {
          const { user_id, is_typing, recipient_id } = payload.new;
          setTypingUser((prev: string): string => {
            if (is_typing && prev !== user_id && recipient_id === userAuth.id) {
              return user_id;
            }

            if (!is_typing) {
              return '';
            }

            return prev;
          });
        }
      )
      .subscribe();

    return () => {
      sub.unsubscribe();
    };
  });

  return typingUser;
};

export default useTypingUpdateApi;
