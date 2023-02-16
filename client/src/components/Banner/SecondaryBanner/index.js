import { memo } from "react";
import { MyBox } from "~/styles/banner";
import { MyTypography } from "~/styles/banner";

const SecondaryBanner = memo(({ title }) => {
    return (
        <MyBox background="true">
            <MyTypography variant="h1">{title}</MyTypography>
        </MyBox>
    );
});

export { SecondaryBanner };
