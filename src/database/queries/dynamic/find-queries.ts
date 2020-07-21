import { runQuery } from "../dynamic-query-runner";

/* Props: vary by query, but all need the 'entityName'
 * Return: 'runQuery': { type: "error"/"response", content }
 */

// - Find
export function select_where(entityName: string, variableName: string, variable: any): any {
  const query = `SELECT * FROM ${entityName} WHERE "${variableName}" = $1`;
  return runQuery({ query, queryValues: [variable] });
}
