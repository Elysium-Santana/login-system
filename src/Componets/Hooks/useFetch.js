export async function userFetch(api) {
  let response;
  let json;
  try {
    const { url, options } = api;
    response = await fetch(url, options);
    json = await response.json();
    console.log(json);
    if (response.ok === false) {
      throw new Error(json.error.message);
    }
  } catch (err) {
    console.log(err.message);
    json = null;
  }

  return { response, json };
}
