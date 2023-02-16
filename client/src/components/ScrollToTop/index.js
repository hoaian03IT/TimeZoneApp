import { ScrollToTopButton } from "~/styles/global";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState("false");

    const distanceToShowButton = 1000;

    const handleToggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled >= distanceToShowButton) setVisible("true");
        else setVisible("false");
    };

    window.addEventListener("scroll", handleToggleVisible);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
        });
    };

    return (
        // visible && (
        <ScrollToTopButton visible={visible} disableRipple={true} onClick={handleScrollTop}>
            <KeyboardDoubleArrowUpIcon />
        </ScrollToTopButton>
        // )
    );
}

export { ScrollToTop };
