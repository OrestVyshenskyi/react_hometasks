import './App.css'
import Posts from "./components/posts/posts";
import SpaceShips from "./components/spaceShips/spaceShips";
import Users from "./components/users/users";
import {useState} from "react";
import UserPosts from "./components/userPosts/userPosts";


function App() {
    const [userId, setUserId] = useState(null);
    return(
        <div className={'container'}>
            {/*<Posts/>*/}
            {/*<SpaceShips/>*/}
            <div><Users setUserId={setUserId}/></div>
            <div>{userId &&
                <UserPosts userId={userId}/>
            }</div>
        </div>
    )

}

export default App;
