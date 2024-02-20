module.exports = {
    webpack: function (config, env) {
        config.module.rules = config.module.rules.map(rule => {
        if (rule.oneOf instanceof Array) {
            rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
      }
      return rule;
    });
    return config;
  },
  devServer: function(configFunction) {
    // Pablo: I would like to understand this: https://web.dev/articles/coop-coep?hl=es-419
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      // Default config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
      const config = configFunction(proxy, allowedHost);

      // Set loose allow origin header to prevent CORS issues
      config.headers = {
        'Cross-Origin-Opener-Policy': 'same-origin', 
        'Cross-Origin-Embedder-Policy': 'require-corp'}

      return config;
    };
  },
}