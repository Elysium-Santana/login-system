export async function userFetch(api) {
  let response;
  let json;
  let erro;

  try {
    const { url, options } = api;
    response = await fetch(url, options);
    json = await response.json();
    if (response.ok === false) {
      throw new Error(json.error.message);
    }
  } catch (err) {
    erro = err.message;
    json = null;
  }

  return { response, json, erro };
}
