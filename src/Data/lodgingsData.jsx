import Lodgings from "../lodging.json"

const getAllLodgings = () => {
    return Lodgings
}

export const getOneLodging = (id) => {
    return Lodgings.find(log => log.id === id)
}

export const DataLodgings = {
    getAllLodgings, getOneLodging
}