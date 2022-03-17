import { Pool } from "pg";

const connectionString = 'postgres://dqdcjnoi:t8jStzsxGpk9M7NVc3Qd88MrtPHcl6Q3@motty.db.elephantsql.com/dqdcjnoi';

const db = new Pool({ connectionString });

export default db;