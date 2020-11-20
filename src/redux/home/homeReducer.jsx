import Data from "../../data.json";

const initialState = {
    rawData: Data,
    seriesData: {
        dow: Data.map((item) => item.dow),
        dom: Data.map((item) => item.dom),
        insid: Data.map((item) => item.insid),
        hour: Data.map((item) => item.hour),
        SumHourly: Data.map((item) => item.SumHourly),
    },
};
export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
