import '../index.css'

function NextChapterBox({topic}){
    return (
        <div className="box">
            <p>Ìm folgendem Kapitel lernst du {topic}</p>
            <button><span>weiter</span>»</button>
        </div>
    )
}
export default NextChapterBox;