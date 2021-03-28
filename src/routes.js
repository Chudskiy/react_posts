import {Route, Switch} from "react-router";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import GlobalFeed from "./pages/GlobalFeed/GlobalFeed";
import PostForm from "./pages/PostForm/PostForm";
import ShowPost from "./pages/ShowPost/ShowPost";

export default () => {
    return(
        <Switch>
            <Route path='/' exact component={GlobalFeed} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/posts/create' component={PostForm} />
            <Route path='/posts/:id/show' component={ShowPost} />
        </Switch>
    )
}


