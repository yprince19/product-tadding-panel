import { ServiceEnum, urlFor } from "../../network/Urls";

export function getContentFilters() {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlFor(ServiceEnum.getContentFilters), requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const tempData = result;
        const data = {};
        for (let i in tempData) {
          let temp = tempData[i].map((e) => ({
            value: e.id,
            label: e.name,
          }));
          data[i] = temp;
        }
        dispatch({ type: "CONTENT_FILTERS", payload: data });
        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}

export function getTagContent(data) {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `${urlFor(ServiceEnum.getTagContent)}?product_id=${
      data.id
    }&limit=${data.limit}&offset=${data.offset}`;

    if (data.type === "COLLECTION") {
      url = `${urlFor(ServiceEnum.getTagContent)}?collection_id=${
        data.id
      }&limit=${data.limit}&offset=${data.offset}`;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // dispatch({ type: "TAG_PRODUCTS", payload: result });
        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}

export function getContentList(data) {
  console.log("init");
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${urlFor(ServiceEnum.getContentList)}?content_format=${
        data.contentFormat
      }&content_source=${
        data.contentSource
      }&limit=10&offset=0&zaamo_id=QnJhbmQ6Ng==&user_type=BRAND`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let temp = {};
        result.data.map((e) => {
          let id = `${e.id}`;
          if (!temp[id]) {
            temp[id] = {}
            temp[id]["COLLECTION"] = [...e.tagged_collections];
            temp[id]["PRODUCT"] = [...e.tagged_products];
          } else {
            temp[id]["COLLECTION"] = [
              ...temp[id]["COLLECTION"],
              ...e.tagged_collections,
            ];
            temp[id]["PRODUCT"] = [temp[id]["PRODUCT"], ...e.tagged_products];
          }
        });
        dispatch({type: 'TAGGED_DATA', payload: temp});
        dispatch({ type: "CONTENT_LIST", payload: result.data });
        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}

export function getProducts(data) {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${urlFor(ServiceEnum.getProducts)}?brand_id=QnJhbmQ6Ng==&first=10`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "TAG_PRODUCTS");
        dispatch({ type: "TAG_PRODUCTS", payload: result });
        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}
