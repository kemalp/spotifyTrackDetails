const appConfig = {}

appConfig.api = {
	baseURL: 'https://api.spotify.com/v1/',
	authEndpoint: 'https://accounts.spotify.com/authorize',
	clientID: 'c23016bff1894be3a27c4c56e467ee7f',
	redirectURI: 'http://localhost:3000/Home',
	responseType: 'token'
}

appConfig.spotify = {
	albums: {
		getAlbum: 'albums'
	},
	artists: {
		getArtist: 'artists'
	},
	shows: {
		getShow: 'shows'
	},
	episodes: {
		getEpisode: 'episodes'
	},
	tracks: {
		getTrack: 'tracks',
		analysis: 'audio-analysis'
	},
	search: {
		searchItem: 'search'
	},
	users: {
		getCurrentUser: 'me',
		getUser: 'users'
	},
	playlists: {
		getPlaylist: 'playlists'
	}
}

export default appConfig
