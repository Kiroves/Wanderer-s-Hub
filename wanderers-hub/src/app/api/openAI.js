import { CohereClient } from "cohere-ai";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default class countryWanderers {
    countryWanderersMembers =[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have warmer climates. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this format (COUNTRY NAME)! (reason..)",
        },
        {
            name:"PolarBear",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have colder climates. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this format (COUNTRY NAME)! (reason..)",
            type:"a history buff",
        },
        {
            name:"Monkey",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have a lot of events/food/entertainment. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this format (COUNTRY NAME)! (reason..)",
            type:"energetic party animal",
        },
        {
            name:"Racoon",
            settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries that have lots of adreneline filled adventures. Answer as if answering this question: Where should I go for vacation? Try to generate a country randomized based on the milisecond of day. Answer with this format (COUNTRY NAME)! (reason..)",
            type:"adreneline junky",
        },
    ];
    cityWanderersMembers=[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what city in the country the traveller should go for their vacation. You prefer cities with lots of nature. Answer as if answering this question: Where should I go for vacation? Try to generate a city randomized based on the milisecond of day. Answer with this format (CITY NAME)! (reason..). The country is:",
        },
        {
            name:"PolarBear",
            settings:"You're on a board, giving your opinion on what city in the country the traveller should go for their vacation. You prefer cities with lots of tourists attractions. Answer as if answering this question: Where should I go for vacation? Try to generate a city randomized based on the milisecond of day. Answer with this format (CITY NAME)! (reason..). The country is:",
        },
        {
            name:"Monkey",
            settings:"You're on a board, giving your opinion on what city in the country the traveller should go for their vacation. You prefer cities that are the cultural centre of the country. Answer as if answering this question: Where should I go for vacation? Try to generate a city randomized based on the milisecond of day. Answer with this format (CITY NAME)! (reason..). The country is:",
        },
        {
            name:"Racoon",
            settings:"You're on a board, giving your opinion on what city in the country the traveller should go for their vacation. You prefer cities that known for their nightlife. Answer as if answering this question: Where should I go for vacation? Try to generate a city randomized based on the milisecond of day. Answer with this format (CITY NAME)! (reason..). The country is:",
            type:"adreneline junky",
        },
    ];
    activitiesWanderersMembers=[
        {
            name:"Camel",
            settings:"You're on a board, giving your opinion on what acitivies a traveller should do in a given city. Give what foods the traveller should eat. Answer with this format (activity)! (reason..). The city, country is:",
        },
        {
            name:"PolarBear",
            settings:"You're on a board, giving your opinion on what acitivies a traveller should do in a given city. Give what shows are in the area. Answer with this format (activity)! (reason..). The city, country is:",
        },
        {
            name:"Monkey",
            settings:"You're on a board, giving your opinion on what acitivies a traveller should do in a given city. Give what tourist attractions are in the area. Answer with this format (activity)! (reason..). The city, country is:",
        },
        {
            name:"Racoon",
            settings:"You're on a board, giving your opinion on what acitivies a traveller should do in a given city. Give what clubs are in the area. Answer with this format (activity)! (reason..). The city, country is:",
            type:"adreneline junky",
        },
    ];

    cohere = new CohereClient({
        token:process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
    });
    membersJson={
        members:[],
        query:[],
    }



    async queryWanderers(noAllowed) {
        this.membersJson.members=this.countryWanderersMembers;
        var res='';
        var ans=[];
        try {
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            
            //const no = noAllowed.map(obj=>obj.value);
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+"DO NOT CONSIDER THESE COUNTRIES: "+ noAllowed.toString());
                console.log(this.membersJson.query[i]);
                res = await cohere.generate({
                    prompt:this.membersJson.query[i],
                    maxTokens:150,
                });
                ans.push(res.generations[0].text);
                console.log(ans);
                
            }
            
            
        }catch(e){
            console.log(e);
        }
            console.log(this.membersJson);
        
        return ans;
    };
    async queryCity(country){
        var res='';
        var ans=[];
        this.membersJson.members=this.cityWanderersMembers;
        try{
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+ country);
                console.log(this.membersJson.query[i]);
                res = await cohere.generate({
                    prompt:this.membersJson.query[i],
                    maxTokens:150,
                });
                ans.push(res.generations[0].text);
                console.log(ans);
                
            }
        }catch(e){
            console.log(e);
        }
        return ans;
    };
    async queryCity(city,country){
        var res='';
        var ans=[];
        this.membersJson.members=this.activitiesWanderersMembers;
        try{
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+ city+country);
                console.log(this.membersJson.query[i]);
                res = await cohere.generate({
                    prompt:this.membersJson.query[i],
                    maxTokens:150,
                });
                ans.push(res.generations[0].text);
                console.log(ans);
                
            }
        }catch(e){
            console.log(e);
        }
        return ans;
    };
}
