import { ServiceEnum, urlFor } from "../../network/Urls";
import { setTaggedData } from "./state";

export function postTagContent(data) {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");
    myHeaders.append("Content-Type", "application/json");
    let activeBrandId = localStorage.getItem('activeBrandId');

    var raw = JSON.stringify({
      data: [
        // {
        //   id: 41,
        //   product_id: "UHJvZHVjdDoxMTQ0",
        //   sku_id: "UHJvZHVjdFZhcmlhbnQ6MjI5MQ==",
        //   content_type: "SEARCH_IMAGE",
        // },
        { ...data.products },
      ],
      zaamo_id: activeBrandId, //"QnJhbmQ6Ng=="
      user_type: "BRAND",
      tag_type: data.tagType,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${urlFor(ServiceEnum.postTagContent)}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          alert("Something went wrong!");
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result, data);
        // updating data in store
        let temp = { ...data.taggedDataList };
        temp[`${data.products.id}`][data.tagType].push(data.dataToAdd);
        console.log('TAGGED_DATA2', temp)
        dispatch({ type: "TAGGED_DATA", payload: temp });

        return { success: true };
      });
    //   .catch((error) => {
    //     console.log("error", error);
    //     return { success: false, msg: error };
    //   });
  };
}

export function postUnTagContent(data) {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: [
        {
          ...data.products,
        },
      ],
      untag_type: data.untagType,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${urlFor(ServiceEnum.postUnTagContent)}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, data);

        // updating data in store
        let temp = { ...data.taggedDataList };
        if (data.untagType == "PRODUCT") {
          for (let i in temp[`${data.products.content_id}`][data.untagType]) {
            if (
              temp[`${data.products.content_id}`][data.untagType][i].id ==
              data.products.product_id
            ) {
              temp[`${data.products.content_id}`][data.untagType].splice(i, 1);
            }
          }
        } else {
          for (let i in temp[`${data.products.content_id}`][data.untagType]) {
            if (
              temp[`${data.products.content_id}`][data.untagType][i].id ==
              data.products.collection_id
            ) {
              temp[`${data.products.content_id}`][data.untagType].splice(i, 1);
            }
          }
        }

        console.log('TAGGED_DATA3', temp)
        dispatch({ type: "TAGGED_DATA", payload: temp });
        return { success: true };
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}

export function postTrashContent(data) {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Service-Token", "2900ba48-85f6-4929-b19d-0c0da14dbc14");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ids: [...data.ids],
      is_trash: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://betacontent.zaamo.co/streaming/api/content/trash/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let tempData = [...data.contentList];
        for (let i in tempData) {
          if (tempData[i].id == data.ids[0]) {
            tempData.splice(i, 1);
          }
        }
        dispatch({ type: "CONTENT_LIST_REPLACE", payload: {data: tempData, hasMore: data.hasMore} });
      })
      .catch((error) => {
        console.log("error", error);
        return { success: false, msg: error };
      });
  };
}
