import React from 'react'
import contextMixin from '../mixins/contextMixin'

export default React.createClass({

	displayName: 'FavoriteMovies',

	mixins: [ contextMixin ],

	getInitialState() {
		this.movies = []

		return {
			movies: []
		}
	},

	componentWillMount() {
		this.store.addChangeListener(this._onMoviesStoreChange)

		// this.firebaseRef = new Firebase('https://favorite-movies.firebaseio.com/favorite-movies')
		// this.firebaseRef.on('child_added', (dataSnapshot) => {
		// 	console.log('child_added', dataSnapshot.val())
		// 	this.movies.push(dataSnapshot.val())
		// 	this.setState({ movies: this.movies })
		// })

	},

	render() {
		return (
			<div className='panel panel-default'>

				<header className='panel-heading'>
					<h1>Favorite Movies</h1>
				</header>

				<div className='panel-body'>
					{ this._getList() }
				</div>

			</div>
		)
	},

	_getSpinner() {
		return <span>Loading...</span>
	},

	_getList() {
		return (
			<ul className='list-group'>
				{ this._getListItems() }
			</ul>
		)
	},

	_getListItems() {
		let items = this.state.movies.map((movie, idx) => {
			var { Title, Year } = movie

			return (
				<li key={ idx } className='list-group-item'>
					{ Title }:{ Year }
					{ this._createRemoveButton(idx) }
				</li>
			)
		})

		return items
	},

	// _createRemoveButton(idx) {
	// 	var _removeFromFavoriteMovies = () => Actions.removeFavoriteMovie(idx)

	// 	return (
	// 		<button className='btn btn-danger btn-xs pull-right' type='button' onClick={ _removeFromFavoriteMovies }>
	// 			<span className='glyphicon glyphicon-remove'></span>
	// 		</button>
	// 	)
	// },

	// _removeFromFavoriteMovies(e) {
	// 	e.preventDefault()

	// 	console.log('%cMARCIN :: FavoriteMovies.jsx:79 :: movie', 'background: #222; color: lime')

	// 	// return false
	// },

	_onMoviesStoreChange() {
		let movie = this.context.moviesStore.getFoundMovie()
		let movies = this.context.moviesStore.getFavoriteMovies()

		// this.setState({ movies })

		// if (movie && typeof movie.Error === 'undefined') {
		// 	this.firebaseRef.push(movie)
		// 	console.log('MARCIN :: FavoriteMovies#_onFavoriteMoviesStoreChange :: movie', movie)
		// }
		if (movie) {
			console.log('MARCIN :: FavoriteMovies#_onFavoriteMoviesStoreChange :: movie', movie)
		}

		if (movies) {
			console.log('MARCIN :: FavoriteMovies#_onFavoriteMoviesStoreChange :: movies', movies)
		}
	}

})