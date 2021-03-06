import React from 'react'
import {StyledButton} from "../../styled/rest";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {useHistory} from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import PostAddIcon from '@material-ui/icons/PostAdd';

const AuthBlock = () => {

    const username: string = useSelector((state: RootState) => state.profile.user.username);

    const history = useHistory();
    const toEditor = () => history.push('/newArticle')
    const toSettings = () => history.push('/settings')
    const toProfiles = () => history.push(`/profiles/${username}`)

    return (
        <>
            <StyledButton startIcon={<PostAddIcon/>} onClick={toEditor}>New Article</StyledButton>
            <StyledButton startIcon={<SettingsIcon/>} onClick={toSettings}>Settings</StyledButton>
            <StyledButton onClick={toProfiles}>{username}</StyledButton>
        </>
    )
}

export default AuthBlock
