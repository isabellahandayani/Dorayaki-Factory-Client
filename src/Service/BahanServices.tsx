import http from "../http-common"

const get = (id: any) => {
    return http.get(`/bahan${id}`)
}

const getAll = () => {
    return http.get(`/bahan`)
}

const update = (data: any) => {
    return http.put("/bahan/update", data)
}

const create = (data: any) => {
    return http.post("/bahan/create", data)
}

export default {
    get,
    getAll,
    update,
    create
};