export const sortArrayOfObjects = (arr, sortinProperty, order) => {
    const compare = (a,b) => {
        if (a[sortinProperty] > b[sortinProperty] && order === "ascending")
            return -1;
        if (a[sortinProperty] < b[sortinProperty] && order === "ascending")
            return 1;
        if (a[sortinProperty] < b[sortinProperty] && order === "decending")
            return -1;
        if (a[sortinProperty] > b[sortinProperty] && order === "decending")
            return 1;
        return 0;
    };

    return arr.sort(compare);
}