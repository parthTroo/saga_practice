import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "./Action";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.myReducer.users);
	console.log("users", users);
	return (
		<div>
			<button onClick={() => dispatch(getUserFetch())}>Get Users</button>
			<h3>::::Users Data :::</h3>
			<div>
				{users && users.map((user, i) => <div key={i}> {user.username}</div>)}
			</div>
		</div>
	);
}

export default App;
