// context/SelectedTrackContext.js
import { createContext, useContext, useState } from "react";

const SelectedTrackContext = createContext();

export const SelectedTrackProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <SelectedTrackContext.Provider value={{ selectedTrack, setSelectedTrack }}>
      {children}
    </SelectedTrackContext.Provider>
  );
};

export const useSelectedTrack = () => {
  const context = useContext(SelectedTrackContext);
  if (!context) {
    throw new Error(
      "useSelectedTrack must be used within a SelectedTrackProvider"
    );
  }
  return context;
};
