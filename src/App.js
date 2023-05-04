import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos/todos";
import Albums from "./components/albums/albums";
import Comments from "./components/comments/comments";
import Posts from "./components/posts/posts";

function App() {
    return(
        <div>
            <div className={'links'}>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/todos'}>Todos</Link></div>
                <div><Link to={'/albums'}>Albums</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>
            <div>

                <Routes>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                </Routes>
            </div>
        </div>

    )

}

export default App;
