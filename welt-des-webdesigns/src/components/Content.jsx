import chapterConfig from "../chapters/config.jsx";
import DefaultPage from "../chapters/DefaultPage.jsx";

function Content({chapter}){
    let ActiveChapterComponent = chapterConfig[chapter]
    if (!ActiveChapterComponent){
        ActiveChapterComponent = chapterConfig["default"]
    }
    return (
        <main className="main">
            <ActiveChapterComponent/>
        </main>
    )
}

export default Content;