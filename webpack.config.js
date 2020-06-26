const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve('public'),
        file: 'bundle.js'
    },
    module:{
        rule:[
            {
                test:/\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
}