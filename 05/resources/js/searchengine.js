var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
$(document).ready(function () {
    $("#departDate").datepicker({
        changeMonth: true, changeYear: true,
        numberOfMonths: numMonth,
        dateFormat: "mm/dd/yy",
        minDate: minDate, maxDate: maxDate,
        showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
            var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
                $("#returnDate").datepicker("change", { minDate: new Date(dateDepMin) });
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                        $("#returnDate").focus();
                    }
                }
                else {
                    $('#returnDate').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                    $("#returnDate").focus();
                }
            }
        }
    });

    $("#returnDate").datepicker({
        changeMonth: true, changeYear: true,
        numberOfMonths: numMonth,
        dateFormat: "mm/dd/yy",
        minDate: minDate, maxDate: maxDate,
        showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departDate').datepicker("getDate");
            var dateRetMin = $('#returnDate').datepicker("getDate");
            if (dateDepMin != null && dateDepMin != '') {
                var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
                if (dateRetMin != null) {
                    var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                    if (dMin > rMin) {
                        alert('Returning date always equal or greater than departure date!');
                        $("#returnDate").val('');
                    }
                }
            }
        }
    });

    //-----------------------------------------------------------------------------------------
    $("#departDate_deal").datepicker({
        changeMonth: true, changeYear: true,
        numberOfMonths: numMonth,
        dateFormat: "mm/dd/yy",
        minDate: minDate, maxDate: maxDate,
        showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departDate_deal').datepicker("getDate");
            var dateRetMin = $('#returnDate_deal').datepicker("getDate");
            var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
            if (dateRetMin != null) {
                var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                if (dMin > rMin) {
                    $('#returnDate_deal').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                    $("#returnDate_deal").focus();
                }
            }
            else {
                $('#returnDate_deal').val($.datepicker.formatDate('mm/dd/yy', new Date(dMin)));
                $("#returnDate_deal").focus();
            }
        }
    });
    $("#returnDate_deal").datepicker({
        changeMonth: true, changeYear: true,
        numberOfMonths: numMonth,
        dateFormat: "mm/dd/yy",
        minDate: minDate, maxDate: maxDate,
        showButtonPanel: true,
        onClose: function () {
            var dateDepMin = $('#departDate_deal').datepicker("getDate");
            var dateRetMin = $('#returnDate_deal').datepicker("getDate");
            var dMin = new Date(dateDepMin.getFullYear(), dateDepMin.getMonth(), dateDepMin.getDate());
            if (dateRetMin != null) {
                var rMin = new Date(dateRetMin.getFullYear(), dateRetMin.getMonth(), dateRetMin.getDate());
                if (dMin > rMin) {
                    alert('Returning date always equal or greater than departure date!');
                    $("#returnDate_deal").val('');
                }
            }
        }
    });

    //---------------------------------------------------------------------------------------------

    $(function () {
        var availAirline = ["40 Mile Air, Q5", "ACCESRAIL, 9B", "AccessAir, ZA", "Aces, VX", "Acvila Air, WZ", "Ada Air, ZY", "Adria Airways, JP", "Aebal, DF", "Aegean Airlines, A3", "Aer Arann Express, RE", "Aer Lingus Teoranta Aerlinte Eirean, EI", "Aero Asia International, E4", "Aero Continente, N6", "Aero Lineas Sosa, P4", "Aero Lloyd, YP", "Aero Traporti, BM", "Aerocalfornia, JR", "Aerocaribbean S. A., 7L", "Aerocaribe, QA", "Aerocondor, 2B", "Aerocontinente Chile, C7", "Aeroflot Russian Airlines, SU", "Aeroflot-Don, D9", "AEROGAL, 2K", "Aerolineas Argentinas, AR", "Aerolineas Internacionales, N2", "Aerolineas Paraguayas, A8", "Aerolitoral S.A. de C.V., 5D", "Aeromar Airlines, VW", "Aeromexico Aeronaves De Mexico, AM", "Aeroperlas, WL", "Aeropostal Alas De Venezue, VH", "Aerorepublica, P5", "Aerosanta Airlines, UJ", "Aerosur, 5L", "Aerosvit Airlines, VV", "Aero-Tropics Air Services, HC", "Aerovias Nacionales De Colombia Sa, AV", "Aerovias Venezulanas, VE", "Air 2000 Limited, DP", "Air Afrique, RK", "Air Algerie, AH", "Air ALM, LM", "Air Alma., QB", "Air Alps Aviation, A6", "Air Andaman, 2Y", "Air Arabia, G9", "Air Austral, UU", "Air Baltic, BT", "Air Berlin, AB", "Air Bosna, JA", "Air Botswana, BP", "Air British Columbia, ZX", "Air Burkina, 2J", "Air Caledonia, TY", "Air Caledonie International, SB", "Air Canada, AC", "Air Caraibes, TX", "Air Chathams, CV", "Air China, CA", "Air City, 4F", "Air Company KAS, KW", "Air Creebec, YN", "Air d'Ayiti, H9", "Air Dolomiti, EN", "Air Europa, UX", "Air Europe, PE", "Air Facilities, FZ", "Air Fiji, PC", "Air France, AF", "Air Gabon, GN", "Air Guyane, GG", "Air Iceland, NY", "Air India, AI", "Air India Express (DOM, IX", "Air India Express (INTL, XI", "Air Inuit, 3H", "Air Jamaica, JM", "Air Japan, NQ", "Air Kazakstan, 9Y", "Air Koryo, JS", "Air Lib, IW", "Air Liberte, IJ", "Air Lines Of Kuban, GW", "Air Link, DR", "Air Lithuania, TT", "Air Littoral, FU", "Air Luxor, LK", "Air Macau Company Limited, NX", "Air Madagascar, MD", "Air Mahe/Inter Island Airways, HM", "Air Malawi, QM", "Air Maldives, L6", "Air Mali S.A., L9", "Air Malta, KM", "Air Mandalay, 6T", "Air Mauritani, MR", "Air Mauritius, MK", "Air Midwest, ZV", "Air Moldova, 9U", "Air Moldova I, RM", "Air Namibia, SW", "Air Nauru, ON", "Air Nippon Co, EL", "Air Niugini, PX", "Air North, 4N", "Air Nostrum, YW", "Air Nova, QK", "Air Pacific Limited, FJ", "Air Philippines, 2P", "Air Portugal, TP", "Air Rarotonga, GZ", "Air Saint-Pierre, PJ", "Air Santo Domingo, EX", "Air Sao Tome e Principe, KY", "Air Senegal International, V7", "Air Service, M3", "Air Sinai, 4D", "Air Slovakia Bwj, GM", "Air South Air, WV", "Air Srpska, R6", "Air St Thomas, ZP", "Air Sunshine, YI", "Air Tahiti, VT", "Air Tahiti Nui, TN", "Air Tanzania Corp, TC", "Air Tindi, 8T", "Air Tours Intl Airways, VZ", "Air Transat A.T., TS", "Air Ukraine, 6U", "Air Urga, 3N", "Air Vallee, DO", "Air Vanuatu, NF", "Air Venezuela, 7Q", "Air Wales, 6G", "Air Wisconsin, ZW", "Air Zambezi, ZT", "Air Zimbabwe, UM", "Airasia, AK", "AirDeccan, DN", "Aires S.A., 4C", "Airline Of Marshall Islands, CW", "Airlines Of South Australia, RT", "Airlink Limited, ND", "Airnorth Reg, TL", "Air-Service, I9", "Airtran Airways, FL", "Airzena Georgian Airlines, A9", "Aklak Air, 6L", "Alaska Airlines, AS", "Alaska Central Express, KO", "Alaska Seaplane, UI", "Albanian Airlines Mak Shpk, LV", "Aliadriatica, AP", "Alidaunai, D4", "Alitalia, AZ", "Alitalia Express, XM", "Alitalia Team, RD", "All Nippon Airways Co, NH", "Allegiant Air, G4", "Allegro, LL", "Alliance Air, Y2", "Alliance-Air, CD", "Aloha Airline, AQ", "Alpi Eagles, E8", "Alpine Aviat, 5A", "America West, HP", "American Airlines , AA", "American Connection, AX", "American Eagle, MQ", "American Falcon S.A., WK", "American Trans Air, TZ", "AMTRAK, 2V", "Andesmar Lineas Aereas S, CK", "Angel Airlines, 8G", "Ansett Australia, AN", "Antinea Airlines, HO", "Arctic Air, 8A", "Arctic Transportation Services, 7S", "Arkhangelsk Airlines, 5N", "Arkia Israel Inland Airlines, IZ", "Armenian Airlines, R3", "Aserco Airlines, R7", "Asian Spirit, 6K", "Asiana Air, OZ", "Aspiring Air, OI", "Astrakhan Airlines, OB", "Astral Aviation, AL", "Atlantic Airways Faroe Islands, RC", "Atlantic Coast Jet, DD", "Atlantic Southeast Airlines, EV", "Atlant-Soyuz, 3G", "Atyrau Airways, IP", "Augsburg Airways, IQ", "Aurigny Air Services, GR", "Austral Lineas Aereas Sa, AU", "Australian Airlines, AO", "Austrian Airlines, OS", "Avia Air, 3R", "Aviacsa-Consorcio Aviaxsa, 6A", "Aviaexpresscruise Airline, E6", "Aviateca S A, GU", "Aviation quebec Labrador, QC", "Avioimpex A.D.P.O., M4", "Avior, 3B", "Avirex Gabon, G2", "Azerbaijan Airlines, J2", "B.A.C.H Flugbetrieb, B4", "Bahamasair, UP", "Baikal Airlines, X3", "Baker Aviatio, 8Q", "Bakhtar Afghan Airlines, FG", "Balkan Bulgarian Airlines, LZ", "Bangkok Airways, PG", "Base Airlines, 5E", "Bashkir Airlines, V9", "Bearskin Lake, JV", "Belavia, B2", "Bellair, 7G", "Bellview, B3", "Bemidji Aviation, CH", "Bering Air, 8E", "Berjaya Air, J8", "Big Sky Airlines, GQ", "Biman Bangladesh Airlines, BG", "Binter Canarias, NT", "Blue Panorama Airlines, BV", "BMI British Midland, BD", "Boliviano, LB", "Bouraq Airlines, BO", "Braathens ASA, BU", "British Airways, BA", "British European, BE", "British Intl, BS", "British Mediterranean, KJ", "British Regional Airlines, TH", "Brittany Air International, DB", "Buffalo Air, J4", "Buryat Airlines, U4", "Business Aviation, 4P", "BWIA West Indies Airways, BW", "Calm Air Intl, MO", "Camai Air, R9", "Cameroon Airlines, UY", "Canada 3000 Airline Limited, 2T", "Canadian Airlines International, CP", "Canadian North, 5T", "Cape Air, 9K", "Cape Smythe Air Service, 6C", "Caribbean Star Airlines, 8B", "Cathay Pacific Airways, CX", "Cayman Airways, KX", "Ccair, ED", "Cebu Pacific, 5J", "Central Mountain Air, 9M", "Centre-Avia Airlines, J7", "Chalk's Ocean Airways, OP", "Challenge, WE", "Champion Air, MG", "Chang-An Airlines, 2Z", "Chantangua Airlines, RP", "Chicago Express Airlines, C8", "China Airline, CI", "China Eastern, MU", "China N West, WH", "China National Aviation, F6", "China Northern Airlines, CJ", "China Southwest Airline, SZ", "China Xinhua Airlines, XW", "China Xinjiang Airl, XO", "China Yunnan Airlines, 3Q", "Chinasouthern, CZ", "Cimber Air, QI", "Cirrus Airlines, C9", "City Airline, CF", "Cityflyer Exp, FD", "Cityjet, WX", "Coast Air K/S, BX", "Coastal Air Transport, DQ", "Colgan Air, 9L", "Comair, MN", "Comair, OH", "CommutAir, C5", "Compagnie Corse Mediterranee, XK", "Condor Flugdienst Gmbh, DE", "Consolidada Cubana De Avia, CU", "Continental Airlines, CO", "Continental Micronesia, CS", "Copa Airlines, CM", "Corporate Express Airlines, 3C", "Corsair International, SS", "Cosmic Air, F5", "Crimea Air, OR", "Croatia Airlines, OU", "Cronus Air, X5", "Cyprus Airways, CY", "Czech Airline, OK", "Daallo Airlines, D3", "Dalavia-Far East Airways Khabarovsk, H8", "Danish Air Transport, DX", "Delta Air Lines, DL", "Delta Air Transport, QG", "Denim Air, 3D", "Deutsche BA, DI", "Dinar Lineas Aereas S.A., D7", "Dirgantata Air Services, AW", "Djibouti Airlines, D8", "Dnieproavia Joint Stock Aviation Company, Z6", "Domodedovo Airlines, E3", "Donbass Eastern Ukranian Airlines, 7D", "Dragonair, KA", "Druk Air, KB", "Eagle Air, ZN", "Eagle Aviatio, Y4", "Eagle Aviation Uganda, H7", "East Line Airlines, P7", "East West Air, 4S", "Eastern Airways, T3", "Eastland Air, DK", "Easyjet Airline Company, U2", "Egyptair, MS", "El Al Israel Airlines Limited, LY", "Emirates Airlines, EK", "Empresa Ecuatoriana De Aviacion Sa, EU", "Enkor Airlines, G5", "Equaflight, 8H", "Era Helicopters, 7H", "Estonian Air, OV", "Estonian Aviation Company, S8", "Ethiopian Airlines S C, ET", "Etihad Airways, EY", "Eureca, F4", "Euro Air Heli, YQ", "Euroceltic Airways, 5Q", "Eurofly, GJ", "Europ Continental Airways d/b/a Crossair Europe, QE", "European Aie Express, 7Y", "European Air Transport, QY", "European Airlines, 2H", "European Executive Express, RY", "European Regions Airlines, EA", "Eurostar, 9F", "Eurowings, EW", "Eva Airways, BR", "Excel Airways, JN", "Executive Airlines/American Eagle, OW", "Express Airlines, 9E", "Fair, FW", "Falcon Air, IH", "Far Eastern Air, EF", "Finnair, AY", "Firstair, 7F", "Fischer Air, 8F", "Flight West, YC", "Flightline, B5", "Fly, 4H", "Flying Enterprise Ab, F3", "Frontier Airlines, F9", "Frontier Flying Service, 2F", "Galaxy Airways, 9G", "Gambia International Airlines, GC", "Gandalf Airlines, G7", "Garuda, GA", "Germania, ST", "Ghana Airways Corporation, GH", "Gibraltar Airways, GT", "Gill Airways, 9C", "Global International Airways Corp, GL", "Gmg Airlines, Z5", "Go, GO", "Go One Airways, GK", "GoAir, G8", "Golden Air Flyg Ab, DC", "Grant, GS", "Great Lakes, ZK", "Great Plains Airlines, ZO", "Guardair, FB", "Guine Bissau Airlines, G6", "Guinee Airlines, J9", "Gulf Air, GF", "Gulfstream Intl Airlines, 3M", "Guyana Airways Corporation, GY", "Hageland, H6", "Hahn Air, HR", "Hainan Airlines, HU", "Halisa Air, WD", "Hapag Lloyd, HF", "Harbor Airlines, HG", "Harbour Air, H3", "Hawaiian Airlines, HA", "Hawkair, BH", "Hazelton Air Services Pty, ZL", "Helgoland Airlines, LE", "Heli Air Monaco, YO", "Heli Inter Riviera, EC", "Helicopteros Del Sureste, UV", "Helijet International, JB", "Helikopter Service, L5", "Hellas Jet, T4", "Hemus Air, DU", "Hex Air, UD", "Hndlg Angent, XH", "Hokkaido International Airlines, HD", "Homer Air, HB", "Horizon Airlines, QX", "Iberia Airlines, IB", "Icar, C3", "Icelandair, FI", "Iliamna Air, LS", "Imair, IK", "Independence, DH", "Indian Airlines, IC", "Indigo, 6E", "Inland Aviations Services, 7N", "Intensive Air, IM", "Inter Aviatn, D6", "Inter Islands Airlines, H4", "Inter Tropical Aviation, 3P", "Iran Air Tours, B9", "Iran National Airlines, IR", "Iraqi/Airways, IA", "IRS Aero, 5R", "Island Air, WP", "Island Airlines, DG", "Island Airlines, IS", "Island Aviation Services, Q2", "Island Express, 2S", "Islands Nationair, CN", "Islandsflug, HH", "Islena Airl, WC", "Isles Scilly, 5Y", "Israir, 6H", "JAL Express, JC", "JALways, JO", "Japan Air Commuter, 3X", "Japan Air Sys, JD", "Japan Airlines, JL", "Japan Asia Airways, EG", "Jet Airways, 9W", "Jet Airways (INTL, W9", "Jetline Airways Corporation, B6", "JetLite, S2", "Kavminvodyavi, KV", "Keewatin Air, FK", "Kenmore, M5", "Kenn Borek, 4K", "Kenya Airways, KQ", "Keystone Air Service, BZ", "Khalifa Airways, K6", "Khors Air Company, X9", "Kibris Turkish Airlines, YK", "Kingfisher, IT", "Klm Cityhoppe, WA", "Klm Exel, XT", "Klm Royal Dutch Airlines, KL", "Klm Uk, UK", "Kogalymavia, 7K", "Korean Air Lines, KE", "Krasnoyarsk Airlines, 7B", "Kronflyg, K4", "Kuwait Airways Corporation, KU", "L B Limited, 7Z", "Lab/Flying Service, JF", "Labrador Airways, WJ", "Lam Linhas Aereas De Mocambique, TM", "Landair International Airlines, BN", "Lan-Linea Aerea Nacional-Chile Sa, LA", "LanPeru, LP", "Lao Aviation, QV", "Laoag International Airlines, L7", "Larrys Flying, J6", "Laser, 8Z", "Latpass Airlines, QJ", "Lauda Air, NG", "Lauda-air S.p.A., L4", "Legend Airlines, LC", "Lgw Luftfahrtgesellschaft, HE", "Liat, LI", "Libyan Arab Airlines, LN", "Lignes Aeriennes Congolaises, 6V", "Linea Aerea Del Cobre, UC", "Linea Turistica Aereotuy, LD", "Lineas Aereas Costarricenses, LR", "Lineas Aereas Entre Rios, 2L", "Lineas Aereas Privadas Argentinas, MJ", "Lithuanian Airlines, TE", "Lot-Polish, LO", "Luftaxi Dortmund, DV", "Lufthansa, LH", "Lufthansa Cityline Gmbh, CL", "Lufttransport Uternehmen, LT", "Luxair, LG", "Lviv Airlines, 5V", "Lynden Air, L2", "Macair, CC", "Maersk Air, DM", "Maersk Air Lt, VB", "Magadan Air, H5", "Mahan Air, W5", "Malaysia Airlines, MH", "Malev Hungarian Airlines, MA", "Malmo Aviation, TF", "Malta Air Charter, R5", "Mandarin Airlines, AE", "Manus Air, MV", "Manx Airlines, JE", "Markair, BF", "Martinair, MP", "Mat Macedonia, IN", "Maya Airways, MW", "MDLR, 9H", "Medellin, MM", "Meridiana Spa, IG", "Merpati Nusantara Dba Air Mali, MZ", "Mesa Aviation Services, YV", "Mesaba Aviation, XJ", "Mexicana, MX", "Miat Mongolia, OM", "Middle East Airlines Airliban, ME", "Midway Airlines, JI", "Midwest Express Airlines, YX", "Military Air, MC", "Milne Bay Air, CG", "Missionary Av, FS", "Moldavian Airlines, 2M", "Monarch Airln, ZB", "Montenegro Airlines, YM", "Motor Sich PISC, M9", "Muk Air, ZR", "Myanma Airway, UB", "Nakima Air Service, T2", "National Air, YJ", "National Airlines, N7", "National Jet Systems Pty, NC", "Nationwide Air, CE", "Necon Air, 3Z", "Nevis Express, VF", "New England Airlines, EJ", "New Zealand, NZ", "Nice Helicopteres, JX", "Nigeria Airways, WT", "Nordeste-Linhas Aereas Regionais Sa, JH", "Nordic East, LF", "Nordic East Airlink, 7I", "Nordkalottlkyg, 8N", "North American Airlines, NA", "North Coast Aviation Pty, N9", "North Vancouver Air, VL", "North Wright, HW", "Northwest Airlines, NW", "Northwest Reqional, FY", "Northwest Territorial Airways, NV", "Northwestern Air Lease, J3", "O'Connor Airlines, UQ", "Odessa Airlines, 5K", "Olson Air Service, 4B", "Olympic Airways, OA", "Oman Aviation, WY", "Omni, OC", "OMNI AIR INTL, OY", "Orient Eagle Airways, 4R", "Ostfriesische Lufttransport Gmbh, OL", "Oy Air Botnia, KF", "P.T. Air Wagon International, QZ", "P.T.Mandala Airlines, RI", "Pacific Airlines, BL", "Pacific Airways, 3F", "Pacific Coastal, 8P", "Pacific Island Aviation, 9J", "Pacific Wings, LW", "Pacificair, GX", "Pakistan International Airlines, PK", "Palestinian Airlines, PF", "Pan American Airways Corp., PN", "Pantanal Linhas Aereas Sul, P8", "Papillon Air, HI", "Paramount Airways, I7", "Passaredo Transportes, Y8", "Pelangi Airways, 9P", "Pem Air, PD", "Penair, KS", "Penta Aerial Transports S/A, 5P", "Perimeter Aviation, UW", "Philippine Airlines, PR", "Platinum Air 2000, 5W", "Polynesian Airlines, PH", "Portugalia, NI", "Precisionair, PW", "President Airlines, TO", "Primeras Lineas Uruguayas, PU", "Pro Air, P9", "Proair, XL", "Promech, Z3", "Proteus, YS", "Proteus Helicopteres, 6S", "Proteus Helicopteres, HN", "Provincial Airlines, PB", "Pulkovo Aviation Enterprise, Z8", "Qantas Airways, QF", "Qatar Airways, QR", "Ras Fluggesellschaft, RW", "Red Sea Air, 7R", "Regional Air, QP", "Regional Air, QT", "Regional Air Lines, FN", "Regional Airlines, VM", "Regionnair, RH", "Rio Sul Servicos Aereos Regionais, SL", "Romavia, WQ", "Royal Air Cambodge, VJ", "Royal Air Force-38 Transport Group, RR", "Royal Air Maroc, AT", "Royal Airways, HT", "Royal Aviation, QN", "Royal Brunei Airlines, BI", "Royal Jordanian, RJ", "Royal Khmer Airlines, FE", "Royal Nepal Airlines Corp, RA", "Royal Phnom Penh Airways, RL", "Royal Tongan, WR", "Ryan Air Dublin, FR", "Saint Barth Commuter, PV", "Sakha Avia, K7", "Sakhalinskie Aviatrassy, HZ", "Sama, ZS", "Samara Airlines, E5", "Samoa Air, SE", "Santa Barbara Airlines, S3", "Saratov Airlines, 6W", "Sata International, S4", "Saudi Arabian Airlines, SV", "Sayakhat Air Company, W7", "Scandinavian Airlines System, SK", "Scenic Air Lines, YR", "ScotAirways, CB", "Seaborne Aviation, BB", "Servicios Aereos Nacionales S A, RZ", "Servivensa, VC", "Severstal, D2", "Shaheen Air, NL", "Shandong Air, SC", "Shanghai Airlines, FM", "Shanxi Airlines, 8C", "Shenzhen Airlines, 4G", "Shuttle America, S5", "Sibaviatrans, 5M", "Siberia Airlines, S7", "Siem Reap Airways International, KH", "Sierra Nation, LJ", "Silkair, MI", "Singapore Airlines, SQ", "Skagway Air, 7J", "Skippers Aviation, JW", "Sky Link Air, MY", "Skymark Airlines, BC", "Skyservice Airlinesd/b/a Roots Air, 6J", "Skyward Aviation, K9", "Skyways Ab, JZ", "Skyways Regional, HS", "Skywest Air, OO", "Slovak Airlines, 6Q", "Smokey Bay Air, 2E", "SN Brussels Airlines, SN", "SNCF, 2C", "Sobelair, Q7", "Sociedade Acoreana De Transportes, SP", "Solomon Islands Airways, IE", "South African Airways, SA", "South African Express Airlines, YB", "Southern Wind, A4", "Southwest Airlines Dallas, WN", "Spanair, JK", "SpiceJet, SG", "Spirit Airlines, NK", "Spring Airline, 9S", "Sri Lankan Airlines, UL", "State Orenburg Avia, R2", "Sterling, NB", "Sudan Airways, SD", "Sun Air Fiji, PI", "Sun Country Airlines, SY", "Sun-Air, EZ", "SunExpress, XQ", "Sunrise Airlines, OQ", "Sunworld Intl, SM", "Surinam Airways, PY", "SWE Aviation Europe, S9", "Swedeways Air Lines, HJ", "Swiss, LX", "Swiss Air Transport Co, SR", "swisswings airlines, RQ", "Sylt Air, 7E", "Syrian Arab Airlines, RB", "Taag Linhas Aereas De Angola, DT", "Taca International Airlines, TA", "TAM Linhas Aereas, JJ", "Tanana Air, 4E", "Tandem Aero, TQ", "TAPSA Aviacion, V8", "Taquan Air Services, K3", "Tarom, RO", "Tatarstan, U9", "Tatonduk Fly, 3K", "TAVAJ-Transportes Aereos Regulares S. A., 4U", "Tavrey Aircompany, T6", "Tayfunair, Z4", "Tci Skyking, RU", "Templehof Express Airlines, FC", "Thai Airways International, TG", "The State Transport Company Russia, R4", "Tie Aviation, 5B", "Tikal Jets, S.A., A5", "Time Air, KI", "Trans Air, P6", "Trans Air Congo, Y9", "Trans Cote, 7T", "Trans North Aviation, HX", "Trans State Airlines, 9N", "Trans Travel Airlines, 6N", "Transaero, UN", "Transair, JT", "Transasia Airways, GE", "Transavia Airlines, HV", "Transbrasil S/A Linhas Aereas, TR", "Transcaraibes, DZ", "Transeuropean Airlines, UE", "Transocean, NU", "Transportes Aereos De Cabo Verde, VR", "Transportes Aereos Del Mercosur, PZ", "Transportes Aereos Militates Ecuat, EQ", "Transportes Aereos Nuequen, T8", "Transwest Air, 9T", "Tropic Air, PM", "Tuninter, UG", "Tunis Air, TU", "Turan Air, 3T", "Turkish Airlines, TK", "Turkmenistan, T5", "Turks And Caicos National Airline, QW", "Tyrolean Air, VO", "Tyumen Airlines, 7M", "TyumenaviaTrans, P2", "U. P. Air, UZ", "Uganda Air, QU", "Ukraine International Airlines, PS", "Ukranian-Mediterranean Airlines, UF", "Uni Airways, B7", "United Airlines, UA", "United Aviation, U7", "Ural Airlines, U6", "US Airways, US", "US Helicopter, UH", "USA 3000 Airlines, U5", "Uzbekistan Airways, HY", "Vanguard Airlines, NJ", "Varig, RG", "Varmlandsflyg, T9", "Vasp Brazilian Airlines, VP", "Vensecar International, V4", "VIA Rail, 2R", "Vietnam Airlines, VN", "Vip Air, 9V", "Virgin Atlantic Airways, VS", "Virgin Blue, DJ", "Virgin Expres, TV", "Virgin Express Ireland., VK", "Visa Airways, 9A", "Vladivostok Air, XF", "VLE VOLARE, VA", "VLM Airlines, VG", "Volare Airlines, 8D", "Voyageur Airways, 4V", "Wanair, 3W", "Warbelow Air, 4W", "Welcome Air, 2W", "West Air Sweden, PT", "West Coast Air, 8O", "West Isle Air, W6", "Westair Commuter Airlines, OE", "Western Airlines, EM", "Westjet Airlines, WS", "Wideroes Flyveselskap A/S, WF", "Windward Islands Airways Intl, WM", "Wings Alaska, K5", "World Airline, W2", "Wrightair Svc, 8V", "Xiamen Airlines, MF", "Yangon Airways, HK", "Yemen Airways Corporation, IY", "Yugoslav, JU", "Zambia Skyways, X7", "Zambian Airways, Q3", "Zuliana De Aviacion, OD"];
        $("#airline").autocomplete({
            source: availAirline,
            delay: 0,
            minLength: 0,
            autoFocus: true,
            close: function (event, ui) {
                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                    if (jQuery.inArray($.trim($("#airline").val()), availAirline) < 0) {
                        $("#airline").val("");
                    }
                    else {
                        $("#flightSearch").focus();
                    }
                }
                else
                {
                    if (jQuery.inArray($("#airline").val().trim(), availAirline) < 0) {
                        $("#airline").val("");
                    }
                    else {
                        $("#flightSearch").focus();
                    }
                }


                
            }
        });
    });

    $(function () {
        var selectFrom = false;
        var selectTo = false;
        $('#txtFrom').autocomplete({
            source: function (request, response) {
                var url = actionUrl + "/" + request.term;                
                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function (data) {
                        
                        response($.map(data, function (item) {
                            return {
                                label: item,
                            }
                        }));
                    }
                })
            },
            open: function (event, ui) {  selectFrom = true; },
            select: function (event, ui) {
                $(this).val(ui.item.label);
                selectFrom = false;
                return false;
            },
            close: function (event, ui) {
                selectFrom = false;
                try{$(this).val(ui.item.value)}catch(err){}
            },
            minLength: 1,
            autoFocus: true
        }).blur(function () {
            if (selectFrom) {
                $("#txtFrom").val($('ul.ui-autocomplete li:first a').text());
            }
        });
        
        $("#txtTo").autocomplete({
            source: function (request, response) {
                var url = actionUrl + "/" + request.term;
                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function (data) {
                        response($.map(data, function (item) {
                            return {
                                label: item,
                            }
                        }));
                    }
                })
            },
            open: function (event, ui) {
                selectTo = true;
            },
            select: function (event, ui) {
                $(this).val(ui.item.label);
                selectTo = false;
                return false;
            },
            close: function (event, ui) {
                selectTo = false;
                try{$(this).val(ui.item.value)}catch(err){}
            },
            minLength: 1,
            autoFocus: true
        }).blur(function () {
            if (selectTo) {
                $("#txtTo").val($('ul.ui-autocomplete li:first a').text());
            }
        });
    });
});

