module.exports = {
    devServer: {
        proxy: {
            '/vue-killer/api': { 
                target: 'http://localhost:3000', 
                changeOrigin: true,
                pathRewrite: { '^/vue-killer/api': '/vue-killer/api' } 
            }
        }
    }
};
