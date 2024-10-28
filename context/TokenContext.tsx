import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AccessTokenContextType {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  username: string | null;
  setUsername: Dispatch<SetStateAction<string | null>>;
}

const AccessTokenContext = createContext<AccessTokenContextType>({
  accessToken: null,
  setAccessToken: () => {},
  username: null,
  setUsername: () => {},
});

export const AccessTokenProvider = (props: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, username, setUsername }}
    >
      {props.children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => useContext(AccessTokenContext);
