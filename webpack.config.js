
module.exports = {
    mode: 'production',
    entry: __dirname + '/utils/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'ws-utils.min.js',
        library: 'ws-utils',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};