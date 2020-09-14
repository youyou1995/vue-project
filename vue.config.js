const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('./src'));
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `~@import "~@/assets/css/public.scss"`
            },
            scss: {
                additionalData: `~@import "~@/assets/css/public.scss"`
            }
        }
    }
};
