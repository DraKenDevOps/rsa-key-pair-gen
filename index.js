// const fs = require('fs')
// const { generateKeyPairSync } = require('crypto')
// const { formatDate } = require('./dateFormat')

// const inquirer = require('inquirer');


// const questions = [
//     {
//         type: 'input',
//         length: 'length',
//         message: "Length of keys : ",
//     },
// ];

// inquirer.prompt(questions).then(answers => {
//     console.log(`Key-length: ${answers.length}`);

//     const { privateKey, publicKey } = generateKeyPairSync('rsa', {
//         modulusLength: answers.length,
//         privateKeyEncoding: {
//             type: 'pcks1',
//             format: 'pem'
//         },
//         publicKeyEncoding: {
//             type: 'pcks1',
//             format: 'pem'
//         }
//     })

//     fs.writeFileSync(`${formatDate(new Date())}private.key`, privateKey)
//     fs.writeFileSync(`${formatDate(new Date())}public.key`, publicKey)
// });


const fs = require('fs')
const { generateKeyPairSync } = require('crypto')
const { formatDate } = require('./dateFormat')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Input Length of keys : `, len => {
    console.log(`Keys length: ${len}`);
    readline.close();

    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
        modulusLength: parseInt(`${len}`),
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    })

    fs.writeFileSync(`${formatDate(new Date())}-${len}-private.key`, privateKey)
    fs.writeFileSync(`${formatDate(new Date())}-${len}-public.key`, publicKey)
});