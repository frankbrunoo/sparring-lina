const GoogleSpreadsheet = require ('google-spreadsheet')
const credentials = require('./credentials.json')

const docId = '1o0eSfiMSHNPy779DwDIl7Fqh3A5uY8OxVrZboukEGwc'
const doc = GoogleSpreadsheet(docId)
doc.useServiceAccountAuth(credentials, err => {
    console.log('err',err)
})