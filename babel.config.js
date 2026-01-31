module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: ["tsx", ".ts", ".js", ".json"],
          alias: {
            "@": "./",
            "@core": "./app/core",
            "@styles": "./app/styles",
          },
        },
      ],
    ],
  };
};
