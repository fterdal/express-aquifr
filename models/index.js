users = [
    {
        id: 1,
        username: 'finnterdal',
        email: 'finnsemail@domain.com',
    },
    {
        id: 2,
        username: 'branstark',
        email: 'branflakes@domain.com',
    },
    {
        id: 3,
        username: 'tyrionlannister',
        email: 'tyrian@domain.com',
    },
    {
        id: 4,
        username: 'daenerys',
        email: 'dragons4lyfe@domain.com',
    },
    {
        id: 5,
        username: 'podrick',
        email: 'tripodrickpayne@domain.com',
    },
];


offerings = [
    {
        id: 1,
        title: 'Red Wagon Creamery',
        url_title: '/redwagoncreamery',
        short_desc: 'Ice Cream company in small town Eugene',
        long_desc: 'Ice Cream company in small town Eugene. Ice Cream company in small town Eugene. Ice Cream company in small town Eugene. Ice Cream company in small town Eugene. Ice Cream company in small town Eugene',
        invest_increment: 100.0,
        milestones: {
            minimum: {
                goal: 10000,
                trigger: 'funds released from escrow'
            },
            maximum: {
                goal: 120000,
                trigger: 'offering closed'
            }
        },
        offering_document: `TODO: Define offering document in flexible JSON format`
    },
];


module.exports = {users, offerings};