import axios from "axios";

// https://dev.to/vcpablo/vuejs-internationalization-155g

// ------------------------------------------------------------------------------------------------
// Types
// ------------------------------------------------------------------------------------------------

/**
 * @interface IAirTableEntry
 * 
 * @field {string} id is the unique identifier of an AirTable entry
 * @field {string} createdTime is the date of creation of the entry
 * @field {IAirTableTranslations} fields is the columns of an AirTable table
 */
interface IAirTableEntry {
  id: string;
  createdTime: string;
  fields: IAirTableTranslations;
}

/**
 * @interface IAirTableTranslations
 * 
 * @field {string} key is a unique key used in code to reference a string to be displayed
 * @field {string} en is the English translation
 * @field {string} fr is the French translation
 */
interface IAirTableTranslations {
  key: string;
  en: string;
  fr: string;
}

type Lang = { [key: string]: Scope };
type Scope = { [key: string]: Translation };
type Translation = { [key: string]: string };

// ------------------------------------------------------------------------------------------------
// Variables
// ------------------------------------------------------------------------------------------------

export let messages: Lang = {};

// ------------------------------------------------------------------------------------------------
// Public functions
// ------------------------------------------------------------------------------------------------

export async function initialize() {
  if (import.meta.env.MODE == "mock") {
    return;
  }
  
  const token = import.meta.env.VITE_AIRTABLE_TOKEN;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const tables = import.meta.env.VITE_AIRTABLE_TABLES.split(",");

  // `tables` variables is a list of tables with a scope name. For example:
  //
  // [
  //   "menus:tblABCDEF",
  //   "titles:tlbGHIJK",
  // ]
  for (const table of tables) {
    const tokens = table.split(":");

    if (tokens.length == 2) {
      const response = await fetchTable(token, baseId, tokens[1]);
      messages = response.reduce(airtableToMessages(tokens[0]), messages);
    }
  }
}

// ------------------------------------------------------------------------------------------------
// Private functions
// ------------------------------------------------------------------------------------------------

async function fetchTable(token: string, baseId: string, table: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `https://api.airtable.com/v0/${baseId}/${table}`,
    config
  );

  if ("data" in response && "records" in response.data) {
    return response.data.records;
  }

  console.error(`Invalid AirTable response: ${response}`);
  return [];
}

function airtableToMessages(scope: string) {
  function reducer(result: Lang, current: IAirTableEntry) {
    if ("key" in current.fields) {
      const key: string = current.fields.key as string;

      for (const [lang, value] of Object.entries(current.fields)) {
        if (lang != "key") {
          result[lang] = result[lang] || {};
          result[lang][scope] = result[lang][scope] || {};
          result[lang][scope][key] = value;
        }
      }
    }

    return result;
  }

  return reducer;
}
