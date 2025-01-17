import { useState, useEffect } from "react";
import { createClient } from "../utils/supabase/client";

interface IUser {
  full_name: string;
  picture: string;
  email: string;
}

export function useUser() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } else {
        const identityData = data?.user?.identities?.[0]?.identity_data ?? null;

        if (identityData) {
          setUser({
            full_name: identityData.full_name,
            picture: identityData.picture,
            email: identityData.email,
          });
        } else {
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);

  return { user, setUser };
}
