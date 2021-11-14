import http from "../http-common"

const get = (id: any) => {
    return http.get(`/dorayaki/${id}`)
}

const getAll = () => {
    return http.get(`/dorayaki`)
}

const createDorayaki = (data: any) => {
    return http.post("/dorayaki/create", data)
}

const createRecipe = (data: any) => {
    return http.post("/dorayaki/resep/create", data)
}

export default {
    get,
    getAll,
    createDorayaki,
    createRecipe
};