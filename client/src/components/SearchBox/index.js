import { memo, useState } from "react";
import { IconButton, Slide } from "@mui/material";
import { MySearchField, SearchBoxContainer } from "~/styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBox = memo(({ visible, onClose }) => {
    const [valueSearch, setValueSearch] = useState("");
    const sendValueSearch = () => {
        console.log("Search>> ", valueSearch.trim());
        onClose();
    };
    return (
        <Slide direction="down" in={visible} sx={{ position: "fixed" }}>
            <SearchBoxContainer>
                <MySearchField
                    value={valueSearch}
                    onChange={(e) => setValueSearch(e.target.value)}
                    placeholder="Search..."
                    variant="standard"
                    color="primary"
                    focused
                />
                <IconButton onClick={sendValueSearch}>
                    <SearchIcon
                        sx={{ color: "#999", fontSize: { md: "3rem", xs: "2rem" }, transform: "translateY(10px)" }}
                    />
                </IconButton>
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: "10%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                    }}>
                    <CloseIcon sx={{ fontSize: { md: "3rem", xs: "2rem", color: "#999" } }} />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    );
});

export { SearchBox };
