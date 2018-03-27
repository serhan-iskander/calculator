export const getServerUrl = () => {
    return window.location.origin;
};

Number.prototype.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};
