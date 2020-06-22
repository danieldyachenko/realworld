import React, {FC, useReducer, useState} from 'react'
import PostComment from "./PostComment/PostComment";
import {CommentsRoot} from "./CommentsStyles";
import {commentsReducer, initialState} from "./CommentsReducer";
import {commentsAPI} from "../../../api/api";
import {CommentsProps} from "./CommentsTypes";

const Comments: FC<CommentsProps> = ({slug}) => {

    const [state, dispatch] = useReducer(commentsReducer, initialState)

    const postComment = () => {
        commentsAPI.postComment(slug, state.commentInput)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <CommentsRoot>
            <PostComment
                state={state}
                dispatch={dispatch}
                postComment={postComment}
            />
        </CommentsRoot>
    )
}

export default Comments
