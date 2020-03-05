function split(val) {
    return val.split(/,\s*/)
}

function extractLast(term) {
    return split(term).pop()
}
String.prototype.replaceAll = function(find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace)
};

function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}
$(document).ready(function() {
    monkeyPatchAutocomplete();
    var selectFrom = !0;
    var selectTo = !0;
    $("#froCity,#froCityFare").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function(event,ui) {
			//event.preventDefault();
			//$(this).addClass('active');
			$(this).val(ui.item.question);
            //return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            this.value = terms;
            selectFrom = !1;
            $("#toCity").focus();
            return !1
        }
    }).blur(function() {
        if (selectFrom) {
            if ($("#froCity").val().indexOf(",") == -1) {
                $("#froCity,#froCityFare").val($('ul#ui-id-1 li:first a').text())
            }
        }
    });
    $("#toCity,#toCityFare").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            //return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
			var cityCode = cityImage.substring(n+1, l);
            cityImage = cityImage.substring(0, n);
			cityImage = cityImage+"-"+cityCode;
			if (imgExists("/resources/images/citydata/" + cityImage.replace(" ", "").toLowerCase() + ".jpg")) {
                $('#background').animate({
                    opacity: 0
                }, 100, function() {
                    $('#background').css("background-image", "url('/resources/images/citydata/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')")
					.promise().done(function() {
                        $('#background').animate({
                            opacity: 1
                        }, 600)
                    })
                })
            }
            this.value = terms;
            selectTo = !1;
            $('#departDate').datepicker('show');
            return !1
        }
    }).blur(function() {
        if (selectTo) {
            if ($("#toCity").val().indexOf(",") == -1) {
                $("#toCity,#toCityFare").val($('ul#ui-id-2 li:first a').text());
            }
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    });
    var selectRtFrom = !0;
    var selectRtTo = !0;
    $("#returnFroCity").autocomplete({
        source: function(request, response) {

            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            //return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            this.value = terms;
            selectRtFrom = !1;
            return !1
        }
    }).blur(function() {
        if (selectRtFrom) {
            $("#returnFroCity").val($('ul#ui-id-1 li:first a').text())
        }
    });
    $("#returnToCity").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            //return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectRtTo = !1;
            this.value = terms;
            return !1
        }
    }).blur(function() {
        if (selectRtTo) {
            $("#returnToCity").val($('ul#ui-id-2 li:first a').text());
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    });
    $("#stayCity").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "hotel"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 3) {
               // return !1
            }
        },
        focus: function() {
            //return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = terms;
            return !1
        }
    }).blur(function() {
        if (selectTo) {
            $("#stayCity").val($('ul#ui-id-2 li:first a').text());
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    })
    
   var airlines="<option value='All'>Airlines</option><option value='VW'>AEROMAR</option><option value='3H'>AIR INUIT</option><option value='NQ'>AIR JAPAN</option><option value='MD'>AIR MADAGASCAR</option><option value='AZ'>ALITALIA</option><option value='JA'>B H AIRLINES</option><option value='NC'>NATIONAL JET SYSTEMS</option><option value='AQ'>9 AIR</option><option value='9B'>ACCESRAIL</option><option value='6U'>ACG AIR CARGO</option><option value='JP'>ADRIA AIRWAYS</option><option value='A3'>AEGEAN AIRLINES</option><option value='EI'>AER LINGUS</option><option value='NG'>AERO CONTRACTORS</option><option value='P5'>AERO REPUBLICA</option><option value='WV'>AERO VIP COMPANHIA TRANSPORTES</option><option value='H4'>AERO4M</option><option value='7L'>AEROCARIBBEAN</option><option value='A4'>AEROCOMERCIAL ORIENTE NORTE</option><option value='VB'>AEROENLACES NACIONALES</option><option value='SU'>AEROFLOT</option><option value='5P'>AEROLINEA PRINCIPAL CHILE</option><option value='AR'>AEROLINEAS ARGENTINAS</option><option value='2K'>AEROLINEAS GALAPAGOS</option><option value='P4'>AEROLINEAS SOSA</option><option value='A8'>AEROLINK UGANDA LIMITED</option><option value='5D'>AEROLITORAL</option><option value='AM'>AEROMEXICO</option><option value='VH'>AEROPOSTAL</option><option value='HN'>AFGHAN JET INTERNATIONAL</option><option value='FK'>AFRICA WEST CARGO  GHD</option><option value='AW'>AFRICA WORLD AIRLINES</option><option value='8U'>AFRIQIYAH AIRWAYS</option><option value='AH'>AIR ALGERIE</option><option value='G9'>AIR ARABIA</option><option value='E5'>AIR ARABIA EGYPT</option><option value='9P'>AIR ARABIA JORDAN</option><option value='QN'>AIR ARMENIA</option><option value='UU'>AIR AUSTRAL</option><option value='W9'>AIR BAGAN</option><option value='BT'>AIR BALTIC</option><option value='AB'>AIR BERLIN</option><option value='BP'>AIR BOTSWANA</option><option value='RU'>AIR BRIDGE CARGO</option><option value='2J'>AIR BURKINA</option><option value='BX'>AIR BUSAN</option><option value='SM'>AIR CAIRO</option><option value='TY'>AIR CALEDONIE</option><option value='AC'>AIR CANADA</option><option value='TX'>AIR CARAIBES</option><option value='UY'>AIR CAUCASUS</option><option value='CA'>AIR CHINA</option><option value='3E'>Air Choice One</option><option value='4F'>AIR CITY</option><option value='XK'>AIR CORSICA</option><option value='HF'>AIR COTE D IVOIRE</option><option value='YN'>AIR CREEBEC</option><option value='EN'>AIR DOLOMITI</option><option value='UX'>AIR EUROPA</option><option value='ED'>AIR EXPLORE</option><option value='F4'>AIR FLAMENCO</option><option value='AF'>AIR FRANCE</option><option value='ZX'>AIR GEORGIAN</option><option value='GL'>AIR GREENLAND</option><option value='GT'>AIR GUILIN</option><option value='NY'>AIR ICELAND</option><option value='KJ'>AIR INCHEON</option><option value='AI'>AIR INDIA</option><option value='IX'>AIR INDIA EXPRESS</option><option value='I9'>AIR ITALY</option><option value='JM'>AIR JAMAICA</option><option value='K7'>AIR KBZ</option><option value='JS'>AIR KORYO</option><option value='AL'>AIR LEISURE</option><option value='NX'>AIR MACAU</option><option value='KM'>AIR MALTA</option><option value='6T'>AIR MANDALAY</option><option value='CW'>AIR MARSHALL ISLANDS</option><option value='MK'>AIR MAURITIUS</option><option value='MC'>AIR MOBILITY COMMAND</option><option value='9U'>AIR MOLDOVA</option><option value='SW'>AIR NAMIBIA</option><option value='NZ'>AIR NEW ZEALAND</option><option value='PX'>AIR NIUGINI</option><option value='4N'>AIR NORTH</option><option value='YW'>AIR NOSTRUM</option><option value='OP'>AIR PEGASUS</option><option value='GZ'>AIR RAROTONGA</option><option value='PJ'>AIR SAINT PIERRE</option><option value='JU'>AIR SERBIA</option><option value='L4'>AIR SERVICE LIEGE</option><option value='HM'>AIR SEYCHELLES</option><option value='4D'>AIR SINAI</option><option value='VT'>AIR TAHITI</option><option value='TN'>AIR TAHITI NUI</option><option value='TC'>AIR TANZANIA</option><option value='6C'>AIR TIMOR</option><option value='8T'>AIR TINDI</option><option value='TS'>AIR TRANSAT</option><option value='8C'>AIR TRANSPORT INTERNATIONAL</option><option value='3N'>AIR URGA</option><option value='NF'>AIR VANUATU</option><option value='ZW'>AIR WISCONSIN</option><option value='UM'>AIR ZIMBABWE</option><option value='AK'>AIRASIA SDN BHD</option><option value='D7'>AIRASIAX SDN BHD</option><option value='SB'>AIRCALIN</option><option value='SZ'>AIRCOMPANY SOMON AIR</option><option value='HD'>AIRDO</option><option value='QP'>AIRKENYA AVIATION</option><option value='CG'>AIRLINES PNG</option><option value='TL'>AIRNORTH</option><option value='AP'>AIRONE S.P.A.</option><option value='2P'>AIRPHIL EXPRESS</option><option value='FL'>AIRTRAN AIRWAYS</option><option value='J6'>AIRWAYS INTERNATIONAL</option><option value='IS'>AIS AIRLINES B.V.</option><option value='2B'>AK BARS AERO</option><option value='6L'>AKLAK AIR</option><option value='AS'>ALASKA AIRLINES</option><option value='NH'>ALL NIPPON AIRWAYS</option><option value='G4'>ALLEGIANT AIR</option><option value='UJ'>ALMASRIA UNIVERSAL AIRLINES</option><option value='K4'>ALS LTD</option><option value='6I'>ALSIE EXPRESS</option><option value='9S'>AMADEUS PDF</option><option value='8Z'>AMADEUS PDF</option><option value='7S'>AMADEUS PDF</option><option value='MZ'>AMAKUSA AIRLINES</option><option value='HP'>AMAPOLA FLYG AB</option><option value='ZP'>AMASZONAS DEL PARAGUAY</option><option value='Z8'>AMASZONAS S.A.</option><option value='AA'>AMERICAN AIRLINES</option><option value='2V'>AMTRAK</option><option value='OY'>ANDES LINEAS AEREAS</option><option value='IP'>APSARA INTERNATIONAL AIR</option><option value='FG'>ARIANA AFGHAN AIRLINES</option><option value='IZ'>ARKIA</option><option value='6A'>ARMENIA AIRWAYS</option><option value='R7'>ASERCA</option><option value='HB'>ASIA ATLANTIC AIRLINES</option><option value='DM'>ASIAN AIR </option><option value='KV'>ASIAN EXPRESS AIRLINE</option><option value='YJ'>ASIAN WINGS AIRWAYS</option><option value='OZ'>ASIANA AIRLINES</option><option value='RC'>ATLANTIC AIRWAYS</option><option value='L5'>ATLANTIQUE AIR</option><option value='5Y'>ATLAS AIR</option><option value='KK'>ATLASJET AIRLINES</option><option value='UI'>AURIC AIR</option><option value='GR'>AURIGNY AIR</option><option value='HZ'>AURORA AIRLINES</option><option value='AU'>AUSTRAL LINEAS AEREAS</option><option value='OS'>AUSTRIAN AIRLINES</option><option value='6V'>AVANZA</option><option value='YK'>AVIA TRAFFIC COMPANY</option><option value='AV'>AVIANCA</option><option value='O6'>Avianca Brazil</option><option value='AO'>AVIANOVA LCC</option><option value='MV'>AVIASTAR MANDIRI</option><option value='GU'>AVIATECA</option><option value='X9'>AVION EXPRESS</option><option value='J2'>AZERBAIJAN AIRLINES</option><option value='AD'>AZUL LINHAS AEREAS</option><option value='CJ'>BA CITYFLYER</option><option value='J4'>BADR AIRLINES</option><option value='UP'>BAHAMASAIR</option><option value='PG'>BANGKOK AIRWAYS</option><option value='5B'>BASSAKA AIR</option><option value='BO'>BB AIRWAYS</option><option value='JV'>BEARSKIN AIRLINES</option><option value='JD'>BEIJING CAPITAL AIRLINES</option><option value='B2'>BELAVIA</option><option value='L9'>BELLE AIR</option><option value='LZ'>BELLE AIR COMPANY</option><option value='CH'>BEMIDJI AIRLINES</option><option value='8E'>BERING AIR</option><option value='J8'>BERJAYA AIR</option><option value='8H'>BH AIR</option><option value='BG'>BIMAN BANGLADESH AIRLINE</option><option value='NT'>BINTER CANARIAS</option><option value='BZ'>BLUE BIRD AIRWAYS</option><option value='BV'>BLUE PANORAMA AIRLINES</option><option value='KF'>BLUE1</option><option value='BM'>BMI REGIONAL</option><option value='OB'>BOLIVIANA DE AVIACION</option><option value='YB'>BORA JET</option><option value='4B'>BOUTIQUE AIR</option><option value='5Q'>BQB LINEAS AEREAS</option><option value='DC'>BRAATHENS REGIONAL</option><option value='E6'>BRINGER AIR CARGO</option><option value='BA'>BRITISH AIRWAYS</option><option value='SN'>BRUSSELS AIRLINES</option><option value='U4'>BUDDHA AIR</option><option value='FB'>BULGARIA AIR</option><option value='H6'>BULGARIAN AIR</option><option value='XM'>C.A.I. FIRST S.P.A.</option><option value='VE'>C.A.I. SECOND S.P.A</option><option value='MO'>CALM AIR INTERNATIONAL</option><option value='QC'>CAMAIR CO</option><option value='K6'>CAMBODIA ANGKOR AIR</option><option value='BD'>CAMBODIA BAYON AIRLINES</option><option value='5T'>CANADIAN NORTH</option><option value='9K'>CAPE AIR</option><option value='CV'>CARGOLUX AIRLINES INT'L</option><option value='BW'>CARIBBEAN AIRLINES</option><option value='CX'>CATHAY PACIFIC</option><option value='KX'>CAYMAN AIRWAYS</option><option value='5J'>CEBU AIR</option><option value='C2'>CEIBA INTERCONTINENTAL</option><option value='5Z'>CEMAIR</option><option value='9M'>CENTRAL MOUNTAIN AIR</option><option value='CE'>CHALAIR AVIATION</option><option value='6Q'>CHAM WINGS AIRLINES</option><option value='C5'>CHAMPLAIN ENTERPRISES</option><option value='9H'>CHANGAN AIRLINES</option><option value='RP'>CHAUTAUQUA AIRLINES</option><option value='EU'>CHENGDU AIRLINES</option><option value='CI'>CHINA AIRLINES</option><option value='CK'>CHINA CARGO AIRLINES</option><option value='MU'>CHINA EASTERN AIRLINES</option><option value='G5'>CHINA EXPRESS AIRLINES</option><option value='CZ'>CHINA SOUTHERN AIRLINES</option><option value='PN'>CHINA WEST AIR</option><option value='OQ'>CHONGQING AIRLINES</option><option value='QI'>CIMBER A/S</option><option value='C7'>CINNAMON AIR</option><option value='QG'>CITILINK</option><option value='CF'>CITY AIRLINE</option><option value='E8'>CITY AIRWAYS</option><option value='WX'>CITYJET</option><option value='CC'>CM AIRLINES</option><option value='GY'>COLORFUL GUIZHOU AIRLINE</option><option value='MN'>COMAIR</option><option value='BU'>COMPAGNIE AFRICAINE D'AVIATION</option><option value='CP'>COMPASS AIRLINES</option><option value='DE'>CONDOR</option><option value='DF'>CONDOR BERLIN</option><option value='CO'>CONTINENTAL AIRLINES</option><option value='CM'>COPA AIRLINES</option><option value='CD'>CORENDON DUTCH AIRLINES</option><option value='SS'>CORSAIR</option><option value='OU'>CROATIA AIRLINES</option><option value='C8'>CRONOS AIRLINES</option><option value='CU'>CUBANA DE AVIACION</option><option value='OK'>CZECH AIRLINES</option><option value='D3'>DAALLO AIRLINES</option><option value='9J'>DANA AIRLINES</option><option value='DX'>DANISH AIR</option><option value='DL'>DELTA AIRLINES</option><option value='DQ'>DELTA CONNECTION</option><option value='DO'>DISCOVERY AIRWAYS</option><option value='Z6'>DNIPROAVIA</option><option value='3D'>DOKASCH</option><option value='R6'>DOT LT</option><option value='DH'>DOUNIAH AIRLINES</option><option value='KA'>DRAGONAIR</option><option value='KB'>DRUK AIR</option><option value='H7'>EAGLE AIR</option><option value='B5'>EAST AFRICAN SAFARI AIR</option><option value='EG'>EAST AIR</option><option value='EA'>EAST HORIZON AIRLINES</option><option value='T3'>EASTERN AIRWAYS</option><option value='U2'>EASYJET</option><option value='WK'>EDELWEISS AIR</option><option value='MS'>EGYPTAIR</option><option value='LY'>EL AL ISRAEL AIRLINES</option><option value='7Q'>ELITE AIRWAYS</option><option value='EL'>ELLINAIR</option><option value='EK'>EMIRATES</option><option value='9E'>ENDEAVOR AIR</option><option value='MQ'>ENVOY AIR</option><option value='LC'>EQUATORIAL CONGO AIRLINE</option><option value='E4'>ESTELAR LATINOAMERICA</option><option value='OV'>ESTONIAN AIR</option><option value='ET'>ETHIOPIAN AIRLINES</option><option value='EY'>ETIHAD AIRWAYS</option><option value='QY'>EUROPEAN AIR</option><option value='WL'>EUROPEAN COASTAL AIRLINE</option><option value='9F'>EUROSTAR</option><option value='EW'>EUROWINGS</option><option value='BR'>EVA AIR</option><option value='5V'>EVERTS</option><option value='EV'>EXPRESSJET AIRLINES</option><option value='FE'>FAR EASTERN</option><option value='FN'>FASTJET AIRLINES</option><option value='FJ'>FIJI AIRWAYS</option><option value='AY'>FINNAIR</option><option value='FC'>FINNCOMM AIRLINES</option><option value='7F'>FIRST AIR</option><option value='7B'>FLY BLUE CRANE</option><option value='EF'>FLY CAMINTER</option><option value='5L'>FLY SALONE</option><option value='5K'>FLY TRANSPORTES AEREO</option><option value='BE'>FLYBE</option><option value='FZ'>FLYDUBAI</option><option value='FY'>FLYFIREFLY</option><option value='XY'>FLYNAS</option><option value='ND'>FMI AIR</option><option value='Q5'>FORTY MILE AIR</option><option value='RD'>FRENCH MILITARY FORCE</option><option value='F9'>FRONTIER AIRLINES</option><option value='JH'>FUJI DREAM AIRLINES</option><option value='FU'>FUZHOU AIRLINES</option><option value='3G'>GAMBIA BIRD AIRLINES</option><option value='GC'>GAMBIA INTL AIRLINES</option><option value='GA'>GARUDA INDONESIA</option><option value='4G'>GAZPROMAVIA</option><option value='A9'>GEORGIAN AIRWAYS</option><option value='ST'>GERMANIA</option><option value='GM'>GERMANIA FLUG AG</option><option value='4U'>GERMANWINGS</option><option value='G6'>GHADAMES AIR</option><option value='GH'>GLOBUS LLC</option><option value='Z5'>GMG AIRLINES</option><option value='G8'>GO AIRLINES</option><option value='G7'>GOJET AIRLINES</option><option value='CN'>GRAND CHINA AIR</option><option value='ZK'>GREAT LAKES AVIATION</option><option value='GX'>GUANGXI BEIDU GULF AIRLINES</option><option value='G2'>GUINEA AIRLINES</option><option value='GF'>GULF AIR</option><option value='HR'>HAHN AIR</option><option value='H1'>HAHN AIR</option><option value='HU'>HAINAN AIRLINES</option><option value='H5'>HAITI AVIATION</option><option value='7Z'>HALCYON AIR CABO VERDE</option><option value='HA'>HAWAIIAN AIRLINES</option><option value='BH'>HAWKAIR</option><option value='YO'>HELI AIR</option><option value='UV'>HELICOPTEROS DEL SURESTE</option><option value='JB'>HELIJET INTERNATIONAL</option><option value='HJ'>HELLAS JET</option><option value='2L'>HELVETIC AIRWAYS</option><option value='H3'>HERMES AIRLINES</option><option value='H8'>HESA AIRLINES</option><option value='UD'>HEX AIR</option><option value='H9'>HIMALAYA AIRLINES</option><option value='OI'>HINTERLAND AVIATION</option><option value='HC'>HOLIDAYS CZECH AIRLINES</option><option value='HX'>HONG KONG AIRLINES</option><option value='UO'>HONG KONG EXPRESS AIRWAYS</option><option value='AN'>HOP AIRLINAIR</option><option value='DB'>HOP BRIT AIR</option><option value='YS'>HOP REGIONAL</option><option value='QX'>HORIZON AIR</option><option value='MR'>HUNNU AIR</option><option value='IB'>IBERIA</option><option value='FW'>IBEX AIRLINES</option><option value='FI'>ICELANDAIR</option><option value='V8'>ILIAMNA AIR</option><option value='6E'>INDIGO</option><option value='XT'>INDONESIA AIRASIA EXTRA</option><option value='7I'>INSEL AIR INTERNATIONAL</option><option value='D6'>INTER AIR</option><option value='I7'>INTER ILES AIR</option><option value='4O'>INTERJET</option><option value='IR'>IRAN AIR</option><option value='B9'>IRAN AIR TOURS</option><option value='NV'>IRANIAN NAFT AIRLINE</option><option value='IA'>IRAQI AIRWAYS</option><option value='WP'>ISLAND AIR</option><option value='Q2'>ISLAND AVIATION</option><option value='T6'>ISLAND TRANSVOYAGER</option><option value='WC'>ISLENA AIRLINES</option><option value='6H'>ISRAIR AIRLINES</option><option value='JC'>JAPAN AIR COMMUTER</option><option value='JL'>JAPAN AIRLINES</option><option value='JZ'>JATAYU GELANG SEJAHTERA</option><option value='J9'>JAZEERA AIRWAYS</option><option value='QK'>JAZZ AVIATION</option><option value='9W'>JET AIRWAYS</option><option value='JF'>JET ASIA AIRWAYS</option><option value='S2'>JET LITE</option><option value='JO'>JET TIME</option><option value='LS'>JET2.COM</option><option value='TB'>JETAIRFLY</option><option value='B6'>JETBLUE</option><option value='GK'>JETSTAR</option><option value='JQ'>JETSTAR</option><option value='3K'>JETSTAR ASIA</option><option value='BL'>JETSTAR PACIFIC AIRLINES</option><option value='RY'>JIANGXI AIR</option><option value='LJ'>JIN AIR</option><option value='3B'>JOB AIR</option><option value='R5'>JORDAN AVIATION</option><option value='JR'>JOY AIR</option><option value='KC'>JSC AIR ASTANA</option><option value='DV'>JSC AIRCOMPANY SCAT</option><option value='R3'>JSC AIRCOMPANY YAKUTIA</option><option value='D9'>JSC DONAVIA</option><option value='IH'>JSC IRTYSH-AIR</option><option value='ZS'>JSC KAZAVIASPAS</option><option value='5N'>JSC NORDAVIA</option><option value='HO'>JUNEYAO AIRLINES</option><option value='RQ'>KAM AIR</option><option value='5R'>KARTHAGO AIRLINES</option><option value='M5'>KENMORE AIR</option><option value='4K'>KENN BOREK AIR</option><option value='KQ'>KENYA AIRWAYS</option><option value='KW'>KHARKIV AIRLINES</option><option value='2S'>KINDA AIRLINES</option><option value='WA'>KLM CITYHOPPER</option><option value='KL'>KLM ROYAL DUTCH AIRLINES</option><option value='7K'>KOGALYMAVIA AIRLINES</option><option value='KE'>KOREAN AIR</option><option value='KY'>KUNMING AIRLINES</option><option value='KU'>KUWAIT AIRWAYS</option><option value='LK'>KYRGYZ AIRLINES</option><option value='6K'>KYRGYZ TRANS AVIA</option><option value='WJ'>LABRADOR AIRWAYS LIMITED</option><option value='LR'>LACSA</option><option value='TM'>LAM MOZAMBIQUE</option><option value='LA'>LAN AIRLINES</option><option value='UC'>LAN CHILE CARGO</option><option value='4C'>LAN COLOMBIA AIRLINES</option><option value='LP'>LAN PERU</option><option value='XL'>LANECUADOR AEROLANE SA</option><option value='QV'>LAO AIRLINES</option><option value='LF'>LAO CENTRAL AIRLINES</option><option value='JJ'>LATAM AIRLINES BRAZIL</option><option value='LB'>LEPL</option><option value='HE'>LGW LUFTFAHRTGES WALTER</option><option value='LI'>LIAT</option><option value='LN'>LIBYAN AIRLINES</option><option value='IK'>LLC IKAR</option><option value='LM'>LOGANAIR</option><option value='LO'>LOT POLISH AIRLINES</option><option value='LH'>LUFTHANSA</option><option value='LT'>LUFTHANSA CITYLINE</option><option value='CL'>Lufthansa Cityline Gmbh</option><option value='LG'>LUXAIR</option><option value='W5'>MAHAN AIRLINES</option><option value='MH'>MALAYSIA AIRLINES</option><option value='MA'>MALEV HUNGARIAN AIRLINES</option><option value='OD'>MALINDO AIRWAY</option><option value='TF'>MALMO AVIATION</option><option value='RI'>MANDALA AIRLINES</option><option value='AE'>MANDARIN AIRLINES</option><option value='JE'>MANGO</option><option value='7Y'>MANN YADANARPON AIRLINES</option><option value='MP'>MARTINAIR</option><option value='L6'>MAURITANIAN AIRLINES INT</option><option value='VM'>MAX AIR</option><option value='MY'>MAYA ISLAND AIR</option><option value='VL'>MED VIEW AIRLINES</option><option value='LV'>MEGA MALDIVES</option><option value='JI'>MERAJ AIR</option><option value='IG'>MERIDIANA FLY</option><option value='YV'>MESA AIRLINES</option><option value='MX'>MEXICANA</option><option value='LL'>MIAMI AIR INTERNATIONAL</option><option value='OM'>MIAT MONGOLIAN AIRLINES</option><option value='8G'>MID AFRICA AVIATION</option><option value='ME'>MIDDLE EAST AIRLINES</option><option value='MJ'>MIHIN LANKA</option><option value='MW'>MOKULELE FLIGHT</option><option value='2M'>MOLDAVIAN AIRLINES</option><option value='QM'>MONACAIR</option><option value='ZB'>MONARCH AIRLINES</option><option value='YM'>MONTENEGRO AIRLINES</option><option value='5M'>MONTSERRAT AIRWAYS</option><option value='3R'>MOSKOVIA AIRLINES</option><option value='M9'>MOTOR-SICH JSC</option><option value='UB'>MYANMAR NATIONAL AIRLINES</option><option value='IC'>NACIL INDIAN AIRLINE</option><option value='T2'>NAKINA AIR</option><option value='IN'>NAM AIR</option><option value='9Y'>NATIONAL AIRWAYS</option><option value='ON'>NAURU AIRLINES</option><option value='ZN'>NAYSA</option><option value='RA'>NEPAL AIRLINES</option><option value='EJ'>NEW ENGLAND AIRLINES</option><option value='E3'>NEW GEN</option><option value='JN'>NEW LIVINGSTON</option><option value='JX'>NICE HELICOPTERES</option><option value='HG'>NIKI</option><option value='DD'>NOK AIR</option><option value='XW'>NOKSCOOT AIRLINES</option><option value='N6'>NOMAD AVIATION</option><option value='NA'>NORTH AMERICAN AIRLINES</option><option value='M3'>NORTH FLYING AS</option><option value='HW'>NORTH WRIGHT AIR</option><option value='J3'>NORTHWESTERN AIR LEASE</option><option value='D8'>NORWEGIAN AIR INT'L</option><option value='DY'>NORWEGIAN AIR SHUTTLE</option><option value='DU'>NORWEGIAN LONG HAUL AS</option><option value='N9'>NOVA AIRLINES</option><option value='OA'>OLYMPIC AIR</option><option value='WY'>OMAN AIR</option><option value='8Q'>ONUR AIR</option><option value='EC'>OPENSKIES</option><option value='R2'>ORENAIR</option><option value='OC'>ORIENTAL AIR BRIDGE</option><option value='3F'>PACIFIC AIRWAYS</option><option value='8P'>PACIFIC COASTAL AIRLINES</option><option value='LW'>PACIFIC WINGS</option><option value='PK'>PAKISTAN INTERNATIONAL</option><option value='7N'>PAN AMERICAN WORLD</option><option value='8A'>PANAMA AIRWAYS</option><option value='HI'>PAPILLON AIRWAYS</option><option value='2Z'>PASSAREDO TRANSPORTES</option><option value='MM'>PEACH AVIATION</option><option value='PC'>PEGASUS AIRLINES</option><option value='KS'>PENAIR</option><option value='PE'>PEOPLES VIENNALINE</option><option value='YP'>PERIMETER AVIATION</option><option value='P9'>PERUVIAN AIR LINE</option><option value='PR'>PHILIPPINE AIRLINES</option><option value='F6'>PLUS ULTRA</option><option value='PU'>PLUS ULTRA LINEAS AEREAS</option><option value='Z3'>PM AIR</option><option value='DP'>POBEDA AIRLINES</option><option value='PI'>POLAR AIRLINES</option><option value='YQ'>POLET AIRLINES</option><option value='OL'>POLYNESIAN</option><option value='PD'>PORTER AIRLINES</option><option value='NI'>PORTUGALIA</option><option value='PW'>PRECISION AIR</option><option value='PF'>PRIMERA AIR SCANDINAVIA</option><option value='P0'>PROFLIGHT COMMUTER</option><option value='PB'>PROVINCIAL AIRLINES</option><option value='OH'>PSA AIRLINES</option><option value='QZ'>PT INDONESIA AIRASIA</option><option value='IW'>PT WINGS ABADI AIRLINES</option><option value='ZR'>PUNTO AZUL</option><option value='QF'>QANTAS AIRWAYS</option><option value='QR'>QATAR AIRWAYS</option><option value='IQ'>QAZAQ AIR</option><option value='QB'>QESHM AIR</option><option value='RT'>RAINBOW AIRLINES</option><option value='7H'>RAVN AKASKA</option><option value='WZ'>RED WINGS AIRLINES</option><option value='8N'>REGIONAL AIR SERVICES</option><option value='ZL'>REGIONAL EXPRESS</option><option value='R4'>RELIABLE UNIQUE</option><option value='4R'>RENFE VIAJEROS</option><option value='YX'>REPUBLIC AIRLINE</option><option value='RR'>ROYAL AIR FORCE</option><option value='AT'>ROYAL AIR MAROC</option><option value='BI'>ROYAL BRUNEI</option><option value='RL'>ROYAL FALCON</option><option value='RJ'>ROYAL JORDANIAN</option><option value='DR'>RUILI AIRLINES</option><option value='7R'>RUSLINE</option><option value='RM'>RUTACA</option><option value='FR'>RYANAIR</option><option value='PV'>SAINT BARTH COMMUTER</option><option value='RZ'>SANSA</option><option value='S3'>SANTA BARBARA AIRLINES</option><option value='6W'>SARATOV AIRLINES</option><option value='SP'>SATA AIR ACORES</option><option value='S4'>SATA AZORES AIRLINES</option><option value='SV'>SAUDI ARABIAN AIRLINES</option><option value='6S'>SAUDI GULF AIRLINES</option><option value='SK'>SCANDINAVIAN AIRLINES</option><option value='YR'>SCENIC AIRLINES</option><option value='TZ'>SCOOT</option><option value='BB'>SEABORNE AIRLINES</option><option value='XO'>SEAIR</option><option value='DN'>SENEGAL AIRLINES</option><option value='D2'>SEVERSTAL AIR</option><option value='NL'>SHAHEEN AIR INTL</option><option value='SC'>SHANDONG AIRLINES</option><option value='FM'>SHANGHAI AIRLINES</option><option value='ZH'>SHENZHEN AIRLINES</option><option value='5E'>SIAM GA</option><option value='5E'>SIAM GA</option><option value='S7'>SIBERIA AIRLINES</option><option value='3U'>SICHUAN AIRLINES</option><option value='MI'>SILKAIR</option><option value='3M'>SILVER AIRWAYS</option><option value='SQ'>SINGAPORE AIRLINES</option><option value='ZY'>SKY AIRLINES</option><option value='ZA'>SKY ANGKOR AIRLINES</option><option value='GQ'>SKY EXPRESS</option><option value='TE'>SKY TAXI</option><option value='Q7'>SKYBAHAMAS AIRLINES</option><option value='GW'>SKYGREECE AIRLINES</option><option value='F3'>SKYKING</option><option value='BC'>SKYMARK AIRLINES</option><option value='6J'>SKYNET ASIA AIRWAYS</option><option value='NB'>SKYPOWER EXPRESS</option><option value='OO'>SKYWEST AIRLINES</option><option value='C9'>SKYWISE</option><option value='S5'>SMALL PLANET</option><option value='P7'>SMALL PLANET AIRLINE</option><option value='M4'>SMART AVIATION</option><option value='2E'>SMOKEY BAY AIR</option><option value='2C'>SNCF</option><option value='IE'>SOLOMON AIRLINES</option><option value='S8'>SOUNDS AIR</option><option value='SA'>SOUTH AFRICAN AIRWAYS</option><option value='9X'>Southern Airways</option><option value='WN'>SOUTHWEST AIRLINES</option><option value='JK'>SPANAIR</option><option value='5W'>SPEED ALLIANCE WESTBAHN</option><option value='SG'>SPICEJET</option><option value='NK'>SPIRIT AIRLINES</option><option value='9C'>SPRING AIRLINES</option><option value='IJ'>SPRING AIRLINES</option><option value='UL'>SRILANKAN AIRLINES</option><option value='4S'>STAR AIRWAYS</option><option value='7G'>STAR FLYER</option><option value='S9'>STARBOW</option><option value='RE'>STOBART AIR</option><option value='8F'>STP AIRWAYS</option><option value='SD'>SUDAN AIRWAYS</option><option value='6G'>SUN AIR EXPRESS LLC</option><option value='EZ'>SUN AIR OF SCANDINAVIA</option><option value='SY'>SUN COUNTRY</option><option value='XQ'>SUN EXPRESS</option><option value='WG'>SUNWING AIRLINES</option><option value='PY'>SURINAM AIRWAYS</option><option value='HS'>SVENSKA DIREKTFLYG AB</option><option value='LX'>SWISS INTERNATIONAL</option><option value='7E'>SYLT AIR GMBH</option><option value='FS'>SYPHAX AIRLINES SA</option><option value='RB'>SYRIAN ARAB AIRLINES</option><option value='DT'>TAAG</option><option value='HH'>TABAN AIRLINES</option><option value='TA'>TACA INTERNATIONAL AIRLINES</option><option value='7J'>TAJIK AIR</option><option value='EQ'>TAME LINEA AEREA DEL ECUADOR</option><option value='QT'>TAMPA CARGO</option><option value='4E'>TANANA AIR</option><option value='TQ'>TANDEM AERO</option><option value='TP'>TAP PORTUGAL</option><option value='K3'>TAQUAN AIR</option><option value='RO'>TAROM</option><option value='B3'>TASHI AIR</option><option value='U9'>TATARSTAN AIR</option><option value='FD'>THAI AIRASIA</option><option value='XJ'>THAI AIRASIA</option><option value='TG'>THAI AIRWAYS</option><option value='SL'>THAI LION MENTARI</option><option value='WE'>THAI SMILE AIRWAYS</option><option value='VZ'>THAI VIETJET AIR</option><option value='2H'>THALYS INTERNATIONAL</option><option value='DK'>THOMAS COOK AIRLINES</option><option value='GS'>TIANJIN AIRLINES</option><option value='3P'>TIARA AIR ARUBA</option><option value='TT'>TIGER AIRWAYS AUSTRALIA</option><option value='DG'>TIGERAIR PHILIPPINES</option><option value='IT'>TIGERAIR TAIWAN</option><option value='ZT'>TITAN AIRWAYS</option><option value='C3'>TRADE AIR</option><option value='AX'>TRANS STATES AIRLINES</option><option value='PH'>TRANSAVIA DENMARK</option><option value='TO'>TRANSAVIA FRANCE</option><option value='8B'>TRANSNUSA AVIATION</option><option value='4P'>TRAVEL AIR</option><option value='3Z'>TRAVEL SERVICE POLSKA</option><option value='T4'>TRIP</option><option value='X3'>TUIFLY</option><option value='OR'>TUIFLY NETHERLANDS</option><option value='TU'>TUNISAIR</option><option value='TK'>TURKISH AIRLINES</option><option value='PS'>UKRAINE INTL AIRLINES</option><option value='B7'>UNI AIRWAYS</option><option value='UA'>UNITED AIRLINES</option><option value='4H'>UNITED AIRWAYS BANGLADESH </option><option value='UQ'>URUMQI AIRLINES</option><option value='BS'>US-BANGLA AIRLINES</option><option value='UT'>UTAIR AVIATION JSC</option><option value='HY'>UZBEKISTAN AIRWAYS</option><option value='ZV'>V AIR</option><option value='VF'>VALUAIR</option><option value='V9'>VAN AIR EUROPE</option><option value='JW'>VANILLA AIR</option><option value='VC'>VIA AIRLINES</option><option value='VJ'>VIETJET AVIATION</option><option value='VN'>VIETNAM AIRLINES</option><option value='BF'>VINCENT AVIATION</option><option value='VX'>VIRGIN AMERICA</option><option value='VS'>VIRGIN ATLANTIC</option><option value='VA'>VIRGIN AUSTRALIA</option><option value='UK'>VISTARA</option><option value='Y4'>VOLARIS</option><option value='V7'>VOLOTEA</option><option value='G3'>VRG LINHAS AEREAS S A</option><option value='VY'>VUELING AIRLINES</option><option value='WT'>WASAYA AIRWAYS</option><option value='WH'>WEST AFRICAN AIRLINES</option><option value='9L'>WEST LINK AIRWAYS</option><option value='WS'>WESTJET</option><option value='WR'>WESTJET ENCORE</option><option value='WW'>WOW AIR</option><option value='MF'>XIAMEN AIRLINES</option><option value='SE'>XL AIRWAYS</option><option value='YC'>YAMAL AIRLINES</option><option value='Y8'>YANGTZE RIVER EXPRESS</option><option value='Y2'>YGNUS AIR</option><option value='A6'>YUNNAN HONG TU AIRLINES </option><option value='YI'>YUNNAN YINGAN AIRLINE</option><option value='ZO'>ZAGROS AIRLINES</option><option value='Z4'>ZAGROS JET</option><option value='B4'>ZANAIR</option><option value='GJ'>ZHEJIANG LOONG AIRLINES</option>";
    
    $("#select-air").html(airlines);
    
 var adultP="<option value='0'>0</option><option value='1' selected>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>";
    
 $("#adult").html(adultP);
 
 var paxP="<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option>";
    
    $("#child").html(paxP);
    $("#infant").html(paxP);
    $("#infantWs").html(paxP);
    
    
    $("#adultDeal").html(adultP);
    $("#childDeal").html(paxP);
    $("#infantDeal").html(paxP);
    $("#infantWsDeal").html(paxP);
    
    
});

function imgExists(imgPath) {
    var http = jQuery.ajax({
        type: "HEAD",
        url: imgPath,
        async: !1
    });
    return http.status != 404
}
