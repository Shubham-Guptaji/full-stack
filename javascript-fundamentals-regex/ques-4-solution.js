const datefn = (pattern, mydate) => {
    const resultpart = mydate.match(pattern);

    if(resultpart) {
        return {
            summary : 'match found',
            data : resultpart[0]
        }
    }
    return {
        summary : 'match not found',
        data : null
    }
}

const pattern = /^(\d{4}-\d{2}-\d{2})/;
const date = new Date();
const data =  date.toISOString();
const result = datefn(pattern, data);

console.log(result)