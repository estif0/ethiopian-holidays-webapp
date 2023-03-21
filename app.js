function generateTable() {
    var input = document.getElementById("inputNumber").value;
    var table = document.getElementById("dynamicTable");
    for (var i = 0; i < 15; i++) {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = input;
        cell2.innerHTML = parseInt(input) + 2 * i;
    }
}

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

    }
    find_beale_metqe() {
        /*  The function finds Beale Metqe which is needed for further calculations to compute the day of other holidays  */
        if (30 > this.metqe >= 15) {
            return `${this.months[1]} ${this.metqe}`
        }
        else if (13 > this.metqe >= 2) {
            return `${this.months[2]} ${this.metqe}`
        }
        else {
            return `${this.months[1]} 30`
        }
    }
    find_tewsak() {
        /*  Finds Tewsak which is needed for further calculation to find the day of the holidays"" */
        m, d = this.beale_metqe.split();
        return this.elete_tewsag[this.find_name_of_the_day(int(d), m)];
    }
    day_of_the_holiday(beal) {

        /*  Finds the day of the holiday using a dictionary from below  */

        day_of_the_holiday = this.eywered_eyareg[beal][0] + this.mebaja_hamer
        if (day_of_the_holiday > 30) {
            day_of_the_holiday = day_of_the_holiday % 30
        }

        if (this.eywered_eyareg[beal][2] <= day_of_the_holiday <= 30) { MDHoliday = f`${this.eywered_eyareg[beal][1][0]} ${day_of_the_holiday}` }
        else if (1 <= day_of_the_holiday <= this.eywered_eyareg[beal][3]) {
            MDHoliday = f`${this.eywered_eyareg[beal][1][1]} ${day_of_the_holiday}`
        }

        return f`${this.day_name(MDHoliday)} ${MDHoliday}`
    }
    findDebireZeyit() {
        /*  finds when the day when debre_zeyit Holiday occurs  */
        month, day = this.find_tsome_nenewe(this.beale_metqe, this.mebaja_hamer).split()
        nenewe = int(day) + 41
        increment = 0
        while (nenewe > 30) {
            nenewe -= 30
        }
        increment += 1
        month = this.months[(this.astifeWer[month] / 2) + increment]
        fullDay = f`${month} ${nenewe}`
        return f`${this.day_name(fullDay)} ${month} ${nenewe}`
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
console.log(year.new_year_day)
