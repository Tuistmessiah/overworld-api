import {
  select_all,
  insert_values,
  select_where_id,
  update_where_id,
  delete_where_id,
} from "../database/queries/dynamic/acrud-queries";

import { extractFromArray } from "../utils";

/* Props: varied
 * Return: 'runQuery': { type: "error"/"response", content }
 */

/* ACRUD (All + CRUD):
 * all
 * create
 * read (id)
 * update (id)
 * delete (id)
 * */

export function findAll(entityName: string) {
  return select_all(entityName);
}

export function create(entityName: string, content: any) {
  return insert_values(entityName, content).then(extractFromArray);
}

export function read(entityName: string, id: string) {
  return select_where_id(entityName, id).then(extractFromArray);
}

export function update(entityName: string, id: string, content: any) {
  return update_where_id(entityName, id, content).then(extractFromArray);
}

export function destroy(entityName: string, id: string) {
  return delete_where_id(entityName, id).then(extractFromArray);
}
