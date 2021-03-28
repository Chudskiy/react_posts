import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostAsync, dislikeAsync, getPostAsync, likeAsync} from "../../store/actions/actions";
import {Button} from "antd";
import {PostHeader, PostTools, StyledFooter, Wrapper} from "./StyledPost";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";


const ShowPost = (props) => {
    const postId = props.match.params.id;

    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.currentPost);
    const currentUser = useSelector(state => state.users.currentUser);


    const title = post && post.title;
    const body = post && post.body;
    const image = post && post.image;
    // const createdAT = post && post.created_at.slice(0, 10);
    const createdAT = post && post.created_at;
    const authorId = post && post.userId;

    const isUserIsPostAuthor = currentUser.id === authorId;


    useEffect(() => {
        dispatch(getPostAsync(postId));
    }, [])

    const handleDeletePost = () => {
        dispatch(deletePostAsync(postId));

        props.history.push('/');
    };

    const like = 'like';
    const dislike = 'dislike';

    const handleLike = () => {
        dispatch(likeAsync(postId, {type: like}));

        props.history.push('/');
    };

    const handleDislike = () => {
        dispatch(dislikeAsync(postId, {type: dislike}));

        props.history.push('/');
    };


    return (
        <Wrapper>
            <PostHeader>
                <p>Created: {createdAT}</p>
            </PostHeader>

            <h1>{title}</h1>
            <p>{body}</p>
            <img style={{objectFit: 'contain'}} src={image} alt=''/>

            <StyledFooter>
                <PostTools>
                    <Button
                        type='primary'
                        size='small'
                        ghost
                        onClick={handleLike}
                    >
                        <LikeOutlined/>
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        type='danger'
                        size='small'
                        ghost
                        onClick={handleDislike}
                    >
                        <DislikeOutlined/>
                    </Button>
                </PostTools>
                {isUserIsPostAuthor && (
                    <Button
                        type='danger'
                        size='small'
                        onClick={handleDeletePost}
                    >
                        Delete Post
                    </Button>
                )}
            </StyledFooter>
        </Wrapper>
    );
};

export default ShowPost;
