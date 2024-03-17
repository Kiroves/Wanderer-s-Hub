import { CohereClient } from "cohere-ai";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default class countryWanderers {
    countryWanderersMembers =[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have warmer climates. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this for mat (COUNTRY NAME)! (reason..)",
        },
        {
            name:"PolarBear",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have colder climates. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this for mat (COUNTRY NAME)! (reason..)",
            type:"a history buff",
            conversation:[],
        },
        {
            name:"Monkey",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have a lot of events/food/entertainment. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this for mat (COUNTRY NAME)! (reason..)",
            type:"energetic party animal",
            conversation:[],
        },
        {
            name:"Racoon",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have lots of adreneline filled adventures. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this for mat (COUNTRY NAME)! (reason..)",
            type:"adreneline junky",
            conversation:[],
        },
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
        var no='';
        try {
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            
            const no = noAllowed.map(obj=>obj.value);
            console.log(no);
            for(let i=0;i<4;i++){
                
                this.membersJson.query.push(this.membersJson.members[i].settings+"DO NOT CONSIDER THESE COUNTRIES: "+ no.toString());
                console.log(this.membersJson.query[i]);
                res = await cohere.generate({
                    
                    prompt:this.membersJson.query[i],
                    maxTokens:150,
                });
                
                
            }
            
            
            }catch(e){
                console.log(e);
            }
            
            console.log(this.membersJson);
            
            return "thumb";
        } catch (e) {
            console.log(e);
            return "Error";
        }
}
