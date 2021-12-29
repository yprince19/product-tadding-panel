
export function SetBrand (brand) {
    return dispatch => {
        dispatch({ type: 'ACTIVE_BRAND', payload: brand })
    }
}

export function setContentTypes (contentTypes) {
    return dispatch => {
        dispatch({ type: 'ACTIVE_CONTENT_TYPES', payload: contentTypes})
    }
}

export function setTaggedData (data) {
    console.log(data, 'setTaggedData')
    return dispatch => {
        dispatch({ type: 'TAGGED_DATA', payload: data})
    }
}