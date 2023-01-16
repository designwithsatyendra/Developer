import React, { useContext, useState } from 'react';

const MainContext = React.createContext();
export function useMainContext() {
  return useContext(MainContext);
}

export function ContextProvider(props) {
  const [messageUpdate, setmessageUpdate] = useState();
  const [commentIncreement, setCommentIncreement] = useState(10);
  const [messageReset, setmessageReset] = useState(false);
  const value = {
    messageReset,
    setmessageReset,
    messageUpdate,
    setmessageUpdate,
    commentIncreement,
    setCommentIncreement,
  };
  return <MainContext.Provider value={value}>{props.children}</MainContext.Provider>;
}
