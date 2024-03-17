import { CohereClient } from "cohere-ai";



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default class countryWanderers {
    countryWanderersMembers =[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have warmer climates. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the second of day. Answer with this for mat (COUNTRY NAME)! (reason..)",
        },/*
        {
            name:"PolarBear",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries where there's a lot of unique cultures, and your response should be no more than 50 words",
            no:"Do not include these countries",
            type:"a history buff",
            conversation:[],
        },
        {
            name:"Monkey",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries where there's a lot of unique cultures, and your response should be no more than 50 words",
            no:"Do not include these countries",
            type:"energetic party animal",
            conversation:[],
        },
        {
            name:"Racoon",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries where there's a lot of unique cultures, and your response should be no more than 50 words",
            no:"Do not include these countries",
            type:"adreneline junky",
            conversation:[],
        },*/
    ];

    cohere = new CohereClient({
        token:process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
    });
    membersJson={
        members:[],
        query:[],
    }

    constructor(members) {
        this.membersJson.members=this.countryWanderersMembers;
    }


    async queryWanderers(noAllowed) {
        var res='';
        try {
            this.membersJson.query.push(this.membersJson.members[0].settings+"DO NOT CONSIDER THESE COUNTRIES: "+noAllowed.toString());

            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });

                res = await cohere.generate({
                    prompt:this.membersJson.query[0],
                    maxTokens:150,
                });
                
            }catch(e){
                console.log(e);
            }
            
            console.log(this.membersJson);
            console.log(res);
            return "thumb";
        } catch (e) {
            console.log(e);
            return "Error";
        }
}
