const courseData = {
    html: {
        titel: "HTML",
        navigationPages: [
            {
                heading: "Einführung in HTML",
                pages: [
                    {id: "start", titel: "Start"},
                    {id: "wasistHTML", titel: "Was ist HTML?"},
                    {id: "wasBraucheIchUmAnzufamgen", titel: "Was brauche ich um anzufangen?"}
                ]
            },
            {
                heading: "HTML Elemente und Attribute",
                pages: [
                    {id: "elemente", titel: "Elemente"},
                    {id: "attribute", titel: "Attribute"},
                ]
            },
            {
                heading: "Aufbau eines HTML Dokuments",
                pages: [
                    {id: "grundstruktur", titel: "Die Grundstruktur (<!DOCTYPE>, <html>, <head>, <body>)"},
                    {id: "mataTags&zeichencodierung", titel: "Meta-Tags und Zeichencodierung"},
                ]
            },
            {
                heading: "Textstrukturierung",
                pages: [
                    {id: "ueberschriften", titel: "Überschriften (<h1>-<h6>)"},
                    {id: "absaetze", titel: "Absätze (<p>)"},
                    {id: "textformatierungen", titel: "Textformatierung (<strong>, <em>, <mark> etc.)"},
                    {id: "kommentare", titel: "Kommentare"}
                ]
            },
            {
                heading: "Listen und Tabellen",
                pages: [
                    {id: "listen", titel: "Listen"},
                    {id: "tabellen", titel: "Tabellen"},
                ]
            },
            {
                heading: "Links und Navigation",
                pages: [
                    {id: "hyperlinks", titel: "Hyperlinks (<a>)"},
                    {id: "pfade", titel: "Relative und Absolute Pfade"},
                    {id: "ankerlinks", titel: "Ankerlinks"}
                ]
            },
            {
                heading: "Bilder und Medien",
                pages: [
                    {id: "bildereinfuegen", titel: "Bilder einfügen <img>"},
                    {id: "audioeinfuegen", titel: "Audio einfügen <audio>"},
                    {id: "videoeinfuegen", titel: "Video einfügen <video>"},
                    {id: "einbettungen", titel: "Einbettungen <iframe>"}
                ]
            },
            {
                heading: "Semantisches HTML",
                pages: [
                    {id: "warumsematik", titel: "Warum Semantik wichtig ist"},
                    {id: "strukturelemente", titel: "Strukturelemente (<header>, <footer>,<main>, <section>, <article>, <nav>)"},
                    {id: "barrierefreiheit", titel: "Barrierefreiheit"},
                    {id: "seo", titel: "SEO-Grundlagen"}
                ]
            },
            {
                heading: "HTML Formulare",
                pages: [
                    {id: "formelement", titel: "Das <form> Element"},
                    {id: "eingabeFelder", titel:"Eingabefelder (Input)"},
                    {id: "textbereiche", titel: "Textbereiche <textarea>"},
                    {id: "auswahlfelder", titel: "Auswahlfelder <select>, <option>"},
                    {id: "label", titel: "Label"}
                ]
            },

        ]
    },
    css: {
        titel: "CSS",
        navigationPages: [
            {
                heading: "Einfürung in CSS",
                pages: [
                    {id: "CssStart", titel: "Start"},
                    {id: "WasIstCss", titel:"Was ist CSS?"},

                ]
            },
            {
                heading: "Einbindung von CSS",
                pages: [
                    {id: "inlineStyles", titel: "Inline Styles"},
                    {id: "interneStylesheets", titel:"Interne Stylesheets"},
                    {id: "externeStylesheets", titel:"Externe Stylesheets"},


                ]
            },
            {
                heading: "Selektoren",
                pages: [
                    {id: "selectoren", titel: "Element-, Klassen und ID-Selektoren"},
                    {id: "interneStylesheets", titel:"Interne Stylesheets"},
                    {id: "externeStylesheets", titel:"Externe Stylesheets"},


                ]
            },
        ]
    },
    js: {
        titel: "JavaScript",
        navigationPages: [
            {id: "aboutJS", titel: "Was ist Javascript?"},
        ]
    }

}
export default courseData;