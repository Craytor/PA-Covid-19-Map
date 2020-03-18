const virusData = [
    // status: 1 -> up
    // status: 0 -> holding
    {
        id: 42003,
        county: 'Allegheny',
        cases: 11,
        status: 1,
        dateOfFirstCase: '2020-03-14',
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
                date: '2020-03-17',
                cases: 11,
            },
        ]
    },
    {
        id: 42007,
        county: 'Beaver',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-17',
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
        ]
    },
    {
        id: 42011,
        county: 'Berks',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
        ]
    },
    {
        id: 42017,
        county: 'Bucks',
        cases: 9,
        status: 1,
        dateOfFirstCase: '2020-03-11',
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
        ]
    },
    {
        id: 45023,
        county: 'Chester',
        cases: 9,
        status: 1,
        dateOfFirstCase: '2020-03-12',
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
        ]
    },
    {
        id: 42041,
        county: 'Cumberland',
        cases: 10,
        status: 0,
        dateOfFirstCase: '2020-03-13',
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
        ]
    },
    {
        id: 42045,
        county: 'Delaware',
        cases: 14,
        status: 1,
        dateOfFirstCase: '2020-03-06',
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
        ]
    },
    {
        id: 42069,
        county: 'Lackawanna',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 1,
            },
        ]
    },
    {
        id: 42077,
        county: 'Lehigh',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-15',
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
        ]
    },
    {
        id: 42079,
        county: 'Luzerne',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-15',
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
        ]
    },
    {
        id: 42089,
        county: 'Monroe',
        cases: 8,
        status: 0,
        dateOfFirstCase: '2020-03-09',
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
        ]
    },
    {
        id: 42091,
        county: 'Montgomery',
        cases: 42,
        status: 1,
        dateOfFirstCase: '2020-03-07',
        dailyOverview: [
            {
                date: '2020-03-05',
                cases: 0,
            },
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
        ]
    },
    {
        id: 42095,
        county: 'Northampton',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-12',
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
        ]
    },
    {
        id: 42101,
        county: 'Philadelphia',
        cases: 17,
        status: 1,
        dateOfFirstCase: '2020-03-10',
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
        ]
    },
    {
        id: 42103,
        county: 'Pike',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-12',
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
        ]
    },
    {
        id: 42125,
        county: 'Washington',
        cases: 2,
        status: 0,
        dateOfFirstCase: '2020-03-13',
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
        ]
    },
    {
        id: 42127,
        county: 'Wayne',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-06',
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
        ]
    },
    {
        id: 42133,
        county: 'York',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dailyOverview: [
            {
                date: '2020-03-17',
                cases: 0,
            },
            {
                date: '2020-03-18',
                cases: 2,
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