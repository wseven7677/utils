
module.exports = {
    mode: 'production',
    entry: __dirname + '/utils/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'w7677utils.min.js',
        library: 'w7677utils',
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