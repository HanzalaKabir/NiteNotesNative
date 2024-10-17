import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AccessTokenContextType {
  accessToken: string | null;
  setAccessToken:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<null>>;
}

const AccessTokenContext = createContext<AccessTokenContextType>({
  accessToken: null,
  setAccessToken: () => {},
});

const AccssTokenProvider = (props: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {props.children}
    </AccessTokenContext.Provider>
  );
};

const useAccessToken = useContext(AccessTokenContext);
export { AccssTokenProvider, useAccessToken };
