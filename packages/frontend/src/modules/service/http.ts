import axios, { AxiosStatic } from 'axios';

const SERVER_URL = 'http://localhost:4201';

export default class HttpSerivce {
  baseUrl: string;

  fetchingService: AxiosStatic;

  apiVersion: string;

  constructor(baseUrl = SERVER_URL, fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
  }

  get(config: { url: string }) {
    return this.fetchingService
      .get(
        this.getFullApiUrl(config.url),
        { headers: this.populateTokenToHeaderConfig() }
        // extractUrlAndDataFromConfig(config)
      )
      .then((res) => res.data.response)
      .catch((err) => err);
  }

  async delete(config: { url: string }) {
    return this.fetchingService
      .delete(this.getFullApiUrl(config.url), { headers: this.populateTokenToHeaderConfig() })
      .then((res) => res.data.response)
      .catch((err) => err.message);
  }

  async post<Data>(config: { url: string; data: Data }) {
    return this.fetchingService
      .post(this.getFullApiUrl(config.url), config.data, {
        headers: this.populateTokenToHeaderConfig()
      })
      .then((res) => res.data.response)
      .catch((err) => err.response.data.message);
  }

  async put<Data>(config: { url: string; data: Data }) {
    return this.fetchingService
      .put(this.getFullApiUrl(config.url), config.data, {
        headers: this.populateTokenToHeaderConfig()
      })
      .then((res) => res.data.response)
      .catch((err) => err.message);
  }
}
