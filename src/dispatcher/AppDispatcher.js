import { Dispatcher } from 'flux'
import { VIEW_ACTION, SERVER_ACTION } from '../constants/sourceTypes'

export default class AppDispatcher extends Dispatcher {
	constructor() {
		super()
	}

	handleViewAction(action) {
		this.dispatch({ source: VIEW_ACTION, action })
	}

	handleServerAction(action) {
		this.dispatch({ source: SERVER_ACTION, action })
	}
}
