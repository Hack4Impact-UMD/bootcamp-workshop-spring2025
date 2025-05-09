import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  courses: string[];
  setCourses: React.Dispatch<React.SetStateAction<string[]>>;
}

// Authcontext that other components can subscribe to
const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    // Simulate an API call to get user data
    setLoading(false);
    setIsAuthenticated(true);
    setFirstName("John");
    setLastName("Doe");
    setEmail("john@gmail.com");
    setCourses([
      "CMSC131",
      "CMSC132",
      "CMSC250",
      "CMSC330",
      "CMSC414",
      "CMSC420",
      "CMSC451",
      "CMSC472",
    ]);
  }, []);

  return (
    // Provide the AuthContext to children components
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isAuthenticated,
        firstName,
        lastName,
        email,
        courses,
        setCourses,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
