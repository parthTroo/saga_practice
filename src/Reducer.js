import { GET_USER_SUCCESS } from "./Action";

const myReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case GET_USER_SUCCESS:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};

export default myReducer;
