var data = [
    {
        date: '08.04.2014 - 30.04.2014',
        type: "ogolnoukladowa",
        category: "Pobyt w szpitalu",
        symptoms: [
            "goraczka 39.5 st. C", "dreszcze", "kaszel",
            "kreatynina 5-7", "bialko 3.8-5.4",
            "prokalcytonina 0.5-3", "Transferyna 0.7<1.6",
            "Ferrytyna 993>274", "Wiazanie zelaza 41<110"
        ],
        diagnoses: [
            "Infekcja ukladu oddechowego. P.jirovecii", "Przewlekla choroba nerek - G5",
            "RZS", "Amyloidoza AA", "Zespol nerczycowy", "Nadcisnienie tetnicze", "Rozedma pluc"
        ],
        medicines: [
            { name: 'Augmentin', comments: 'Zla tolerancja ciprofloksacyny (bole sciegien)' },
            { name: 'Tienam', comments: 'brak reakcji? (zamiast ciprofloksacyny)' },
            { name: 'Klarytromycyna', comments: 'brak reakcji?' },
            { name: 'Biseptol', comments: 'przeciw P.jirovecii' },
            { name: 'Metylprednizon', comments: 'zmniejsz.dawke' },
            { name: 'Azotrypina', comments: 'zmniejsz.dawke' },
            { name: 'KKCz', comments: 'przetocz.2j.brak powik.' },
            { name: 'Cewnik do HD', comments: 'prawa z.szyj.wew.' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Imuran', comments: '50 mg' },
            { name: 'Metypred', comments: '8mg 3 tyg, potem 4mg' },
            { name: 'Controloc', comments: '2x20mg' },
            { name: 'Calperos', comments: '3x1g' },
            { name: 'Atoris', comments: '20mg wieczorem' },
            { name: 'Biseptol', comments: '2x480mg 1 tyg.' }
        ],
        scans: getScans(0, 8)
    },
    {
        date: '21.02.2014 - 28.02.2014',
        type: "ogolnoukladowa",
        category: "Pobyt w szpitalu",
        symptoms: [
            "kaszel", "stan podgoraczkowy", "obrzek wokol kostek",
            "neutrocyty 13>7", "hematokryt 37<40", "Hemoglobina 12.4<13",
            "monocyty 1.2>1", "Krw.czerw.4.2<4.5",
            "RDW 15.4>14", "Krw.biale 17.4>10",
            "IG 0.11>0.03", "Eozynocyty 0.1<1",
            "Fosfor 5.2>4.7", "Wapn 8.6<8.9",
            "Azot mocz.57.9>25.7", "kreatynina 3.3>1.2",
            "Amyloid 22>6", "Fibrynogen 4.5>3.5",
            "Dob.ut.bialka 6.16>0.08"
        ],
        diagnoses: [
            "przewlekla niewydolnosc nerek", "bialkomocz", "RZS",
            "amyloidoza wtorna", "nadcisnienie tetnicze", "rozedma pluc"
        ],
        medicines: [
            { name: 'Metypred', comments: 'ciagle' },
            { name: 'Metotrexat', comments: 'krotkotrwale' },
            { name: 'Azatiopryna', comments: '100mg (imuran)' },
            { name: 'Nie brac w trakcie imuranu', comments: 'Allopurinol (milurit, allupol)' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Imuran', comments: '100mg 1xD' },
            { name: 'Metypred', comments: '8mg' },
            { name: 'Furosemid', comments: 'w razie obrz.1 tabl.' },
            { name: 'Kalipoz', comments: 'w razie obrz.1 tabl.' },
            { name: 'Calperos', comments: '1g (wapno)' },
            { name: 'Alfadiol', comments: '0.5ug wieczor' },
            { name: 'Prenessa', comments: '4mg wieczor' },
            { name: 'Atoris', comments: '20mg wieczor' },
            { name: 'Soda oczyszczona', comments: '1x0.5lyz.p.pos.' }
        ],
        scans: getScans(9, 16)
    },
    {
        date: '20.08.2013 - 04.09.2013',
        type: "ogolnoukladowa",
        category: "Pobyt w szpitalu",
        symptoms: [
            "Obrzeki drobnych stawow rak, nadgarstkow oraz prawego stawu skokowego bez sztywnosci porannych",
            "OB 33", "CRP 6.1", "RF 82", "Proteinograf a1 6.9", "Proteinograf a2 15.9",
            "Mocznik 103", "kreatynina 2.97", "GFR 2", "hipokalcemia Ca 7.89",
            "Bialkomocz 4,7"

        ],
        diagnoses: [
            "Reumatoidalne zapalenie stawow", "Dna moczanowa", "Przewlekla choroba nerek. Amyloidoza wtorna.",
            "Nadcisnienie tetnicze", "Przerost gruczolu krokowego",
            "Zapalenie blony sluzowej zoladka i przelyku w wywiadzie",
            "Gruzlica pluc w wywiadzie. Rozedma pluc.",
            "Brak cech akwtynosci RZS - brak zaostrzenia RZS"
        ],
        medicines: [
            { name: 'Metypred', comments: '4mg' },
            { name: 'Furosemid' },
            { name: 'Kalipoz' },
            { name: 'Cerutin' },
            { name: 'Calcium Polfa' },
            { name: 'Suplementacja Ca i D3' },
            { name: 'Fizjoterapia' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Metypred', comments: '4mg rano p.o.' },
            { name: 'Nolpaza', comments: '20mg rano p.o.' },
            { name: 'Furosemid', comments: '1 tabl.rano p.o.' },
            { name: 'Kalipoz', comments: '1 tabl.rano p.o.' },
            { name: 'Omnic', comments: '0.4mg tabl./dz p.o.' },
            { name: 'Calperos', comments: '2x1g p.o.' },
            { name: 'Vigantoletten', comments: '2000j/dz p.o.' },
            { comments: 'kuracja na 2 miesiace'}
        ],
        scans: [ scans[17], scans[18] ]
    },
    {
        date: '31.03.2010 - 12.04.2010',
        type: "ogolnoukladowa",
        category: "Pobyt w szpitalu",
        symptoms: [
            "zakrzepica",
            "goraczka w szpit.",
            "podejrzenie zap.ukl.mocz.w szpit.",
            "kreatynina 1.9-6.6",
            "CRP 17.7mg%"
        ],
        diagnoses: [
            "Zaostrzenie przewleklej niewydolnosci nerek", "Przewlekla choroba nerek w stanie 3",
            "Zespol nerczycowy", "Reuomatoidalne zapalenie stawow",
            "Amyloidoza wtorna", "Zakrzepica proksymalna i dystalna zyl glebokich konczyny dolnej prawej",
            "Stan po unieruchomieniu w opatrunku gipsowym konczyny dolnej prawej z powodu zerwania sciegna Achillesa",
            "Nadcisnienie tetnicze", "Rozedma pluc", "Gruzlica pluc w wywiadzie"
        ],
        medicines: [
            { name: 'Albumin' },
            { name: 'Furosemid' },
            { name: 'Ciprofloksacyna', comments: "obnizenie kreatyniny do 1.85mg% (GFR 37ml/min)" },
            { name: 'Clexane' },
            { name: 'Sintrom' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Metypred', comments: "4mg 2 tabl.rano" },
            { name: 'Tritace', comments: "5mg 1/2 tabl.rano" },
            { name: 'Zocor', comments: "20mg 1 tabl.wieczor" },
            { name: 'Osteovit', comments: "1,0 2x1kaps" },
            { name: 'Furosemid', comments: "2x1tabl" },
            { name: 'Kaldyum', comments: "2x1kaps" },
            { name: 'Sintrom', comments: "2mg/1mg" },
            { name: 'Polprazol', comments: "20mgx1kaps rano" }
        ],
        scans: getScans(19, 22)
    },
    {
        date: '05.02.2010 - 16.02.2010',
        type: "nerki",
        category: "Pobyt w szpitalu",
        symptoms: [
            "mierne obrzeki",
            "diagnostyka bialkomoczu",
            "Proteus Mirabilis",
            "E.coli",
            "Proba biopsji"
        ],
        diagnoses: [
            "Proteus mirabilis",
            "Enterococcus sp.",
            "Escherichia coli",
            "Proteus sp.",
            "Przewlekla niewydolnosc nerek",
            "Obserwacja w kierunku amyloidozy",
            "Stan po zerwaniu sciegna achillesa konczyny dolnej prawej",
            "Reumatoidalne zapalenie stawow",
            "Nadcisnienie tetnicze",
            "Rozedma pluc",
            "Gruzlica pluc w wywiadzie",
            "Zmiany zwyrodnieniowe kregoslupa L-S i stawow obu rak",
            "Bialkomocz"
        ],
        medicines: [
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Metypred', comments: "8mg" },
            { name: 'Tritace', comments: "5mg" },
            { name: 'Kalipoz', comments: "1 tabl" },
            { name: 'Tulip', comments: "20mg wieczor" },
            { name: 'Osteovit', comments: "2x500mg" },
            { name: 'Bisocard', comments: "5mg" },
            { name: 'Furosemid', comments: "2x1tabl" },
            { name: 'Fragmin', comments: "5000j podskornie" },
            { name: 'Ciprinol', comments: "2x500mg 10dni" }
        ],
        scans: getScans(25, 27).concat(scans[23])
    },
    {
        date: '03.02.2009',
        type: "uklad pokarmowy",
        category: "Badanie",
        symptoms: [
            "Pluca",
            "Brzuch (gastroskopia)"
        ],
        diagnoses: [
            "Oeosphagitis A (Wg LA)",
            "Gastritis antralis",
            "W przelyku krotka linijna zywoczerwona nadzerka",
            "Przepuklina rozworu przelykowego",
            "Antrum zaczerwienione",
            "Jamy oplucnowe wolne od plynu",
            "Zrosty oplucnowe na lewej kopule przepony",
            "Pluca rozedmowe",
            "Ponizej wnek plucnych zmiany zapalne"
        ],
        medicines: [
            { name: "Zalecenia:" },
            { name: "Polprazol2x1", comments: "na czczo 2 msc"}

        ],
        scans: [scans[80]].concat(getScans(91, 92))
    },
    {
        date: '02.03.2010 - 05.03.2010',
        type: "nerki",
        category: "Pobyt w szpitalu",
        symptoms: [
            "Biopsja nerki",
            "Staphylococcus epidermidis"
        ],
        diagnoses: [
            "Zespol nerczycowy",
            "Obserwacja w kierunku amyloidozy",
            "Stan po zerwaniu sciegna Achillesa w konczynie dolnej prawej",
            "Reumatoidalne zapelenie stawow",
            "Nadcisnienie tetnicze",
            "Rozedma pluc",
            "Gruzlica pluc w wywiadzie",
            "Zmiany zwyrodnieniowe kregoslupa L-S i stawow obu rak"
        ],
        medicines: [
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Metypred', comments: "8mg" },
            { name: 'Tritace', comments: "5mg" },
            { name: 'Kalipoz', comments: "1 tabl" },
            { name: 'Tulip', comments: "20mg wieczor" },
            { name: 'Osteovit', comments: "2x500mg" },
            { name: 'Bisocard', comments: "5mg" },
            { name: 'Furosemid', comments: "2x1tabl" },
            { name: 'Fragmin', comments: "5000j podskor.od 7.03" }
        ],
        scans: getScans(28, 29).concat(scans[24])
    },
    {
        date: '17.03.2010 - 31.03.2010',
        category: "Pobyt w szpitalu",
        symptoms: [
            "Masywna zakrzepica zyly konczyny dolnej prawej",
            "Bialko 4+ ujemny 355", "CRP w normie wpierw",
            "Leukocyty 22>10", "Plytki krwi 476>440",
            "Neutrocyty 16>8", "Limfocyty% 12<18",
            "Monocyty 2.1>1", "CRP 49>5", "Hemoglobina 11.5<14",
            "Hematokryt 32<38", "Erytrocyty 4<4.5",
            "Glukoza w osoczu 141>106", "Kreatynina 6.3>1.2",
            "Triglicerydy 219>150", "Mocznik 150>50",
            "Cholesterol 246>200", "OB 59>20",
            "D-Dimer 3900>500", "Fibrynogen 7.7>4",
            "Bialko 48<64", "Albumina 20 < 28",
            "Rownowaga kwas-zasad < ponizej wart.",
            "Zaawansowane zmiany wklokniste w plucu lewym"
        ],
        diagnoses: [
            "Zakrzepica proksymalna i dystalna zyl glebokich konczyny dolnej prawej",
            "Zakazenie ukladu moczowego",
            "Amyloidoza nerek",
            "Przewlekla choroba nerek w stadium 5",
            "Nadcisnienie tetnicze",
            "RZS",
            "Rozedma pluc",
            "TBC w wywiadzie",
            "Stan po zerwaniu sciegna Achillesa prawego",
            "Stan po opatrunku gipsowym (do 12.03.2010r.)",
            "Pelne zerwanie sciegna Achillesa",
            "Wysiek w kaletce sciegna Achillesa",
            "Masywna zakrzepica zyl glebokich konczyny dolnej prawej"
        ],
        medicines: [
            { name: 'HDCz', comments: "8mg rano" },
            { name: 'Albuminy', comments: "2x100ml" },
            { name: 'Dwuweglany', comments: "20ml" },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Clexane', comments: "2x40mg s.c." },
            { name: 'Metypred', comments: "8mg rano" },
            { name: 'Polprazol', comments: "20mg rano" },
            { name: 'Tritace', comments: "5mg rano" },
            { name: 'Furosemid', comments: "4x40mg i.v." },
            { name: 'Zocor', comments: "20mg wieczor" },
            { name: 'Bisocard', comments: "5mg rano" },
            { name: 'Osteovit', comments: "2x500mg" }

        ],
        scans: getScans(30, 44).concat(scans[98])
    },
    {
        date: '31.07.2009 - 20.08.2009',
        type: "stawy",
        category: "Pobyt w szpitalu",
        symptoms: [
            "Nawracajace bole rak, stawow biodrowych i barkowych",
            "Do rozwazenia wykluczenie dny moczanowej",
            "Podwyzszone par.zapalne",
            "Dodatni czynnik reumatoid.",
            "Wysokie miano przeciwcial przeciwcytrulinowych"
        ],
        diagnoses: [
            "Reumatoidalne zapalenie stawow okres II f 1/2",
            "Nadcisnienie tetnicze",
            "Zapalenie blony sluzowej przelyku i zoladka",
            "Rozedma pluc",
            "Gruzlica pluc w wywiadzie",
            "Bialkomocz",
            "Dna moczanowa"
        ],
        medicines: [
            { name: 'Metypred' },
            { name: 'Methotrexat' },
            { name: 'Acidum folicum' },
            { name: 'Prazol' },
            { name: 'Enarenal' },
            { name: 'Kinezyterapia' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Metypred', comments: "12mg rano" },
            { name: 'Prazol', comments: "20mg rano" },
            { name: 'Tritace', comments: "5mg rano" },
            { name: 'Apap', comments: "w razie bolu 2x" },
            { name: 'Vitrium calcium + D3', comments: "2x1" },
            { name: 'Milurit', comments: "200 2x100" }

        ],
        scans: getScans(45, 46)
    },
    {
        date: '19.05.2009 - 26.05.2009',
        type: "ogolnoukladowa",
        category: "Diagnostyka w szpitalu",
        symptoms: [
            "Diagnostyka ch.tkanki lacznej",
            "Zapalenie pluc",
            "Brak cech radiologicznych ZZSK",
            "Brak klinicznych oznak RZS",
            "Suche trzeszczenia pluca lewego",
            "Utrata bialka 5g spadlo do 0.7g",
            "Wysokie antyCPP",
            "Liczne granulocyty kwasochlonne 20/dpw",
            "Brak amyloidu",
            "CRP 17>5",
            "OB 39>8",
            "Bialko 25? w normie?"
        ],
        diagnoses: [
            "Podejrzenie ukladowej choroby tkanki lacznej - do dalszej diagnostyki",
            "Obserwacja w kierunku amyloidozy - negatywna",
            "Nadcisnienie tetnicze",
            "Zmiany zwyrodnieniowe kregoslupa L-S i stawow obu rak",
            "Uchylki esicy",
            "Zapalenie blony sluzowej przelyku i zoladka",
            "Rozedma pluc",
            "Gruzlica pluc w wywiadzie"
        ],
        medicines: [
            { name: 'Tritace' },
            { name: 'Contix' },
            { name: 'Bisocard' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Tritace', comments: "5mg 1x1" },
            { name: 'Polprazol', comments: "20mg 2x1 kaps" },
            { name: 'Bisocard', comments: "5mg 1x0.5 tabl.rano" }
        ],
        scans: getScans(47, 48).concat(scans[117])
    },
    {
        date: '09.04.2009 - 28.04.2009',
        type: "ogolnoukladowa",
        category: "pobyt w szpitalu",
        symptoms: [
            "Bole w klatce piersiowej", "kaszel", "temperatura", "utrata wagi", "bole stawow", "pienienie moczu",
            "Candida albicans", "Splycony prawy kat przeponowo-zebrowy (02.09 - prawidlowy)",
            "Nerki prawidlowe", "Brak zmian RZS", "Zmiany zwyrodnieniowe stawow",
            "Obfita plwocina sluzowo-ropna z grzybami", "Zwiekszenie zwloknienia pluc",
            "Autoprzeciwciala jadrowe p/jadrowe ujemne",
            "Autoprzeciwciala narzadowe p/cytrulinie 3840>40"
        ],
        diagnoses: [
            "Prawostronne zapalenie pluc z odczynem oplucnowym",
            "Bialkomocz nerczycowy",
            "Podejrzenie choroby ukladowej tkanki lacznej - do dalszej diagnostyki",
            "Nadcisnienie tetnicze",
            "Zmiany zwyrodnieniowe stawow obu rak i kregoslupa L-S",
            "Zapalenie blony sluzowej przelyku i zoladka",
            "Rozedma pluc",
            "Gruzlica pluc w wywiadzie"
        ],
        medicines: [
            { name: 'Augmentin' },
            { name: 'Lakcid' },
            { name: 'Tritace' },
            { name: 'Furosemid' },
            { name: 'ACC' },
            { name: 'Codeina' },
            { name: '5% glukoza' },
            { name: 'PWE' },
            { name: 'Polprazol' },
            { name: 'Kalipoz' },
            { name: 'Paracetamol' },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Tritace', comments: "5mg 1x1 tabl rano" },
            { name: 'Naproxen', comments: "0,25g 2x1 tabl" },
            { name: 'Polprazol', comments: "20mg 2x1 kaps" }
        ],
        scans: getScans(49, 51).concat(getScans(68, 69))
    },
    {
        date: '18.10.1997 - 29.10.1997',
        type: "pluca",
        category: "Pobyt w Akademii Medycznej - Instytut Chorób Wewnętzrych i Ostrych zatruć",
        symptoms: [
            "Pluca",
            "naciek NEO",
            "Zalecenie powstrzymania sie od pracy co najmniej 1 miesiac"
        ],
        diagnoses: [
            "Pneumonia Sin.",
            "Bronchopneumonia protr"
        ],
        medicines: [
            { name: 'Zinacef', comments: "szybka poprawa stanu, calkowita regresja" },
            { name: 'Po wypisaniu przepisano:'},
            { name: 'Deflegmin prolong', comments: "1 tabl rano" },
            { name: 'Multivitanum forte', comments: "2x1 tabl" },
            { name: 'Polopiryna S', comments: "1/2 tabl rano" }
        ],
        scans: getScans(52, 55)
    },
    {
        date: '16.04.1997',
        type: "pluca",
        category: "badania laboratoryjne i RTG",
        symptoms: [
            "Pluca"
        ],
        diagnoses: [
            "Czesciowa regresja zmian w placie dolnym pluca lewego w por.z 6.3.97"
        ],
        medicines: [],
        scans: [ scans[56] ]
    },
    {
        date: '04.03.1997 - 13.03.1997',
        type: "pluca",
        category: "badania laboratoryjne i RTG",
        symptoms: [
            "Pluca",
            "Liczne cialka ropne",
            "Liczne ziarniaki Gram +",
            "OB w normie"
        ],
        diagnoses: [
            "W placie dolnym lewym snuzasto-plamiste zageszczenia laczace sie z dolnym biegunem wneki lewej",
            "Streptococcus pneumoniae",
            "Morganella morgani",
            "Bronchopneumonia protaetia?"
        ],
        medicines: [],
        scans: getScans(57, 60)
    },
    {
        date: '07.10.1956 - 19.10.1956',
        type: "pluca",
        category: "Pobyt w sanatorium w Zaskoczynie",
        symptoms: [
        ],
        diagnoses: [
            "pobyt w wieku 10 lat w sanatorium przeciwgruzlicznym"
        ],
        medicines: [], scans: [ scans[61] ]
    },
    {
        date: '15.05.1968 - 28.05.1968',
        type: "pluca",
        category: "Pobyt w szpitalu przy Stoczni Gdanskiej",
        symptoms: [
        ],
        diagnoses: [
            "Brochnochestus", "Bronchopneumonia sin"
        ],
        medicines: [], scans: getScans(62, 67)
    },
    {
        date: '06.11.2008',
        type: "stawy",
        category: "USG nogi",
        symptoms: [
            "Uraz prawej nogi"
        ],
        diagnoses: [
            "Wysiek w kaletce glebokiej sciegna Achillesa"
        ],
        medicines: [],
        scans: [scans[77]]
    },
    {
        date: '02.03.2006',
        category: "USG brzucha",
        symptoms: [
            "Badanie prostaty"
        ],
        diagnoses: [
            "USG brzucha prawidlowe"
        ],
        medicines: [],
        scans: getScans(78, 79)
    },
    {
        date: '18.01.2001',
        category: "USG zatok",
        symptoms: [
            "Zatoki"
        ],
        diagnoses: [
            "Masywne zgrubienia blony sluzowej w obu zatokach szczekowych",
            "Zacienienie zatok czolowych"
        ],
        medicines: [],
        scans: [scans[80]]
    },
    {
        date: '04.10.2011',
        type: "stawy",
        category: "Badanie densytometryczne",
        symptoms: [
            "Srednie odchylenie gestosci:",
            "Kregoslupa ledzwiowego: -0.2SD",
            "Szyjki kosci udowej: -2,7SD"
        ],
        diagnoses: [
            "Osteoporoza"
        ],
        medicines: [],
        scans: getScans(81, 83)
    },
    {
        date: '30.01.2010',
        type: "stawy",
        category: "pomoc ratunkowa",
        symptoms: [
            "Uraz prawej nogi"
        ],
        diagnoses: [
            "Zerwanie sciegna Achillesa"
        ],
        medicines: [], scans: [ scans[84], scans[99] ]
    },
    {
        date: '05.12.2008',
        type: "stawy",
        category: "RTG piety",
        symptoms: [
            "Pieta"
        ],
        diagnoses: [
            "RTG kosci pietowych - brak zmian"
        ],
        medicines: [],
        scans: [scans[86]]
    },
    {
        date: '23.09.2009',
        type: "stawy",
        category: "Pomoc ratunkowa",
        symptoms: [
            "Uraz nogi?", "Leukocyty 15>10", "Erytrocyty 4.4<4.5",
            "Hemoglobina 13.3<14", "Hematokryt 37.7<38", "RDW 15.5  > 14.5",
            "MPV 8.9<9.4", "Neutrocyty 11.7>8", "Limfocyty % 15.6<18",
            "Kreatynina 1.35>1.2", "CRP 5.1>5"
        ],
        diagnoses: [
            "Drobne naderwania wlokien miesniowych",
            "Prawidlowy przeplyw zyl"
        ],
        medicines: [],
        scans: getScans(87, 90)
    },
    {
        date: '22.07.2009',
        type: "nerki",
        category: "Badanie diagnostyczne",
        symptoms: [
        ],
        diagnoses: [
            "Bialkomocz", "OB"
        ],
        medicines: [], scans: [scans[93]]
    },
    {
        date: '24.06.2009',
        type: "pluca",
        category: "Badanie diagnostyczne",
        symptoms: [
            "Pluca i diagnostyka"
        ],
        diagnoses: [
            "Pluca rozedmowe, zrosty i zmiany zapalne",
            "Po stronie lewej przejasnienie ok 6cm-bulla rozejmowa?",
            "Pasmowate cienie moze zmiany bliznowate",
            "CRP 11>5",
            "OB 104>8",
            "Bialko 100 (w normie?)"
        ],
        medicines: [],
        scans: [ scans[94], scans[126] ]
    },
    {
        date: '05.08.2010',
        type: "stawy",
        category: "USG nogi",
        symptoms: [
            "Lewa noga"
        ],
        diagnoses: [
            "Obrzek miesnia piszczelowego",
            "Znieksztalcenie przedniej krawedzi kosci piszczelowej",
            "Niewielkie pekniecie?",
            "Umiarkowiany wysiek w pochewkach sciegien strzalkowych i piszczelowego tylnego",
            "Rozlegle uszkodzenie sciegna Achillesa",
            "Nie uplynniony krwiak",
            "Wyrazne zmiany degeneracyjne",
            "??"
        ],
        medicines: [],
        scans: [ scans[95], scans[97] ]
    },
    {
        date: '20.09.2010',
        type: "stawy",
        category: "Orteza",
        symptoms: [ "Noga" ],
        diagnoses: [ "Orteza" ],
        medicines: [ { name: "Orteza" } ],
        scans: getScans(96)
    },
    {
        date: '12.01.2009',
        type: "stawy",
        category: "Wizyta u reuomatologa",
        symptoms: [
            "Noga"
        ],
        diagnoses: [
        ],
        medicines: [],
        scans: [ scans[106] ]
    },
    {
        date: '17.10.2008',
        type: "stawy",
        category: "Konsultacja ortopedyczna",
        symptoms: [
            "Bol stopy"
        ],
        diagnoses: [
        ],
        medicines: [],
        scans: getScans(108)
    },
    {
        date: '08.12.2008',
        type: "stawy",
        category: "Konsultacja ortopedyczna",
        symptoms: [
            "Stopa"
        ],
        diagnoses: [
        ],
        medicines: [],
        scans: getScans(109)
    },
    {
        date: '04.03.2009',
        type: "pluca",
        category: "Echo i pulmonolog",
        symptoms: [
            "Serce",
            "CRP +",
            "OB +"
        ],
        diagnoses: [
        ],
        medicines: [],
        scans: getScans(113, 114)
    },
    {
        date: '07.05.2009',
        category: "Orzeczenie o niepelnosprawnosci",
        symptoms: [
            "Niepelnosprawnosc"
        ],
        diagnoses: [
            "Niepelnosprawnosc"
        ],
        medicines: [],
        scans: getScans(115, 116)
    },
    {
        date: '06.05.2009',
        category: "Diagnostyka",
        symptoms: [
        ],
        diagnoses: [
            "OB 46>8",
            "RBC 4.27<4.5",
            "HGB 11.7<14",
            "HCT 36.6<42",
            "MCHC 32<32.6",
            "Bialko 300?"
        ],
        medicines: [],
        scans: getScans(118, 119)
    },
    {
        date: '01.09.2009',
        category: "Diagnostyka",
        symptoms: [
            "Badanie moczu"
        ],
        diagnoses: [
            "Bakterie dosc liczne",
            "Bialko 150?"
        ],
        medicines: [],
        scans: [ scans[124] ]
    },
    {
        date: '29.07.2009',
        category: "Diagnostyka",
        symptoms: [
            "Biochemia"
        ],
        diagnoses: [
            "CRP 32.8>5",
            "RF +++"
        ],
        medicines: [],
        scans: [ scans[125] ]
    },
    {
        date: '31.03.2009',
        category: "Diagnostyka",
        symptoms: [
            "Biochemia i hematologia"
        ],
        diagnoses: [
            "RF +++", "CRP 132>5", "OB 49>8",
            "RBC 4,3<4.5", "HGB 12.7<14", "HCT 37,9<42"
        ],
        medicines: [],
        scans: getScans(130, 131)
    },
    {
        date: '08.01.2009',
        category: "Diagnostyka",
        symptoms: [
            "Biochemia i immunologia"
        ],
        diagnoses: [
            "Cholesterol 201>200"
        ],
        medicines: [],
        scans: [ scans[132] ]
    },
    {
        date: '21.10.2008',
        category: "Diagnostyka",
        symptoms: [
            "Diagnostyka"
        ],
        diagnoses: [
            "OB 26>8",
            "HCT 41.4<42",
            "Bialko ujemne (mocz prawidlowy)"
        ],
        medicines: [],
        scans: getScans(133, 134)
    },
    {
        date: '01.01.1962',
        type: "pluca",
        category: "Choroba",
        symptoms: [
            "zapalenie pluc"
        ],
        diagnoses: [
            "Brak leczenie, zignorowane objawy"
        ],
        medicines: [],
        scans: []
    },
    {
        date: '01.01.1962',
        type: "stawy",
        category: "Uraz prawej nogi",
        symptoms: [
            "Zwichniecie prawej nogi na motorze"
        ],
        diagnoses: [
            "?"
        ],
        medicines: [],
        scans: []
    }
];
