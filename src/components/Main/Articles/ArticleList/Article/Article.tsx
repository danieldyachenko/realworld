import React, {FC} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IArticlesProps} from "./ArticleTypes";
import {
    ArticleRoot,
    FavoriteButton,
    FavoriteCount,
    FavoriteIcon,
    ListBasis,
    ListBasisLeft, ListBasisRight,
    ListDescription,
    ListTitle, ReadMore
} from "./ArticleStyles";
import Chip from "@material-ui/core/Chip";
import {TagsBox} from "../../../Tags/TagsStyles";
import {articlesAPI} from "../../../../../api/api";

const Article: FC<IArticlesProps> = ({username, createdAt, title, description, favorited,
                                         favoritesCount, tagList, slug}) => {

    const favoriteArticle = (slug: string) => {
        console.log(slug)
        articlesAPI.favoriteArticle(slug)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <ArticleRoot>
            <ListItem disableGutters>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={username} secondary={createdAt}/>
                <FavoriteButton onClick={() => favoriteArticle(slug)}>
                    <FavoriteIcon color='primary'/>
                    <FavoriteCount>{favoritesCount}</FavoriteCount>
                </FavoriteButton>
            </ListItem>
            <ListBasis>
                <ListBasisLeft>
                    <ListTitle>{title}</ListTitle>
                    <ListDescription>{description}</ListDescription>
                    <ReadMore>Read more...</ReadMore>
                </ListBasisLeft>
                <ListBasisRight>
                    <TagsBox>
                        { tagList.map((tag, index) => <Chip label={tag} size="small" key={tag + index}/>) }
                    </TagsBox>
                </ListBasisRight>
            </ListBasis>
        </ArticleRoot>
    )
}

export default Article
