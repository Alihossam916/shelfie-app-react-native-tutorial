import { useEffect } from "react";
import { Text } from "react-native";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";

// themed components
import ThemedLoader from "../themedLoader";

const GuestOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked || user) {
    return <ThemedLoader />;
  }

  return children;
};

export default GuestOnly;
