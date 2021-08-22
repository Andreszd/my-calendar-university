const periodsDay = [
    {
        start: "645",
        end: "730",
    },
    {
        start: "730",
        end: "815",
    },
    {
        start: "815",
        end: "900",
    },
    {
        start: "900",
        end: "945",
    },
    {
        start: "945",
        end: "1030",
    },
    {
        start: "1030",
        end: "1115",
    },
    {
        start: "1115",
        end: "1200",
    },
    {
        start: "1200",
        end: "1245",
    },
    {
        start: "1245",
        end: "1330",
    },
    {
        start: "1330",
        end: "1415",
    },
    {
        start: "1415",
        end: "1500",
    },
    {
        start: "1500",
        end: "1545",
    },
    {
        start: "1545",
        end: "1630",
    },
    {
        start: "1630",
        end: "1715",
    },
    {
        start: "1715",
        end: "1800",
    },
    {
        start: "1800",
        end: "1845",
    },
    {
        start: "1845",
        end: "1930",
    },
    {
        start: "1930",
        end: "2015",
    },
    {
        start: "2015",
        end: "2100",
    },
    {
        start: "2100",
        end: "2145",
    },
];

export const calendar = {
    lunes: {
        periodsDay,
    },
    martes: {
        periodsDay,
    },
    miercoles: {
        periodsDay,
    },
    jueves: {
        periodsDay,
    },
    viernes: {
        periodsDay,
    },
    sabado: {
        periodsDay,
    },
};

export const calendarKeys = Object.keys(calendar);
export const calendarValues = Object.values(calendar);
