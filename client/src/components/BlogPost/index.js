import { Link } from "react-router-dom";
import { MyBox, MyBoxWrapper, MyImage, MyInfoLink, MyPara, MyTitle } from "~/styles/blog";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Typography } from "@mui/material";

function BlogPost({ item }) {
    return (
        <MyBoxWrapper>
            <MyImage component="img" src={item.img} alt="post" />

            <MyBox>
                <MyTitle fontSize="1.5" component={Link} to="/blog">
                    {item.title}
                </MyTitle>
                <MyPara variant="subtitle1">{item.para}</MyPara>
                <MyInfoLink component={Link} to="/home" marginRight={2}>
                    <PeopleAltIcon sx={{ fontSize: "1rem" }} />
                    <Typography variant="subtitle2" sx={{ display: "inline", marginLeft: "4px" }}>
                        Travel, LifeStyle
                    </Typography>
                </MyInfoLink>
                <MyInfoLink component={Link} to="/home">
                    <CommentOutlinedIcon sx={{ fontSize: "1rem" }} />
                    <Typography variant="subtitle2" sx={{ display: "inline", marginLeft: "4px" }}>
                        03 comments
                    </Typography>
                </MyInfoLink>
            </MyBox>
        </MyBoxWrapper>
    );
}

export { BlogPost };
