import OpenAI from 'openai';




export const openAIReponseController = async (req, res) => {


const openai = new OpenAI({apiKey:process.env.OPEN_AI_KEY});


const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
        {
            role: 'developer', 
            content: `You are the Digital Super Intelligence of the company Belgian Jewels. Answer any sales data questions based on the json data: \n
            which I actually converted from excel file using xlsx npm and giving you as a prompt. This is the JSON: ${req.jsonData}}\n
            Explanation of the design description (desc) is: for example: C-2211 18KW White Gold, Chain, Dwt :Ct, DQTY :, Mwt :.7 means \n
            product code is C-2211, metal is 18KW(18 Karat white gold), product type is Chain, DWT is diamond weight, DQTY is diamond \n
            quantity Mwt is metal weight. Another example is: D-6497 Palladium, Ladies Ring, Dwt :.21Ct, DQTY :9, Mwt :2.43	\n
            product code is D-6497, metal is palladium, category is ladies ring, diamond weight is 21 cents, diamond quantity: 9, metal weigh: 2.43gram \n
            also, Qty means quantitiy sold. -1 means return. Amt is the amount of Pakistani rupees the sale was for \n
            Answer in html text so that I can place your prmpot directly in html tags in innerText property of the response tag: \n
            and dont write backtick backtick backtick html in start and backtick backtick backtick at end of answer		`
        
        },

        {
            role: 'user',
            content: req.body.prompt
        }
    ]
});


const answer = completion.choices[0].message.content;
res.status(200).json({answer: answer});


}
