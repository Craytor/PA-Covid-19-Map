const virusData = [
    // status: 1 -> up
    // status: 0 -> holding
    {
        id: 42003,
        county: 'Allegheny',
        cases: 5,
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
        ]
    },
    {
        id: 42017,
        county: 'Bucks',
        cases: 5,
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
        ]
    },
    {
        id: 45023,
        county: 'Chester',
        cases: 2,
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
        ]
    },
    {
        id: 42041,
        county: 'Cumberland',
        cases: 5,
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
        ]
    },
    {
        id: 42045,
        county: 'Delaware',
        cases: 7,
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
        ]
    },
    {
        id: 42089,
        county: 'Monroe',
        cases: 8,
        status: 1,
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
        ]
    },
    {
        id: 42091,
        county: 'Montgomery',
        cases: 30,
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
        ]
    },
    {
        id: 42101,
        county: 'Philadelphia',
        cases: 8,
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
        ]
    },
    {
        id: 42103,
        county: 'Pike',
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
        ]
    },
    {
        id: 42125,
        county: 'Washington',
        cases: 1,
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
        ]
    }
]
export default virusData