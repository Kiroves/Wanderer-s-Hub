import { CohereClient } from "cohere-ai";




export default class countryWanderers {
    countryWanderersMembers =[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries where there's a lot of unique cultures, and your response should be no more than 50 words.",
            no:"Do not include these countries.",
            type:"laidback and hippie like",
            conversation:[],
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
        try {
            this.membersJson.query.push(this.membersJson.members[0].settings+"Do not include these countries: "+noAllowed+". State the country name as your first word");

            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });

            
                const res = await cohere.generate({
                    prompt:this.membersJson.query[0],
                    maxTokens:150,
                });

                console.log(res);
            }catch(e){
                console.log(e);
            }
            
            console.log(this.membersJson);
            console.log("thumb");
            return "thumb";
        } catch (e) {
            console.log(e);
            return "Error";
        }
}
