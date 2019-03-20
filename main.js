const products = [
    {
        title: 'product1',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product2',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product4',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product5',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product6',
        description: 'product description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IRZ0zNGuL.jpg',
        size: '4" x 4"',
        weight: '4 lbs',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    }
];
domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = () => {
    let domString = '';
    products.forEach((item) => {
        domString += `<h2>${item.title}</h2>`
    });
    domPrinter('parts', domString);
}


init = () => {
    domStringBuilder();
};
init();