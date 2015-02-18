import { ADD_MOVIE, REMOVE_MOVIE, QUERY_MOVIE } from '../constants/actionTypes'
import context from '../context'

var appDispatcher = context.get('appDispatcher')

export default {

	addMovie(data) {
		appDispatcher.handleViewAction({ type: ADD_MOVIE, data })
	},

	removeMovie(data) {
		appDispatcher.handleViewAction({ type: REMOVE_MOVIE, data })
	},

	queryMovie(data) {
		appDispatcher.handleViewAction({ type: QUERY_MOVIE, data })
	}

}