//function additionalService() {
//    try {
//        if ($("#flightAdditionalService").is(':visible')) {
//            $("a.more_option_link").removeClass('active');
//            $("#cabin").val("0");
//            $("#addionalService").val("0");
//            $("#flightAdditionalService").slideUp();
//        }
//        else {
//            $("a.more_option_link").addClass('active');
//            $("#flightAdditionalService").slideDown();
//            $("#airline").val("");
//            $("#cabin").val("0");
//            $("#addionalService").val("1");
//        }
//    } catch (err) { alert(err.ToString()); }
//}

function showHideForm(ele, thisEle) {
    try {
        if (ele.is(':visible')) {
            $("#" + thisEle).removeClass('active');
            ele.slideUp();
        }
        else {
            $("#" + thisEle).addClass('active');
            ele.slideDown();

        }
    } catch (err) { alert(err.toString()); }
}
function setTripType(evt) {
    if (parseInt(evt.value, 10) == 1) {
        $(".return").hide();
    }
    else {
        $("#returnDate").val($("#departDate").val());
        $(".return").show();
    }
}
function ageSelection(evt) {
    var child = parseInt(evt.value, 10);
    var i = 0;
    if (child > 0) {
        for (i = 1; i <= child; i++) {
            if (!$("li.child-age" + i).is(':visible')) {
                $("#child" + i).val("default");
                $("li.child-age" + i).show();
            }

        }
        for (i = child+1; i <= 8; i++) {
            if ($("li.child-age" + i).is(':visible')) {
                $("#child" + i).val("default");
                $("li.child-age" + i).hide();
            }
        }
        if (!$(".child-age").is(':visible')) {
            $(".child-age").show();
        }
    }
    else {
        $(".child-age").hide();
        for (i = 1; i <= 8; i++) {
            $("li.child-age" + i).hide();
            $("#child"+i).val("default");
        }
    }
}
function validateFlightRequest(evt,isAlert) {
    
    var validationFlag = true;
    var temp;
    var fromCity = '';
    var Tocity = '';
    $("#dvSearch").html("");
    $("#dvSearch").css("display", "none");
    try {
         if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

            fromCity=$.trim($("#txtFrom").val());
            Tocity = $.trim($("#txtTo").val());

            if ($.trim($("#txtFrom").val()).length < 3) {
                $("#dvSearch").append("<p>&raquo; Atleast 3 characters required, departure city / airport code!</p>");
                validationFlag = false;
            }
            else if (!ValidateCity($.trim($("#txtFrom").val()))) {
                $("#dvSearch").append("<p>&raquo; We are unable to find your required city/ airport code!</p>");
                validationFlag = false;
            }

            if ($.trim($("#txtTo").val()).length == 0 || $.trim($("#txtTo").val()).length < 3) {
                $("#dvSearch").append("<p>&raquo; Atleast 3 characters required return city / airport code!</p>");
                validationFlag = false;
            }
            else if (!ValidateCity($.trim($("#txtTo").val()))) {
                $("#dvSearch").append("<p>&raquo; We are unable to find your return city/ airport code!</p>");
                validationFlag = false;
            }

            if ($.trim($("#txtFrom").val()) == $.trim($("#txtTo").val()) && ($.trim($("#txtTo").val()).length > 0 || $.trim($("#txtFrom").val()).length > 0)) {
                $("#dvSearch").append("<p>&raquo; Please enter a different From and To city/ airport code!</p>");
                validationFlag = false;
            }
        }
        else {
            if ($("#txtFrom").val().trim().length < 3) {
                $("#dvSearch").append("<p>&raquo; Atleast 3 characters required, departure city / airport code!</p>");
                validationFlag = false;
            }
            else if (!ValidateCity($("#txtFrom").val().trim())) {
                $("#dvSearch").append("<p>&raquo; We are unable to find your required city/ airport code!</p>");
                validationFlag = false;
            }

            if ($("#txtTo").val().trim().length == 0 || $("#txtTo").val().trim().length < 3) {
                $("#dvSearch").append("<p>&raquo; Atleast 3 characters required return city / airport code!</p>");
                validationFlag = false;
            }
            else if (!ValidateCity($("#txtTo").val().trim())) {
                $("#dvSearch").append("<p>&raquo; We are unable to find your return city/ airport code!</p>");
                validationFlag = false;
            }
            if ($("#txtFrom").val().trim() == $("#txtTo").val().trim() && ($("#txtTo").val().trim().length > 0 || $("#txtFrom").val().trim().length > 0)) {
                $("#dvSearch").append("<p>&raquo; Please enter a different From and To city/ airport code!</p>");
                validationFlag = false;
            }
        }        

          
         var temp;
        var departDate ;
        if ($("#departDate").val().trim().length == 0) {
            validationFlag = false;
            $("#dvSearch").append("<p>&raquo; Departure date can't be blank!</p>");
        }
        else {
            temp = $("#departDate").val().split("/");
            departDate = new Date(parseInt(temp[2], 10), parseInt(temp[0], 10) - 1, parseInt(temp[1], 10));            
        }

        if ($('select#tripType option:selected').val() == '2') {

            if ($("#returnDate").val().trim().length > 0) {
                temp = $("#returnDate").val().split("/");

                if ($("#returnDate").val().length < 5) {
                    validationFlag = false;
                    $("#dvSearch").append("<p>&raquo; Return date can't be blank!</p>");
                }
                var returnDate = new Date(parseInt(temp[2], 10), parseInt(temp[0], 10) - 1, parseInt(temp[1], 10));
                if (departDate > returnDate) {
                    $("#dvSearch").append("<p>&raquo; Returning date always equal or greater than departure date!</p>");
                    validationFlag = false;
                }
            }
            else {
                validationFlag = false;
                $("#dvSearch").append("<p>&raquo; Return date can't be blank!</p>");
            }
        }
       

        var adult = parseInt($("#adult").val(), 10);
        var child = parseInt($("#child").val(), 10);
        var infant = parseInt($("#infant").val(), 10);

        if (adult < infant) {
            $("#dvSearch").append("<p>&raquo; Infant can't be greater than adult!</p>");
            validationFlag = false;
        }
        if ((adult + child + infant) > 9) {
            $("#dvSearch").append("<p>&raquo; Total number of passengers cannot exceed 9!</p>");
            validationFlag = false;
        }

      
        if (!validationFlag) {
            if (isAlert) {
                var errormsg = $("#dvSearch").html().split("</p>");
                var alrstr = "";
                for (i = 0; i < errormsg.length; i++)
                {
                    var msg = errormsg[i].replace('<p>', '');
                    alrstr += msg + '\r';
                }
                $("#dvSearch").html("");
                alert(alrstr);
            }
            else
                $("#dvSearch").css("display", "block");
        } else {
            $("#dvSearch").css("display", "none");
        }
    } catch (err) {
       alert(err.toString());
    }
   
    return validationFlag;
}
function isRoundTrip(isRound) {
    var rMin;
    try {
        if (isRound) {
            $("#destDate").removeAttr("disabled");
            var dateMin = $('#departDate').datepicker("getDate");
            if (dateMin != null) {
                rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            }
            else {
                rMin = minDate;
            }
            $('#destDate').val($.datepicker.formatDate('dd/mm/yy', new Date(rMin)));
            $("#destDate").datepicker("option", "minDate", rMin);
            $("#secDestDate").children("img").attr("src", "../image/calendar.gif");
            $("#roundTrip").prop('checked', true);
            $("#errorAlert").html("");
        }
        else {
            $("#destDate").attr("disabled", "disabled");
            $("#oneWay").prop("checked", true)
            $("#secDestDate").children("img").attr("src", "").attr("title", "").attr("alt", "");
            $("#errorAlert").html("");
        }
    } catch (err) { alert(err.toString()) }
}
function isDomesticSearch(isDomestic) {
    try {

        if (isDomestic) {
            $("li.domastic").addClass('active');
            $("li.international").removeClass('active');
            $("#spnTxtFrom").css('display', 'none');
            $("#spnOptFrom").css('display', 'block');
            $("#spnTxtTo").css('display', 'none');
            $("#spnOptTo").css('display', 'block');
            $("#searchInternational").val("0");
            $("#errorAlert").html("");
        }
        else {
            $("li.international").addClass('active');
            $("li.domastic").removeClass('active');
            $("#spnTxtFrom").css('display', 'block');
            $("#spnOptFrom").css('display', 'none');
            $("#spnTxtTo").css('display', 'block');
            $("#spnOptTo").css('display', 'none');;
            $("#searchInternational").val("1");
            $("#errorAlert").html("");
        }

    } catch (err) { alert(err.ToString()) }
}
function validateDealsRequest(evt) {
    var validationFlag = true;
    var temp;
    $("#dealserrors").html("");
    try {
        temp = $("#departDate_deal").val().split("/");
        var departDate = new Date(parseInt(temp[2], 10), parseInt(temp[0], 10) - 1, parseInt(temp[1], 10));
        if ($("#roundTrip_deal").is(':checked')) {
            temp = $("#returnDate_deal").val().split("/");
            var returnDate = new Date(parseInt(temp[2], 10), parseInt(temp[0], 10) - 1, parseInt(temp[1], 10));
            if (departDate > returnDate) {
                $("#dealserrors").append("<p>&raquo; Returning date always equal or greater than departure date!</p>");
                validationFlag = false;
            }
        }
        var adult = parseInt($("#adult_deal").val(), 10);
        var child = parseInt($("#child_deal").val(), 10);
        var infant = parseInt($("#infant_deal").val(), 10);

        if (adult < infant) {
            $("#dealserrors").append("<p>&raquo; Infant can't be greater than adult!</p>");
            validationFlag = false;
        }
        if ((adult + child + infant) > 9) {
            $("#dealserrors").append("<p>&raquo; Total number of passengers cannot exceed 9!</p>");
            validationFlag = false;
        }


        if (!validationFlag) {
            $("#dealserrors").css("display", "block");
        } else {
            $("#dealserrors").css("display", "none");
        }
    } catch (err) {
        alert(err.toString());
    }

    return validationFlag;
}
function setdealTripType(evt) {
    if (parseInt(evt.value, 10) == 1) {
        $(".return").hide();
    }
    else {
        $("#returnDate_deal").val($("#departDate_deal").val());
        $(".return").show();
    }
}

//====================== Validate Airport City=============================================
/*
function ValidateCity(cityName) {
    var rtnCity = false;
    if (cityName.indexOf("-") > 0 && cityName.indexOf(",") > 0) {
        var Citylist = cityName.split(",");
        if (Citylist.length > 0) {
            var AirCode_CityName = Citylist[0].trim();
            if (AirCode_CityName.split('-').length > 1) {
                var CityName = AirCode_CityName.split('-');
                var url = "/Service/GetAirport/" + CityName[1].trim();
                var objAirportsList = CallAjax('', url, 'get');
                if (objAirportsList != null && objAirportsList != 'undefined' && objAirportsList != "") {
                    if (objAirportsList.length > 0) {
                        for (i = 0; i < objAirportsList.length; i++) {
                            if (String(cityName).toUpperCase().trim() == String(objAirportsList[i]).toUpperCase().trim()) {
                                rtnCity = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return rtnCity;
}*/

