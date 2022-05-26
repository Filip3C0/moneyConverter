const button = document.querySelector('button')




const currencySelect = document.querySelector('#select-current')

const convertMoney = async () => {
    const input = document.querySelector('#input-real').value
    const realValue = document.querySelector('#real-value')
    const currencyValue = document.querySelector('#currency-value')
    
    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data)

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(input)

    if (currencySelect.value === 'US$ Dolar Americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format((input / dolar).toFixed(2))
    }

    if (currencySelect.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format((input / euro).toFixed(2))
    }
     
    if(currencySelect.value === '₿ Bitcoin'){
        currencyValue.innerHTML =  ((input / bitcoin)/1000).toFixed(7)
    }

}

const changeCurrency = () => {
    const currencyName = document.querySelector('#currency-name')
    const imageCurrency = document.querySelector('#image-currency')


    if (currencySelect.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'Dolar Americano'
        imageCurrency.src = './assets/EUA.svg'
    }

    if (currencySelect.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        imageCurrency.src = './assets/euro.svg'
    }
    if(currencySelect.value === '₿ Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        imageCurrency.src = './assets/bitcoin.svg'
    }
    convertMoney()

}

currencySelect.addEventListener('change', changeCurrency)
button.addEventListener('click', convertMoney)