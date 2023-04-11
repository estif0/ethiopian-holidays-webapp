class Date {
    constructor(amete_mihret) {
        this.amete_mihret = amete_mihret;
        this.amete_alem = this.amete_mihret + 5500;
        this.amete_wengel = this.amete_wengel_list[this.amete_alem % 4];
        this.metene_rabit = Math.floor(this.amete_alem / 4);
        this.amete_total = this.amete_alem + this.metene_rabit + 2;
        this.new_year_day = (
            `${this.new_year_day_name[this.amete_total % 7]} ${this.months[1]} 1`
        )
        this.medeb = this.amete_alem % 19
        this.wenber = this.medeb == 0 ? 18 : this.medeb - 1
        this.abeqte = (
            this.wenber * 11 >= 30 ? (this.wenber * 11) % 30 : this.wenber * 11
        )
        this.metqe = 30 - this.abeqte
        this.beale_metqe = this.find_beale_metqe()
        this.tewsak = this.find_tewsak()
        this.mebaja_hamer = ((this.tewsak == 0 || this.tewsak == 30) ? this.tewsak : (this.metqe + this.tewsak) % 30
        )
        this.tsome_nenewe = `${this.day_name(this.find_tsome_nenewe(this.beale_metqe, this.mebaja_hamer))} ${this.find_tsome_nenewe(this.beale_metqe, this.mebaja_hamer)}`
        this.abiy_tsom = this.day_of_the_holiday("abiy_tsom")
        this.hosaina = this.day_of_the_holiday("hosaina")
        this.seqlet = this.day_of_the_holiday("seqlet")
        this.fasika = this.day_of_the_holiday("fasika")
        this.erkibe_kahinat = this.day_of_the_holiday("erkibe_kahinat")
        this.erget = this.day_of_the_holiday("erget")
        this.peraclitos = this.day_of_the_holiday("peraclitos")
        this.tsome_hawariyat = this.day_of_the_holiday("tsome_hawariyat")
        this.tsome_dihinet = this.day_of_the_holiday("tsome_dihinet")
        this.gena = ((this.amete_wengel != "ዘመነ ዮሐንስ") ? `${this.day_name('ታህሳስ 29')} ታህሳስ 29` : `${this.day_name('ታህሳስ 28')} ታህሳስ 28`
        )
        this.timket = `${this.day_name('ጥር 11')} ጥር 11`
        this.kana_zegelila = `${this.day_name('ጥር 12')} ጥር 12`
        this.mesqel = `${this.day_name('መስከረም 17')} መስከረም 17`
        this.beale_tsinset = `${this.day_name('መጋቢት 29')} መጋቢት 29`
        this.beale_simeon = `${this.day_name('የካቲት 8')} የካቲት 8`
        this.beale_girizat = `${this.day_name('ጥር 6')} ጥር 6`
        this.genbot_lideta = `${this.day_name('ግንቦት 1')} ግንቦት 1`
        this.debre_tabor = `${this.day_name('ነሐሴ 13')} ነሐሴ 13`
        this.tsome_lidet = ((this.amete_wengel != `ዘመነ ዮሐንስ`) ? `${this.day_name('ህዳር 16')} ህዳር 16` : `${this.day_name('ህዳር 15')} ህዳር 15`)
        this.day_of_timket = this.day_name(`ጥር 11`)
        this.tsome_gehad = ((this.day_of_timket == `አርብ` || this.day_of_timket == `ረቡዕ`) ? `${this.day_name('ጥር 10')} ጥር 10` : `የለም`)
        this.tsome_filseta = `${this.day_name('ነሐሴ 1')} ነሐሴ 1`
        this.tsome_filseta_mefchiya = `${this.day_name('ነሐሴ 16')} ነሐሴ 16`
        this.debre_zeyit = this.findDebireZeyit()
        this.print_title_list = [
            "እንቁጣጣሽ",
            "መስቅል",
            "የገና ፆም",
            "ገና",
            "ጾመ ገሃድ",
            "ጥምቀት",
            "ቃና ዘገሊላ",
            "ጾመ ነነዌ",
            "በዓለ ስምዖን",
            "ጾመ አብይ(ሁዳዴ)",
            "በአለ መስቀል ደብረዘይት",
            "በዓለ ትንሰት",
            "ሆሳዕና",
            "ስቅለት",
            "ፋሲካ",
            "ግንቦት ልደታ",
            "ርክበ ካህናት",
            "ዕርገት",
            "ጰራቅሊጦስ",
            "ጾመ ሃዋርያት(የሰኔ ጾም)",
            "ጾመ ድህነት",
            "ጾመ ፍልሰታ",
            "ደብልታቦር(ቡሄ)",
            "ጾመ ፍልሰታ መፍቻ",
        ]
        this.print_value_list = [
            this.new_year_day,
            this.mesqel,
            this.tsome_lidet,
            this.gena,
            this.tsome_gehad,
            this.timket,
            this.kana_zegelila,
            this.tsome_nenewe,
            this.beale_simeon,
            this.abiy_tsom,
            this.debre_zeyit,
            this.beale_tsinset,
            this.hosaina,
            this.seqlet,
            this.fasika,
            this.genbot_lideta,
            this.erkibe_kahinat,
            this.erget,
            this.peraclitos,
            this.tsome_hawariyat,
            this.tsome_dihinet,
            this.tsome_filseta,
            this.debre_tabor,
            this.tsome_filseta_mefchiya,
        ]
    }
    day_name(month_day_string) {
        /* """The function finds the name of the day like Monday,... when the parameter is a month and day string""" */
        let [month, day] = month_day_string.split(" ")
        return this.name_of_the_day[
            (
                this.yon[this.new_year_day_name[this.amete_total % 7]]
                + this.astifeWer[month]
                + parseInt(day)
            )
            % 7
        ]
    }

    find_tsome_nenewe() {
        // The function finds the day of nenewe fasting starts
        let [m, d] = this.beale_metqe.split(" ");
        if (parseInt(d) === 0 || parseInt(d) === 30) {
            return `የካቲት ${this.mebaja_hamer}`;
        } else if (this.mebaja_hamer > 30) {
            return `የካቲት ${this.mebaja_hamer % 30}`;
        } else if (m === "መስከረም") {
            return `ጥር ${this.mebaja_hamer}`;
        } else if (m === "ጥቅምት") {
            return `የካቲት ${this.mebaja_hamer}`;
        }
    }

    find_name_of_the_day(day, month) {
        /* """Finds the name of the day like the first function but the parameter is a separated day and month variable""" */
        return this.name_of_the_day[
            (
                this.yon[this.new_year_day_name[this.amete_total % 7]]
                + this.astifeWer[month]
                + day
            )
            % 7
        ]
    }


    find_beale_metqe() {
        // The function finds Beale Metqe which is needed for further calculations to compute the day of other holidays
        if (30 > this.metqe && this.metqe >= 15) {
            return `${this.months[1]} ${this.metqe}`;
        } else if (13 > this.metqe && this.metqe >= 2) {
            return `${this.months[2]} ${this.metqe}`;
        } else {
            return `${this.months[1]} 30`;
        }
    }

    find_tewsak() {
        /*  Finds Tewsak which is needed for further calculation to find the day of the holidays"" */
        let [m, d] = this.beale_metqe.split(" ");
        return this.elete_tewsag[this.find_name_of_the_day(parseInt(d), m)];
    }
    day_of_the_holiday(beal) {

        /*  Finds the day of the holiday using a dictionary from below  */
        let MDHoliday, day_of_the_holiday;
        day_of_the_holiday = this.eywered_eyareg[beal][0] + this.mebaja_hamer
        if (day_of_the_holiday > 30) {
            day_of_the_holiday = day_of_the_holiday % 30
        }

        if (this.eywered_eyareg[beal][2] <= day_of_the_holiday && day_of_the_holiday <= 30) {
            MDHoliday = `${this.eywered_eyareg[beal][1][0]} ${day_of_the_holiday}`
        }
        else if (1 <= day_of_the_holiday && day_of_the_holiday <= this.eywered_eyareg[beal][3]) {
            MDHoliday = `${this.eywered_eyareg[beal][1][1]} ${day_of_the_holiday}`
        }

        return `${this.day_name(MDHoliday)} ${MDHoliday}`
    }
    findDebireZeyit() {
        // finds when the day when debre_zeyit Holiday occurs
        let [month, day] = this.find_tsome_nenewe().split(" ");
        let nenewe = parseInt(day) + 41;
        let increment = 0;
        while (nenewe > 30) {
            nenewe -= 30;
            increment += 1;
        }
        month = this.months[Math.floor(this.astifeWer[month] / 2) + increment];
        let fullDay = `${month} ${nenewe}`;
        return `${this.day_name(fullDay)} ${month} ${nenewe}`;
    }


    /*  The following lists and dictionaries are the data used to find the days of the holidays.  */
    elete_tewsag = {
        "እሁድ": 7,
        "ሰኞ": 6,
        "ማክሰኞ": 5,
        "ረቡዕ": 4,
        "ሐሙስ": 3,
        "አርብ": 2,
        "ቅዳሜ": 8,
    }
    amete_wengel_list = { 0: "ዘመነ ዮሐንስ", 1: "ዘመነ ማቴዎስ", 2: "ዘመነ ማርቆስ", 3: "ዘመነ ሉቃስ" }
    new_year_day_name = {
        1: "እሁድ",
        2: "ሰኞ",
        3: "ማክሰኞ",
        4: "ረቡዕ",
        5: "ሐሙስ",
        6: "አርብ",
        0: "ቅዳሜ",
    }
    months = {
        1: "መስከረም",
        2: "ጥቅምት",
        3: "ህዳር",
        4: "ታህሳስ",
        5: "ጥር",
        6: "የካቲት",
        7: "መጋቢት",
        8: "ሚያዝያ",
        9: "ግንቦት",
        10: "ሰኔ",
        11: "ሀምሌ",
        12: "ነሐሴ",
    }
    yon = { "እሁድ": 5, "ሰኞ": 6, "ማክሰኞ": 7, "ረቡዕ": 1, "ሐሙስ": 2, "አርብ": 3, "ቅዳሜ": 4 }
    astifeWer = {
        "መስከረም": 2,
        "ጥቅምት": 4,
        "ህዳር": 6,
        "ታህሳስ": 8,
        "ጥር": 10,
        "የካቲት": 12,
        "መጋቢት": 14,
        "ሚያዝያ": 16,
        "ግንቦት": 18,
        "ሰኔ": 20,
        "ሀምሌ": 22,
        "ነሐሴ": 24,
    }
    name_of_the_day = this.new_year_day_name
    eywered_eyareg = {
        "abiy_tsom": [14, ["የካቲት", "መጋቢት"], 1, 5],
        "debre_zeyit": [11, ["የካቲት", "መጋቢት", "ሚያዝያ"], 28, 2],
        "hosaina": [2, ["መጋቢት", "ሚያዝያ"], 19, 23],
        "seqlet": [7, ["መጋቢት", "ሚያዝያ"], 24, 28],
        "fasika": [9, ["መጋቢት", "ሚያዝያ"], 26, 30],
        "erkibe_kahinat": [3, ["ሚያዝያ", "ግንቦት"], 20, 24],
        "erget": [18, ["ግንቦት", "ሰኔ"], 5, 9],
        "peraclitos": [28, ["ግንቦት", "ሰኔ"], 15, 19],
        "tsome_hawariyat": [29, ["ግንቦት", "ሰኔ"], 16, 20],
        "tsome_dihinet": [1, ["ግንቦት", "ሰኔ"], 18, 22],
    }
}

year = new Date(2015)
