import { useMediaQuery } from "react-responsive";

import Menu from "../common/Menu";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";

function Project() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <Menu page='작품'/>
            <main className="contentsContainer">
                <section>
                    {isMobile?<></>:<Title title="작품" />}
                    <DualLink link="project" indiv="개인" team="팀" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Project;