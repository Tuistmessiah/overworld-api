import {
  runQuery,
  queryColsParser,
  queryValIndexesParser,
  queryColSetParser,
  queryValuesParser,
} from "../dynamic-query-runner";

// - ACRUD Dynamic Queries (All + CRUD)
/* all, create, read, update, delete */

/* Props: vary by query, but all need the 'entityName'
 * Return: 'runQuery': { type: "error"/"response", content }
 */
export function select_all(entityName: string) {
  const query = `SELECT * FROM ${entityName}`;
  return runQuery({ query });
}

export function insert_values(entityName: string, content: any) {
  const queryCols = queryColsParser(content);
  const queryValIndexes = queryValIndexesParser(content);
  const queryValues = queryValuesParser(content);
  const query = `INSERT INTO ${entityName}(${queryCols}) VALUES(${queryValIndexes}) RETURNING id`;
  return runQuery({ query, queryValues });
}

export function select_where_id(entityName: string, id: string) {
  const query = `SELECT * FROM ${entityName} WHERE "id" = $1`;
  return runQuery({ query, queryValues: [id] });
}

export function update_where_id(entityName: string, id: string, content: any) {
  const queryCols = queryColsParser(content);
  const queryValues = queryValuesParser(content);
  const queryColSet = queryColSetParser(content);
  const query = `UPDATE ${entityName} SET ${queryColSet} WHERE id = $1 RETURNING ${queryCols}`;
  return runQuery({ query, queryValues: [id, ...queryValues] });
}

export function delete_where_id(entityName: string, id: string) {
  const query = `DELETE FROM ${entityName} WHERE "id" = $1`;
  return runQuery({ query, queryValues: [id] });
}
