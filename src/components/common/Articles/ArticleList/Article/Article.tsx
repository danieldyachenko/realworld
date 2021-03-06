import React, {FC} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {ArticlesProps} from "./ArticleTypes";
import {
    ArticleRoot,
    FavoriteButton,
    ListBasis,
    ListBasisLeft, ListBasisRight,
    ListDescription,
    ListTitle, ReadMore
} from "./ArticleStyles";
import Chip from "@material-ui/core/Chip";
import {TagsBox} from "../../../Tags/TagsStyles";
import {useHistory, useRouteMatch} from "react-router-dom";
import {
    favoriteArticle,
    getGlobalArticlesByTag,
    unFavoriteArticle
} from "../../../../../store/actions/articlesActions";
import {useDispatch, useSelector} from "react-redux";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {RootState} from "../../../../../store/store";

const Article: FC<ArticlesProps> = ({username, createdAt, title, description,
                     favorited, favoritesCount, tagList, slug, image}) => {

    const history = useHistory()

    const dispatch = useDispatch()

    let {limit, offset} = useSelector((state: RootState) => state.articles);

    const match = useRouteMatch("/");

    return (
        <ArticleRoot>
            <ListItem disableGutters>
                <ListItemAvatar>
                    <Avatar src={image}/>
                </ListItemAvatar>
                <ListItemText primary={username} secondary={createdAt}/>
                <FavoriteButton
                    startIcon={favorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
                    onClick={
                        favorited
                            ? () => dispatch(unFavoriteArticle(slug))
                            : () => dispatch(favoriteArticle(slug))
                    }
                >
                    {favoritesCount}
                </FavoriteButton>
            </ListItem>
            <ListBasis>
                <ListBasisLeft>
                    <ListTitle>{title}</ListTitle>
                    <ListDescription>{description}</ListDescription>
                    <ReadMore onClick={() => history.push(`/article/${slug}`)}>Read more...</ReadMore>
                </ListBasisLeft>
                <ListBasisRight>
                    <TagsBox>
                        { tagList.map((tag, index) =>
                            <Chip
                                label={tag}
                                size="small"
                                key={tag + index}
                                onClick={() => match?.isExact && dispatch(getGlobalArticlesByTag(tag, offset, limit))}
                            />
                        )}
                    </TagsBox>
                </ListBasisRight>
            </ListBasis>
        </ArticleRoot>
    )
}

export default Article
