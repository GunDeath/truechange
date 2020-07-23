const express = require('express');
const router = express.Router();
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');

const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InZybjBmcS0wMCIsInVzZXJfaWQiOiI3OTI4NjA0MTE1NiIsInNlY3JldCI6IjczM2Q1Y2ZjZjUwNjhiOWU2NTk2ZDFiOTAxYjhhOTVmZjhiYTdkNjcwMGJkYmQ0NDEwMjQzZDE4YzQxMTYxNGYifX0=';

const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);

//Get methods
router.get('/', (req, res)=>{
    res.render('index.html')
})

router.get('/call_us', (req, res)=>{
    res.render('call_us.html')
})

router.get('/rules', (req, res) => {
    res.render('rules.html')
})

router.get('/get_info', (req, res) => {
    const infoMoney = {
        his_pay    : req.body.he_pay,
        his_system : req.body.first_field,
        we_pay     : req.body.we_pay,
        us_system  : req.body.second_field
    };

    res.render('form_info.html', {infoMoney: infoMoney});
})

router.get('/letter', (req, res) => {
    const formValue = {
        his_pay        : req.body.he_pay,
        phone_number   : req.body.purse_number,
        my_pay         : req.body.we_must_pay,
        us_pay_system  : req.body.us_pay_system,
        him_pay_system : req.body.him_pay_system
    };

    res.render('elaboration_form.html' , {formValue: formValue})
})

//POST methods
router.post('/get_info', (req, res) => {
    const infoMoney = {
        his_pay    : req.body.he_pay,
        his_system : req.body.first_field,
        we_pay     : req.body.we_pay,
        us_system  : req.body.second_field
    };

    res.render('form_info.html', {infoMoney: infoMoney});
})


router.post('/letter', (req, res) => {
    const formValue = {
        order_id       : req.body.order_id,
        his_pay        : req.body.he_pay,
        phone_number   : req.body.purse_number,
        my_pay         : req.body.we_must_pay,
        us_pay_system  : req.body.us_pay_system,
        him_pay_system : req.body.him_pay_system
    };

    const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPy791vUQqmrPmYqtb9rccBDzPsSmE7hndA4GuuXDTLCJ4cSHrF4N8Bmy9HKV3FsGGB5fHPKBP482eB2TzTFYqB3vctdwA6WNnFMvcfNjMk';

    const params = {
        publicKey,
        amount: req.body.he_pay,
        billId: req.body.order_id,
        successUrl: '/'
    };

    const qiwi_link = qiwiApi.createPaymentForm(params);


    const output = `
        <p> Новый обмен ЯндексДеньги - QIWI </p>
        <h3>Детали обмена</h3>
        <ul>
            <li> Номер QIWI: ${req.body.qiwi_phone} </li>
            <li> Нам необходимо перевесети: ${req.body.we_must_pay} </li>
            <li> Нам должны перевести: ${req.body.he_pay} </li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'best.change.acc@gmail.com',
            pass: 'Support3006Admin2020',
        }
    });

    let mailOptions = {
        from: '"Admin BestChange" <best.change.acc@gmail.com>',
        to: "acc.for.best.change@gmail.com",
        subject: "Good trade",
        text: "Trade",
        html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index')
    });

    res.render('elaboration_form.html', {formValue: formValue, qiwi_link : qiwi_link});
})

module.exports = router;