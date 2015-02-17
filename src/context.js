import iniettore from 'iniettore'
import { VALUE, LAZY, PROVIDER, SINGLETON, CONSTRUCTOR } from 'iniettore'

import { ADD_MOVIE, REMOVE_MOVIE } from './constants/actionTypes'
import { CHANGE_EVENT } from './constants/routingTypes'

import AppDispatcher from './dispatcher/AppDispatcher'
import MovieStore from './stores/MovieStore'

var mainContext = iniettore.create(function (map) {
	// map('answer').to(42).as(VALUE)
	// map('question').to(UltimateQuestion).as(LAZY, SINGLETON, CONSTRUCTOR).injecting('answer')
	map('appDispatcher').to(AppDispatcher).as(LAZY, SINGLETON, CONSTRUCTOR)
	map('movieStore').to(MovieStore).as(LAZY, SINGLETON, CONSTRUCTOR)
})

var appDispatcher = mainContext.get('appDispatcher')
var movieStore = mainContext.get('movieStore')

appDispatcher.register(function(payload) {
	var source = payload.source
	var type = payload.action.type
	var data = payload.action.data

	console.log('appDispatcher.register', type, data)

	switch(type) {
		case ADD_MOVIE:
			movieStore.addMovie(data)
			break
		case REMOVE_MOVIE:
			movieStore.removeMovie(data)
			break
	}

	movieStore.emitChange()

	return true
})

export default mainContext
