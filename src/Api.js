export const URL_BASE = 'https://identitytoolkit.googleapis.com/v1/accounts:';

const apiKey = 'AIzaSyBmJuikBAVI2HfA8OtOuH7dfY-e9OqTc1E';

export function API_LOGIN(body) {
  return {
    url: URL_BASE + `signInWithPassword?key=${apiKey}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export function API_CREATE_USER(body) {
  return {
    url: URL_BASE + `signUp?key=${apiKey}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
