import { applyParams, save, ActionOptions, CreateRoomsActionContext } from "gadget-server";

/**
 * Main logic for creating a room and performing additional actions.
 *
 * @param { CreateRoomsActionContext } context
 */
export async function run({ params, record, logger, api, connections, session }) {
  // Apply parameters to the room record
  applyParams(params, record);

  // Save the room record to the database
  await save(record);

  // Additional action: Log the creation event (example)
  logger.info(`Room created with id: ${record.id}`);

  if (session) {
    logger.info("Adding user to member list of new room as admin")
    await api.roomMember.create({
      room: {
        _link: record.id
      },
      user: {
        _link: session.user
      },
      userRole: 'admin'
    });
  }
}

/**
 * Logic to be executed upon successful creation of a room.
 *
 * @param { CreateRoomsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your custom success logic goes here
  logger.info(`Successfully created room with id: ${record.id} and performed additional actions.`);
};

/** Action options */
export const options = {
  actionType: "create"
};
