import {SET_DEFECT,SET_DEFECT_CATEGORY_DATA,SET_DEFECT_PRIORITY_DATA,SET_DESCRIPTION_DATA} from '../constants'
export let addDefect = (data) => {
    return {
        type: SET_DEFECT,
        data
    }
}

export let setCategory = (data) => {
    debugger
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