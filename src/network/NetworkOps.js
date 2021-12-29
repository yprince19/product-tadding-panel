import { get } from "lodash";
import { urlFor } from "./Urls";

export class NetworkOps {
  async getRequest(type, options) {
    const headerOverrides = get(options, "headerOverrides", {});
    let request = {
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headerOverrides,
      },
    };

    if (sessionStorage.token) {
      request.headers = {
        ...request.headers,
        Authorization: `${sessionStorage.token}`,
        "Service-Token": "2900ba48-85f6-4929-b19d-0c0da14dbc14",
      };
    }
    return request;
  }

  async wrapperWithOptions(url, request) {
    try {
      const response = await fetch(url, request);
      const res = await response.json();
      res.status = response.status;
      console.log(url, request, res);
      return res;
    } catch (error) {
      console.log(url, request, "Error", error);
      return error;
    }
  }

  postToJson = async (service, data) => {
    try {
      const JSONData = JSON.stringify(data);
      return this.postRaw(service, JSONData);
    } catch (err) {
      throw err;
    }
  };

  postRaw = async (service, data, options) => {
    try {
      const request = await this.getRequest("POST", options);
      request.body = data;
      return this.wrapperWithOptions(urlFor(service), request);
    } catch (err) {
      throw err;
    }
  };

  putToJson = async (service, data) => {
    try {
      const request = await this.getRequest("PUT");
      request.body = JSON.stringify(data);
      return this.wrapperWithOptions(urlFor(service), request);
    } catch (err) {
      throw err;
    }
  };

  get = async (service) => {
    try {
      const request = await this.getRequest("GET");
      return this.wrapperWithOptions(urlFor(service), request);
    } catch (err) {
      throw err;
    }
  };

  delete = async (service) => {
    try {
      const request = await this.getRequest("DELETE");
      return this.wrapperWithOptions(urlFor(service), request);
    } catch (err) {
      throw err;
    }
  };

  getRaw = async (service) => {
    try {
      const request = await this.getRequest("GET");
      return this.wrapperWithOptions(service, request);
    } catch (err) {
      throw err;
    }
  };
}

export default new NetworkOps();
