import React, {useEffect} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Articles from "../common/Articles/Articles";
import {ProfileMain} from "./ProfileStyles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ProfileState} from "../../store/types/profileTypes";
import {getMyArticles, setActiveTab} from "../../store/actions/articlesActions";

const Profile = () => {

    const profileState: ProfileState = useSelector((state: RootState) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyArticles(profileState.user.username))
        dispatch(setActiveTab(0))
    }, [])

    return (
        <>
            <Header/>
            <ProfileHeader
                username = {profileState.user.username}
                bio={profileState.user.bio}
            />
            <ProfileMain>
                <Articles/>
            </ProfileMain>
            <Footer/>
        </>
    )
}

export default Profile
