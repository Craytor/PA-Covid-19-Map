const virusData = [
    // status: 1 -> up
    // status: 0 -> holding
    {
        id: 42001,
        county: 'Adams',
        cases: 6,
        status: 0,
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
            {
                date: '2020-03-21',
                cases: 4,
            },
            {
                date: '2020-03-22',
                cases: 5,
            },
            {
                date: '2020-03-23',
                cases: 6,
            },
            {
                date: '2020-03-24',
                cases: 6,
            },
            {
                date: '2020-03-25',
                cases: 6,
            },
        ]
    },
    {
        id: 42003,
        county: 'Allegheny',
        cases: 88,
        status: 1,
        dateOfFirstCase: '2020-03-14',
        dateOfDisasterDeclaration: '2020-03-12',
        deaths: 2,
        dateOfFirstDeath: '2020-03-21',
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
            {
                date: '2020-03-21',
                cases: 31,
            },
            {
                date: '2020-03-22',
                cases: 40,
            },
            {
                date: '2020-03-23',
                cases: 48,
            },
            {
                date: '2020-03-24',
                cases: 58,
            },
            {
                date: '2020-03-25',
                cases: 88,
            },
        ]
    },
    {
        id: 42005,
        county: 'Armstrong',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42007,
        county: 'Beaver',
        cases: 7,
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
            {
                date: '2020-03-21',
                cases: 3,
            },
            {
                date: '2020-03-22',
                cases: 3,
            },
            {
                date: '2020-03-23',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 3,
            },
            {
                date: '2020-03-25',
                cases: 7,
            },
        ]
    },
    {
        id: 42011,
        county: 'Berks',
        cases: 20,
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
            {
                date: '2020-03-21',
                cases: 7,
            },
            {
                date: '2020-03-22',
                cases: 13,
            },
            {
                date: '2020-03-23',
                cases: 14,
            },
            {
                date: '2020-03-24',
                cases: 16,
            },
            {
                date: '2020-03-25',
                cases: 20,
            },
        ]
    },
    {
        id: 42015,
        county: 'Bradford',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42017,
        county: 'Bucks',
        cases: 86,
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
            {
                date: '2020-03-21',
                cases: 24,
            },
            {
                date: '2020-03-22',
                cases: 32,
            },
            {
                date: '2020-03-23',
                cases: 43,
            },
            {
                date: '2020-03-24',
                cases: 65,
            },
            {
                date: '2020-03-25',
                cases: 86,
            },
        ]
    },
    {
        id: 42019,
        county: 'Butler',
        cases: 12,
        status: 1,
        dateOfFirstCase: '2020-03-21',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-20',
                cases: 0,
            },
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 5,
            },
            {
                date: '2020-03-24',
                cases: 6,
            },
            {
                date: '2020-03-25',
                cases: 12,
            },
        ]
    },
    {
        id: 42021,
        county: 'Cambria',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-23',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-22',
                cases: 0,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42025,
        county: 'Carbon',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42027,
        county: 'Centre',
        cases: 8,
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
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 7,
            },
            {
                date: '2020-03-24',
                cases: 7,
            },
            {
                date: '2020-03-25',
                cases: 8,
            },
        ]
    },
    {
        id: 42029,
        county: 'Chester',
        cases: 84,
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
            {
                date: '2020-03-21',
                cases: 19,
            },
            {
                date: '2020-03-22',
                cases: 23,
            },
            {
                date: '2020-03-23',
                cases: 40,
            },
            {
                date: '2020-03-24',
                cases: 40,
            },
            {
                date: '2020-03-25',
                cases: 54,
            },
        ]
    },
    {
        id: 42033,
        county: 'Clearfield',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 2,
            },
        ]
    },
    {
        id: 42037,
        county: 'Columbia',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-22',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-21',
                cases: 0,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42041,
        county: 'Cumberland',
        cases: 13,
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
            {
                date: '2020-03-21',
                cases: 11,
            },
            {
                date: '2020-03-22',
                cases: 11,
            },
            {
                date: '2020-03-23',
                cases: 12,
            },
            {
                date: '2020-03-24',
                cases: 13,
            },
            {
                date: '2020-03-25',
                cases: 13,
            },
        ]
    },
    {
        id: 42043,
        county: 'Dauphin',
        cases: 10,
        status: 1,
        dateOfFirstCase: '2020-03-22',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-21',
                cases: 0,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 4,
            },
            {
                date: '2020-03-25',
                cases: 10,
            },
        ]
    },
    {
        id: 42045,
        county: 'Delaware',
        cases: 101,
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
            {
                date: '2020-03-21',
                cases: 33,
            },
            {
                date: '2020-03-22',
                cases: 43,
            },
            {
                date: '2020-03-23',
                cases: 54,
            },
            {
                date: '2020-03-24',
                cases: 84,
            },
            {
                date: '2020-03-25',
                cases: 101,
            },
        ]
    },
    {
        id: 42049,
        county: 'Erie',
        cases: 4,
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
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 2,
            },
            {
                date: '2020-03-23',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 4,
            },
            {
                date: '2020-03-25',
                cases: 4,
            },
        ]
    },
    {
        id: 42051,
        county: 'Fayette',
        cases: 4,
        status: 1,
        dateOfFirstCase: '2020-03-22',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-21',
                cases: 0,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 2,
            },
            {
                date: '2020-03-25',
                cases: 4,
            },
        ]
    },
    {
        id: 42055,
        county: 'Franklin',
        cases: 5,
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
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 3,
            },
            {
                date: '2020-03-25',
                cases: 5,
            },
        ]
    },
    {
        id: 42059,
        county: 'Greene',
        cases: 2,
        status: 1,
        dateOfFirstCase: '2020-03-25',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-24',
                cases: 0,
            },
            {
                date: '2020-03-25',
                cases: 2,
            },
        ]
    },
    {
        id: 42055,
        county: 'Juniata',
        cases: 1,
        status: 0,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42069,
        county: 'Lackawanna',
        cases: 18,
        status: 1,
        dateOfFirstCase: '2020-03-18',
        dateOfDisasterDeclaration: '2020-03-16',
        deaths: 2,
        dateOfFirstDeath: '2020-03-23',
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
            {
                date: '2020-03-21',
                cases: 5,
            },
            {
                date: '2020-03-22',
                cases: 6,
            },
            {
                date: '2020-03-23',
                cases: 7,
            },
            {
                date: '2020-03-24',
                cases: 15,
            },
            {
                date: '2020-03-25',
                cases: 18,
            },
        ]
    },
    {
        id: 42071,
        county: 'Lancaster',
        cases: 12,
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
            {
                date: '2020-03-21',
                cases: 4,
            },
            {
                date: '2020-03-22',
                cases: 6,
            },
            {
                date: '2020-03-23',
                cases: 6,
            },
            {
                date: '2020-03-24',
                cases: 10,
            },
            {
                date: '2020-03-25',
                cases: 12,
            },
        ]
    },
    {
        id: 42075,
        county: 'Lebanon',
        cases: 3,
        status: 0,
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
            {
                date: '2020-03-21',
                cases: 2,
            },
            {
                date: '2020-03-22',
                cases: 3,
            },
            {
                date: '2020-03-23',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 3,
            },
            {
                date: '2020-03-25',
                cases: 3,
            },
        ]
    },
    {
        id: 42077,
        county: 'Lehigh',
        cases: 38,
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
            {
                date: '2020-03-21',
                cases: 13,
            },
            {
                date: '2020-03-22',
                cases: 19,
            },
            {
                date: '2020-03-23',
                cases: 25,
            },
            {
                date: '2020-03-24',
                cases: 27,
            },
            {
                date: '2020-03-25',
                cases: 38,
            },
        ]
    },
    {
        id: 42079,
        county: 'Luzerne',
        cases: 27,
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
            {
                date: '2020-03-21',
                cases: 6,
            },
            {
                date: '2020-03-22',
                cases: 7,
            },
            {
                date: '2020-03-23',
                cases: 10,
            },
            {
                date: '2020-03-24',
                cases: 21,
            },
            {
                date: '2020-03-25',
                cases: 27,
            },
        ]
    },
    {
        id: 42081,
        county: 'Lycoming',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-25',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-24',
                cases: 0,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42085,
        county: 'Mercer',
        cases: 2,
        status: 0,
        dateOfFirstCase: '2020-03-22',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-21',
                cases: 0,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 2,
            },
            {
                date: '2020-03-25',
                cases: 2,
            },
        ]
    },
    {
        id: 42089,
        county: 'Monroe',
        cases: 51,
        status: 1,
        dateOfFirstCase: '2020-03-09',
        dateOfDisasterDeclaration: '2020-03-18',
        deaths: 1,
        dateOfFirstDeath: '2020-03-23',
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
            {
                date: '2020-03-21',
                cases: 25,
            },
            {
                date: '2020-03-22',
                cases: 31,
            },
            {
                date: '2020-03-23',
                cases: 43,
            },
            {
                date: '2020-03-24',
                cases: 45,
            },
            {
                date: '2020-03-25',
                cases: 51,
            },
        ]
    },
    {
        id: 42091,
        county: 'Montgomery',
        cases: 172,
        status: 1,
        dateOfFirstCase: '2020-03-07',
        dateOfDisasterDeclaration: '2020-03-08',
        deaths: 1,
        dateOfFirstDeath: '2020-03-23',
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
            {
                date: '2020-03-21',
                cases: 71,
            },
            {
                date: '2020-03-22',
                cases: 87,
            },
            {
                date: '2020-03-23',
                cases: 129,
            },
            {
                date: '2020-03-24',
                cases: 144,
            },
            {
                date: '2020-03-25',
                cases: 172,
            },
        ]
    },
    {
        id: 42093,
        county: 'Montour',
        cases: 4,
        status: 1,
        dateOfFirstCase: '2020-03-20',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-20',
                cases: 0,
            },
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 3,
            },
            {
                date: '2020-03-25',
                cases: 4,
            },
        ]
    },
    {
        id: 42095,
        county: 'Northampton',
        cases: 44,
        status: 1,
        dateOfFirstCase: '2020-03-12',
        deaths: 3,
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
            {
                date: '2020-03-21',
                cases: 17,
            },
            {
                date: '2020-03-22',
                cases: 21,
            },
            {
                date: '2020-03-23',
                cases: 23,
            },
            {
                date: '2020-03-24',
                cases: 33,
            },
            {
                date: '2020-03-25',
                cases: 44,
            },
        ]
    },
    {
        id: 42101,
        county: 'Philadelphia',
        cases: 257,
        status: 1,
        dateOfFirstCase: '2020-03-10',
        dateOfDisasterDeclaration: null,
        deaths: 1,
        dateOfFirstDeath: '2020-03-25',
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
            {
                date: '2020-03-21',
                cases: 69,
            },
            {
                date: '2020-03-22',
                cases: 91,
            },
            {
                date: '2020-03-22',
                cases: 128,
            },
            {
                date: '2020-03-24',
                cases: 177,
            },
            {
                date: '2020-03-25',
                cases: 257,
            },
        ]
    },
    {
        id: 42103,
        county: 'Pike',
        cases: 9,
        status: 1,
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
            {
                date: '2020-03-21',
                cases: 3,
            },
            {
                date: '2020-03-22',
                cases: 3,
            },
            {
                date: '2020-03-22',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 4,
            },
            {
                date: '2020-03-25',
                cases: 9,
            },
        ]
    },
    {
        id: 42105,
        county: 'Potter',
        cases: 1,
        status: 0,
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
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42107,
        county: 'Schuylkill',
        cases: 6,
        status: 1,
        dateOfFirstCase: '2020-03-22',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-21',
                cases: 0,
            },
            {
                date: '2020-03-22',
                cases: 1,
            },
            {
                date: '2020-03-23',
                cases: 1,
            },
            {
                date: '2020-03-24',
                cases: 5,
            },
            {
                date: '2020-03-25',
                cases: 6,
            },
        ]
    },
    {
        id: 42111,
        county: 'Somerset',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-24',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-23',
                cases: 0,
            },
            {
                date: '2020-03-24',
                cases: 1,
            },
            {
                date: '2020-03-25',
                cases: 2,
            },
        ]
    },
    {
        id: 42123,
        county: 'Warren',
        cases: 1,
        status: 1,
        dateOfFirstCase: '2020-03-25',
        dateOfDisasterDeclaration: null,
        dailyOverview: [
            {
                date: '2020-03-24',
                cases: 0,
            },
            {
                date: '2020-03-25',
                cases: 1,
            },
        ]
    },
    {
        id: 42125,
        county: 'Washington',
        cases: 10,
        status: 1,
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
            {
                date: '2020-03-21',
                cases: 5,
            },
            {
                date: '2020-03-22',
                cases: 7,
            },
            {
                date: '2020-03-23',
                cases: 7,
            },
            {
                date: '2020-03-24',
                cases: 9,
            },
            {
                date: '2020-03-25',
                cases: 10,
            },
        ]
    },
    {
        id: 42127,
        county: 'Wayne',
        cases: 4,
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
            {
                date: '2020-03-21',
                cases: 1,
            },
            {
                date: '2020-03-22',
                cases: 2,
            },
            {
                date: '2020-03-22',
                cases: 3,
            },
            {
                date: '2020-03-24',
                cases: 4,
            },
            {
                date: '2020-03-25',
                cases: 4,
            },
        ]
    },
    {
        id: 42129,
        county: 'Westmoreland',
        cases: 16,
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
            {
                date: '2020-03-21',
                cases: 4,
            },
            {
                date: '2020-03-22',
                cases: 4,
            },
            {
                date: '2020-03-23',
                cases: 6,
            },
            {
                date: '2020-03-24',
                cases: 11,
            },
            {
                date: '2020-03-25',
                cases: 16,
            },
        ]
    },
    {
        id: 42133,
        county: 'York',
        cases: 20,
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
            {
                date: '2020-03-21',
                cases: 9,
            },
            {
                date: '2020-03-22',
                cases: 9,
            },
            {
                date: '2020-03-22',
                cases: 10,
            },
            {
                date: '2020-03-24',
                cases: 18,
            },
            {
                date: '2020-03-25',
                cases: 20,
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
