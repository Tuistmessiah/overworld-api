import pool from "./dbPool";
import { QueryResult } from "pg";

/* Props: {query: string, queryValues: array of strings, code?: string}
 *  'code' can identify the query in the node log.
 *  If not set then the query string and values will be printed.
 * Return: { type: "error"/"response", content: [object] }
 */
type Props = {
  query: string;
  queryValues?: Array<string>;
  code?: string;
};

type responseTypes = "error" | "success";

type Return = {
  type: responseTypes;
  content: QueryResult["rows"];
};

export async function runQuery({
  query,
  queryValues = [],
  code = "",
}: Props): Promise<Return | undefined> {
  if (!query) return;

  const dbResponse: { error?: Error; content: QueryResult["rows"] } = await new Promise<
    Error | QueryResult["rows"]
  >((resolve, reject) => {
    pool.query(query, [...queryValues], (error: Error, response: QueryResult<any>) => {
      const queryCode = code ? code : `'${query}' with values '[${Object.values(queryValues)}]'`;
      if (error) {
        console.error(`Query -> Error - ${queryCode}: ${error}`);
        reject(error);
      }
      console.info(`Query -> Success - ${queryCode}: ${response}`);
      const content = response.rows;
      resolve(content);
    });
  }).catch((error) => error);

  let type: responseTypes = dbResponse?.error ? "error" : "success";

  return {
    type,
    content: dbResponse.content,
  };
}

// - Parsers: Objects to strings (for queries to build before calling 'runQuery')

export function queryColsParser(content: any): string {
  return Object.keys(content).join();
}

export function queryValIndexesParser(content: any): string {
  const queryValues = Object.values(content);
  return Array(queryValues.length)
    .fill(undefined)
    .map((val, i) => "$" + (i + 1))
    .join();
}

export function queryValuesParser(content: any): Array<string> {
  return Object.values(content);
}

export function queryColSetParser(content: any): string {
  return Object.keys(content)
    .map((key, i) => key + " = $" + (i + 2))
    .join();
}
