const axios = require('axios').default;

const wait = (milliseconds) => {
    return new Promise((resolve) => {
        if (typeof milliseconds !== 'number') {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve('done!'), milliseconds);
    });
};

const downloadFileContentFromUrl = async (url) => {
    var config = {
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    wait: wait,
    downloadFileContentFromUrl:downloadFileContentFromUrl,
};
