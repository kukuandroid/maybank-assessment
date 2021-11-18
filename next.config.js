
module.exports = {
  env: {
    google_maps_api_key: 'AIzaSyCsI9abmoQ86DoNEFmLDE7tHsaGxJsPE8Q'
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
