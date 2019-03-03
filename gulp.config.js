module.exports = function () {
    let config = {
        scss: {
            src: [
                "scss/**/*.scss"
            ],
            dest: "content/"
        },
        html: {
            src: [
                "index.html"
            ]
        }
    };

    return config;
};
