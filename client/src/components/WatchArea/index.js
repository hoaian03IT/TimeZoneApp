import { Container } from "@mui/system";
import { watchAreaList } from "~/data/watchArea";
import { WatchAreaItem } from "./WatchAreaItem";

function WatchArea() {
    return (
        <Container>
            {watchAreaList.map((item, index) => (
                <WatchAreaItem key={index} reverse={item.reverse} item={item} />
            ))}
        </Container>
    );
}

export { WatchArea };
