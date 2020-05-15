export let addDefect = (data) => {
    return {
        type: SET_DEFECT,
        data
    }
}

export let setCategory = (data) => {
    return {
        type: SET_DEFECT_CATEGORY_DATA,
        data
    }
}

export let setPriority = (data) => {
    return {
        type: SET_DEFECT_PRIORITY_DATA,
        data
    }
}

export let setDescription = (data) => {
    return {
        type: SET_DESCRIPTION_DATA,
        data
    }
}