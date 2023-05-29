const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
  

const {ORGANIZATION, OPENAI_API_KEY} = process.env;

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
    organization: ORGANIZATION
});
(async () => {
    const openai = new OpenAIApi(configuration);


    // List of available models.
    // const { data } = await openai.listModels();
    // console.log(data);

    readline.question(`Ask me anything\n`, async (question) => {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", "name": "Selvesan", content: 'Given the following information about a patient'},
                {role: "system", "name": "Selvesan", content: 'Patient Species: Blue-and-yellow macaw (ararauna)'},
                {role: "system", "name": "Selvesan", content: 'DOB: 2015-01-27 (adult)'},
                {role: "system", "name": "Selvesan", content: 'Patient Sex: Male'},
                {role: "system", "name": "Selvesan", content: 'Note on Patient: Male'},
            ],
        })
        console.log(completion.data.choices);
        // const response = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     // model: "gpt-3.5-turbo",
        //     prompt: question,
        //     temperature: 0,
        //     max_tokens: 1024,
        //     top_p: 1,
        //     frequency_penalty: 0.5, // will not repeat similar sentenses often.
        //     presence_penalty: 0,
        // });
        // console.log(response);
        // console.log(response.data);
        readline.close();
    });
    
})()

