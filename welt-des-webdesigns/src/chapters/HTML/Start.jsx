import NextChapterBox from "../../components/NextChapterBox.jsx";
function Start(){
    return (
        <div className="pages">
        <h2>Start</h2>
            <h3>Für wen ist die Webseite gedacht?</h3>
            <ul>
                <li>Anfänger ohne Vorkenntnisse</li>
                <li>Schüler, Studirende und Selbstlerner</li>
                <li>Alle die webseiten verstehen oder erstellen möchten</li>
            </ul>
            <h3>Was lernst du hier?</h3>
            <ul>
                <li>HTML-Dokumente selbst schreiben</li>
                <li>Webseiten sinvoll strukturieren</li>
                <li>Sauberen und verständlichen Code erstellen</li>
                <li>Eine solides wissen über HTML, CSS und Javascript</li>
            </ul>
            <NextChapterBox
                topic={
                    <>
                        was HTML ist.
                    </>
                }
            />
        </div>
    )
}
export default Start;