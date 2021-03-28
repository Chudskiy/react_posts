import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPostsAsync} from "../../store/actions/actions";
import {Button} from "antd";
import {Wrapper} from "./StyledGlobalFeed";

const GlobalFeed = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    console.log('fetched posts = ', posts);


    useEffect(() => {
                dispatch(fetchPostsAsync());
    }, [dispatch])

    // const gelLikesLength = (object) => {
    //     const likesLength = Object.keys(object).map(id => (
    //
    //     ))
    // }
    console.log(15)


    const renderPosts = Object.keys(posts.byId).map(postId => (
        <div>
            <Link to={`/posts/${postId}/show`}>
                <h2>TITLE: {posts.byId[postId].title}</h2>
            </Link>
            <p>----------------</p>
            <p>{posts.byId[postId].body}</p>
            {/*<p>Likes{posts.byId[postId].likes.length}</p>*/}
            <img src={posts.byId[postId].body} alt=''/>
            <p>==================</p>
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
