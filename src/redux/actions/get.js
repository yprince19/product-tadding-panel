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

    let offset = data.contentList.length;
    let activeBrandId = localStorage.getItem("activeBrandId");
    fetch(
      `${urlFor(ServiceEnum.getContentList)}?content_format=${
        data.contentFormat
      }&content_source=${
        data.contentSource
      }&limit=10&offset=${offset}&zaamo_id=${activeBrandId}&user_type=BRAND`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "res", data);
        let temp = {};

        let dataToMap;
        if (data?.replaceList) {
          dataToMap = [...result.data];
        } else {
          dataToMap = [...data.contentList, ...result.data];
        }

        dataToMap.map((e) => {
          let id = `${e.id}`;
          if (!temp[id]) {
            temp[id] = {};
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

        const hasMore = result.data.length < 10 ? false : true;
        console.log("TAGGED", temp, hasMore, result.data.length);

        dispatch({ type: "TAGGED_DATA", payload: temp });
        if (data?.replaceList) {
          dispatch({
            type: "CONTENT_LIST_REPLACE",
            payload: { data: result.data, hasMore: hasMore },
          });
        } else {
          dispatch({
            type: "CONTENT_LIST",
            payload: { data: result.data, hasMore: hasMore },
          });
        }
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
    console.log("init", data);

    const storeId = localStorage.getItem("activeStoreId");
    let url = `${urlFor(
      ServiceEnum.getProducts
    )}?brand_id=QnJhbmQ6Ng==&first=10&endCursor=${data.endCursor}`;

    if (data.type == "COLLECTION") {
      url = `${urlFor(
        ServiceEnum.getCollections
      )}?store_id=${storeId}&first=10&endCursor=${data.endCursor}`;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "TAG_PRODUCTS");
        if (data.type == "PRODUCT") {
          dispatch({ type: "TAG_PRODUCTS", payload: result });
        } else {
          dispatch({ type: "TAG_COLLECTION", payload: result });
        }

        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}
