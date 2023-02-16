import { PrimaryBanner } from "~/components/Banner/PrimaryBanner";
import { GalleryArea } from "~/components/GalleryArea";
import { Method } from "~/components/Method";
import { NewArrivals } from "~/components/NewArrivals";
import { PopularItems } from "~/components/PopularItems";
import { WatchArea } from "~/components/WatchArea";

function Home() {
    return (
        <>
            <PrimaryBanner />
            <NewArrivals />
            <GalleryArea />
            <PopularItems />
            <WatchArea />
            <Method />
        </>
    );
}

export default Home;
