import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPostsAsync} from "../../store/actions/actions";
import {Button} from "antd";
import {Wrapper} from "./StyledGlobalFeed";

const GlobalFeed = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    useEffect(() => {
                dispatch(fetchPostsAsync());
    }, [dispatch])


    const renderPosts = Object.keys(posts.byId).map(postId => (
        <div>
            <Link to={`/posts/${postId}/show`}>
                <h2>TITLE: {posts.byId[postId].title}</h2>
            </Link>
            <p>{posts.byId[postId].body}</p>
            <img src={posts.byId[postId].body} alt=''/>
        </div>
    ))

    return (
        <Wrapper>
            <h1>Global feed</h1>
            <Link to='/posts/create'>
                <Button type='primary'>
                    Add Post
                </Button>
            </Link>
            {renderPosts}
        </Wrapper>
    );
};

export default GlobalFeed;
