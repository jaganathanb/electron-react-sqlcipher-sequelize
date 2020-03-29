import { db } from './models';

const setupDb = async () => {
  try {
    await db.connection.authenticate();
    await db.connection.sync({ force: false });
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
};

export { setupDb, db };
