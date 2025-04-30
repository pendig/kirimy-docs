module.exports = {
  apps: [
    {
      name: "docusaurus-site",
      script: "npm",
      args: "run serve",
      env: {
        NODE_ENV: "production",
        PORT: 3017,
      },
    },
  ],
};
