const virusData = [
    // status: 1 -> up
    // status: 0 -> holding
    {
        id: 42001,
        county: 'Adams',
        cases: 4,
        status: 1,
        dateOfFirstCase: '2020-03-19',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-18',
                cases: 0,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 4,
            },
        ]
    },
    {
        id: 42003,
        county: 'Allegheny',
        cases: 28,
        status: 1,
        dateOfFirstCase: '2020-03-14',
        dateOfDisasterDeclaration: '2020-03-12',
        dailyOverview: [
            {
                date: '2020-03-13',
                cases: 0,
            },
            {
                date: '2020-03-14',
                cases: 2,
            },
            {
                date: '2020-03-15',
                cases: 4,
            },
            {
                date: '2020-03-16',
                cases: 5,
            },
            {
                date: '2020-03-17',
                cases: 7,
            },
            {
                date: '2020-03-18',
                cases: 11,
            },
            {
                date: '2020-03-19',
                cases: 16,
            },
            {
                date: '2020-03-20',
                cases: 28,
            },
        ]
    },
    {
        id: 42007,
        county: 'Beaver',
        cases: 3,
        status: 1,
        dateOfFirstCase: '2020-03-17',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-16',
                cases: 0,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 2,
            },
            {
                date: '2020-03-19',
                cases: 2,
            },
            {
                date: '2020-03-20',
                cases: 3,
            },
        ]
    },
    {
        id: 42011,
        county: 'Berks',
        cases: 5,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dateOfDisasterDeclaration: '2020-03-12',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 5,
            },
        ]
    },
    {
        id: 42017,
        county: 'Bucks',
        cases: 16,
        status: 1,
        dateOfFirstCase: '2020-03-11',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-10',
                cases: 0,
            },
            {
                date: '2020-03-11',
                cases: 2,
            },
            {
                date: '2020-03-12',
                cases: 2,
            },
            {
                date: '2020-03-13',
                cases: 3,
            },
            {
                date: '2020-03-14',
                cases: 3,
            },
            {
                date: '2020-03-15',
                cases: 4,
            },
            {
                date: '2020-03-16',
                cases: 5,
            },
            {
                date: '2020-03-17',
                cases: 8,
            },
            {
                date: '2020-03-18',
                cases: 9,
            },
            {
                date: '2020-03-19',
                cases: 12,
            },
            {
                date: '2020-03-20',
                cases: 16,
            },
        ]
    },
    {
        id: 42027,
        county: 'Centre',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-19',
                cases: 0,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42029,
        county: 'Chester',
        cases: 17,
        status: 1,
        dateOfFirstCase: '2020-03-12',
        dateOfDisasterDeclaration: '2020-03-13',
        dailyOverview: [
            {
                date: '2020-03-11',
                cases: 0,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 2,
            },
            {
                date: '2020-03-14',
                cases: 2,
            },
            {
                date: '2020-03-15',
                cases: 2,
            },
            {
                date: '2020-03-16',
                cases: 2,
            },
            {
                date: '2020-03-17',
                cases: 4,
            },
            {
                date: '2020-03-18',
                cases: 9,
            },
            {
                date: '2020-03-19',
                cases: 10,
            },
            {
                date: '2020-03-20',
                cases: 17,
            },
        ]
    },
    {
        id: 42041,
        county: 'Cumberland',
        cases: 11,
        status: 0,
        dateOfFirstCase: '2020-03-13',
        dateOfDisasterDeclaration: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-12',
                cases: 0,
            },
            {
                date: '2020-03-13',
                cases: 3,
            },
            {
                date: '2020-03-14',
                cases: 3,
            },
            {
                date: '2020-03-15',
                cases: 5,
            },
            {
                date: '2020-03-16',
                cases: 5,
            },
            {
                date: '2020-03-17',
                cases: 10,
            },
            {
                date: '2020-03-18',
                cases: 10,
            },
            {
                date: '2020-03-19',
                cases: 11,
            },
            {
                date: '2020-03-20',
                cases: 11,
            },
        ]
    },
    {
        id: 42045,
        county: 'Delaware',
        cases: 23,
        status: 1,
        dateOfFirstCase: '2020-03-06',
        dateOfDisasterDeclaration: '2020-03-14',
        dailyOverview: [
            {
                date: '2020-03-05',
                cases: 0,
            },
            {
                date: '2020-03-06',
                cases: 1,
            },
            {
                date: '2020-03-07',
                cases: 1,
            },
            {
                date: '2020-03-08',
                cases: 1,
            },
            {
                date: '2020-03-09',
                cases: 1,
            },
            {
                date: '2020-03-10',
                cases: 1,
            },
            {
                date: '2020-03-11',
                cases: 1,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 6,
            },
            {
                date: '2020-03-14',
                cases: 6,
            },
            {
                date: '2020-03-15',
                cases: 7,
            },
            {
                date: '2020-03-16',
                cases: 7,
            },
            {
                date: '2020-03-17',
                cases: 9,
            },
            {
                date: '2020-03-18',
                cases: 14,
            },
            {
                date: '2020-03-19',
                cases: 14,
            },
            {
                date: '2020-03-20',
                cases: 23,
            },
        ]
    },
    {
        id: 42049,
        county: 'Erie',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-19',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-18',
                cases: 0,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42055,
        county: 'Franklin',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-19',
                cases: 0,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42069,
        county: 'Lackawanna',
        cases: 4,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 2,
            },
            {
                date: '2020-03-20',
                cases: 4,
            },
        ]
    },
    {
        id: 42071,
        county: 'Lancaster',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-19',
                cases: 0,
            },
            {
                date: '2020-03-20',
                cases: 2,
            },
        ]
    },
    {
        id: 42075,
        county: 'Lebanon',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-19',
                cases: 0,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42077,
        county: 'Lehigh',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-15',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-14',
                cases: 0,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 2,
            },
        ]
    },
    {
        id: 42079,
        county: 'Luzerne',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-15',
        dateOfDisasterDeclaration: '2020-03-15',
        dailyOverview: [
            {
                date: '2020-03-14',
                cases: 0,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 2,
            },
        ]
    },
    {
        id: 42089,
        county: 'Monroe',
        cases: 19,
        status: 1,
        dateOfFirstCase: '2020-03-09',
        dateOfDisasterDeclaration: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-08',
                cases: 0,
            },
            {
                date: '2020-03-09',
                cases: 1,
            },
            {
                date: '2020-03-10',
                cases: 1,
            },
            {
                date: '2020-03-11',
                cases: 2,
            },
            {
                date: '2020-03-12',
                cases: 2,
            },
            {
                date: '2020-03-13',
                cases: 3,
            },
            {
                date: '2020-03-14',
                cases: 3,
            },
            {
                date: '2020-03-15',
                cases: 6,
            },
            {
                date: '2020-03-16',
                cases: 8,
            },
            {
                date: '2020-03-17',
                cases: 8,
            },
            {
                date: '2020-03-18',
                cases: 8,
            },
            {
                date: '2020-03-19',
                cases: 15,
            },
            {
                date: '2020-03-20',
                cases: 19,
            },
        ]
    },
    {
        id: 42091,
        county: 'Montgomery',
        cases: 59,
        status: 1,
        dateOfFirstCase: '2020-03-07',
        dateOfDisasterDeclaration: '2020-03-08',
        dailyOverview: [
            {
                date: '2020-03-06',
                cases: 0,
            },
            {
                date: '2020-03-07',
                cases: 2,
            },
            {
                date: '2020-03-08',
                cases: 4,
            },
            {
                date: '2020-03-09',
                cases: 7,
            },
            {
                date: '2020-03-10',
                cases: 8,
            },
            {
                date: '2020-03-11',
                cases: 9,
            },
            {
                date: '2020-03-12',
                cases: 13,
            },
            {
                date: '2020-03-13',
                cases: 18,
            },
            {
                date: '2020-03-14',
                cases: 20,
            },
            {
                date: '2020-03-15',
                cases: 24,
            },
            {
                date: '2020-03-16',
                cases: 30,
            },
            {
                date: '2020-03-17',
                cases: 32,
            },
            {
                date: '2020-03-18',
                cases: 42,
            },
            {
                date: '2020-03-19',
                cases: 47,
            },
            {
                date: '2020-03-20',
                cases: 59,
            },
        ]
    },
    {
        id: 42095,
        county: 'Northampton',
        cases: 10,
        status: 1,
        dateOfFirstCase: '2020-03-12',
        deaths: 1,
        dateOfFirstDeath: '2020-03-18',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-11',
                cases: 0,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 1,
            },
            {
                date: '2020-03-14',
                cases: 1,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 5,
            },
            {
                date: '2020-03-20',
                cases: 10,
            },
        ]
    },
    {
        id: 42101,
        county: 'Philadelphia',
        cases: 42,
        status: 1,
        dateOfFirstCase: '2020-03-10',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-09',
                cases: 0,
            },
            {
                date: '2020-03-10',
                cases: 1,
            },
            {
                date: '2020-03-11',
                cases: 1,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 3,
            },
            {
                date: '2020-03-14',
                cases: 4,
            },
            {
                date: '2020-03-15',
                cases: 6,
            },
            {
                date: '2020-03-16',
                cases: 8,
            },
            {
                date: '2020-03-17',
                cases: 10,
            },
            {
                date: '2020-03-18',
                cases: 17,
            },
            {
                date: '2020-03-19',
                cases: 33,
            },
            {
                date: '2020-03-20',
                cases: 42,
            },
        ]
    },
    {
        id: 42103,
        county: 'Pike',
        cases: 3,
        status: 0,
        dateOfFirstCase: '2020-03-12',
        dateOfDisasterDeclaration: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-11',
                cases: 0,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 1,
            },
            {
                date: '2020-03-14',
                cases: 1,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 2,
            },
            {
                date: '2020-03-19',
                cases: 3,
            },
            {
                date: '2020-03-20',
                cases: 3,
            },
        ]
    },
    {
        id: 42105,
        county: 'Potter',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-19',
                cases: 0,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42125,
        county: 'Washington',
        cases: 3,
        status: 0,
        dateOfFirstCase: '2020-03-13',
        dateOfDisasterDeclaration: '2020-03-17',
        dailyOverview: [
            {
                date: '2020-03-12',
                cases: 0,
            },
            {
                date: '2020-03-13',
                cases: 1,
            },
            {
                date: '2020-03-14',
                cases: 1,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 2,
            },
            {
                date: '2020-03-18',
                cases: 2,
            },
            {
                date: '2020-03-19',
                cases: 3,
            },
            {
                date: '2020-03-20',
                cases: 3,
            },
        ]
    },
    {
        id: 42127,
        county: 'Wayne',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-06',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-05',
                cases: 0,
            },
            {
                date: '2020-03-06',
                cases: 1,
            },
            {
                date: '2020-03-07',
                cases: 1,
            },
            {
                date: '2020-03-08',
                cases: 1,
            },
            {
                date: '2020-03-09',
                cases: 1,
            },
            {
                date: '2020-03-10',
                cases: 1,
            },
            {
                date: '2020-03-11',
                cases: 1,
            },
            {
                date: '2020-03-12',
                cases: 1,
            },
            {
                date: '2020-03-13',
                cases: 1,
            },
            {
                date: '2020-03-14',
                cases: 1,
            },
            {
                date: '2020-03-15',
                cases: 1,
            },
            {
                date: '2020-03-16',
                cases: 1,
            },
            {
                date: '2020-03-17',
                cases: 1,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
            {
                date: '2020-03-19',
                cases: 1,
            },
            {
                date: '2020-03-20',
                cases: 1,
            },
        ]
    },
    {
        id: 42129,
        county: 'Westmoreland',
        cases: 4,
        status: 1,
        dateOfFirstCase: '2020-03-19',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-18',
                cases: 0,
            },
            {
                date: '2020-03-19',
                cases: 2,
            },
            {
                date: '2020-03-20',
                cases: 4,
            },
        ]
    },
    {
        id: 42133,
        county: 'York',
        cases: 6,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dateOfDisasterDeclaration: '2020-03-16',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 2,
            },
            {
                date: '2020-03-19',
                cases: 2,
            },
            {
                date: '2020-03-20',
                cases: 6,
            },
        ]
    },
]
export default virusData

// Erie - 3/16/2020
// Warren - 3/17/2020
// York - 3/16/2020 - https://www.ydr.com/story/news/2020/03/16/york-county-commissioners-sign-emergency-disaster-declaration-monday/5057789002/
// Franklin - 3/17/2020
// Lawrence - 3/17/2020
