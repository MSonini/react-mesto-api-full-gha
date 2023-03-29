import { BASE_API_URL, AUTH_KEY, AUTH_BASE_URL } from './constants';

class Api {
  constructor({ baseUrl, authBaseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._authBaseUrl = authBaseUrl;
    this._headers = headers;
  }

  _fetchData(resource, method, body = null, baseUrl = this._baseUrl, headers = this._headers) {
    return fetch(baseUrl + resource, {
      method: method.toUpperCase(),
      body: body ? JSON.stringify(body) : body,
      headers,
      credentials: 'include',
    }).then((res) => {
      if (res.ok) return res.json();
      console.log('reject in fetchData')
      return Promise.reject(res);
    }).then(res => {
      if (res.data) {
        return Promise.resolve(res.data)
      }
      return Promise.resolve(res)
    });
  }

  getProfileData() {
    return this._fetchData('/users/me', 'get');
  }

  editProfileInfo(data) {
    return this._fetchData('/users/me', 'patch', data);
  }

  editProfileAvatar(avatar) {
    return this._fetchData('/users/me/avatar', 'patch', { avatar });
  }

  getCards() {
    return this._fetchData('/cards', 'get');
  }

  addCard(data) {
    return this._fetchData('/cards', 'post', data);
  }

  removeCard(cardId) {
    return this._fetchData(`/cards/${cardId}`, 'delete');
  }

  toggleLike(cardId, isLiked) {
    if (!isLiked) return this._fetchData(`/cards/${cardId}/likes`, 'put');
    return this._fetchData(`/cards/${cardId}/likes`, 'delete');
  }

  register(email, password) {
    return this._fetchData('/signup', 'post', { email, password }, this._authBaseUrl);
  }

  authorize(email, password) {
    return this._fetchData('/signin', 'post', { email, password }, this._authBaseUrl);
  }

  checkToken(token) {
    if (token) {
      return this._fetchData('/users/me', 'get', null, this._authBaseUrl, {
        ...this._headers,
        authorization: `Bearer ${token}`,
      });
    }
    return this._fetchData('/users/me', 'get', null, this._authBaseUrl, {
      ...this._headers,
    });

  }
}

const api = new Api({
  baseUrl: BASE_API_URL,
  authBaseUrl: AUTH_BASE_URL,
  headers: {
    authorization: AUTH_KEY,
    'Content-Type': 'application/json',
  },
});

export default api;
