// export type Message = GadgetRecord<{
//   __typename: 'Message';
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
//   content: string;
//   user: User;
//   room: Room;
// }>;
export type Message = {
  __typename: 'Message';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: string;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Date;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Date;

  content: string;

  user: User;

  userId: string;

  room: Room;

  roomId: string;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Record<string, any>;
};

export type User = {
  __typename: 'User';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: string;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Date;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Date;

  email: string;

  lastSignedIn: Date;

  emailVerificationToken: string;

  roles: Role[];

  firstName: string;

  resetPasswordTokenExpiration: Date;

  emailVerified: boolean;

  emailVerificationTokenExpiration: Date;

  resetPasswordToken: string;

  googleProfileId: string;

  googleImageUrl: string;

  lastName: string;

  messages: Message | null;

  roomMembers: RoomMemberConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Record<string, any>;
};

export type Room = {
  __typename: 'Room';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: string;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Date;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Date;

  name: string;

  description: string;

  messages: MessageConnection;

  roomMembers: RoomMemberConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Record<string, any>;
};
