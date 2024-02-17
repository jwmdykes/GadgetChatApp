import React, { ReactNode, useState, useCallback } from 'react';
import { Room } from '@gadget-client/chat-demo';

interface RoomContextType {
  room: Room | null;
  setRoom: (room: Room | null) => void;
}

export const RoomContext = React.createContext<RoomContextType | undefined>(
  undefined
);

interface RoomContextProviderProps {
  children: ReactNode;
}

export const RoomContextProvider: React.FC<RoomContextProviderProps> = ({
  children,
}) => {
  const [room, setRoom] = useState<Room | null>(null);

  const handleSetRoom = useCallback((room: Room | null) => {
    setRoom(room);
  }, []);

  const value = { room, setRoom: handleSetRoom };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
