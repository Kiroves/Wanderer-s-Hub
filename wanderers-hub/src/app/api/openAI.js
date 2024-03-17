import { CohereClient } from "cohere-ai";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default class countryWanderers {
    countryWanderersMembers =[
        {
            name:"Camel",
            settings:"Give me one country to travel to with a warm climate! only include the country name in your response and no other text. After a paragraph break give a 50 word reasoning,do not consider previous requests",
            type:"hippie",
        },
        {
            name:"PolarBear",
            settings:"Give me one country to travel to with a COLD climate! only include the country name in your response and no other text. After a paragraph break give a 50 word reasoning,do not consider previous requests",
            type:"a history buff",
        },
        {
            name:"Monkey",
            settings:"Give me one country known for its food and entertainment scene! only include the country name in your response and no other text. After a paragraph break give a 50 word reasoning,do not consider previous requests",
            type:"energetic party animal",
        },
        {
            name:"Racoon",
            settings:"Give me one country known for the adventureous outdoors! only include the country name in your response and no other text. After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"adreneline junky",
        },
    ];
    cityWanderersMembers=[
        {
            name:"Camel",
            settings:"Give me one city to travel to with lots of nature! only include the city name in your response and no other text.After a paragraph break give a 50 word reasoning, do not consider previous requests ",
            type:"hippe",
        },
        {
            name:"PolarBear",
            settings:"Give me one city to travel to with lot of tourist attractions! only include the city name in your response and no other text.After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"laidback tourist"
        },
        {
            name:"Monkey",
            settings:"Give me one city to travel to with cultural significance! only include the city name in your response and no other text.After a paragraph break give a 50 word reasoning, do not consider previous requests",
        },
        {
            name:"Racoon",
            settings:"Give me one city to travel to with a good nightlife! only include the city name in your response and no other text.After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"adreneline junky",
        },
    ];
    activitiesWanderersMembers=[
        {
            name:"Camel",
            settings:"Give me the one restaurant in the city! start your response off with only the name of the restaurant like '(NAME)!' and no text.After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"foodie",
        },
        {
            name:"PolarBear",
            settings:"Give me one stadium in the city! start your response off with only the name of the stadium like '(NAME)!' and no text.After a paragraph break give a 50 word reasoning, do not consider previous requests ",
            type:"enthusiatic tourist",
        },
        {
            name:"Monkey",
            settings:"Give me one popular tourist attraction in this city! start your response off with only the tourist attraction like '(NAME)!'and no text. After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"history buff ",
        },
        {
            name:"Racoon",
            settings:"Give me one popular club in the city! start your response with only the name of the club like '(NAME)!' and no text. After a paragraph break give a 50 word reasoning, do not consider previous requests",
            type:"adreneline junky ",
        },
    ];

    membersJson={
        members:[],
        query:[],
    }
    async getLatLngCity(city, country){
        res='';
        try{
            cohere=new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            res= await cohere.generate({
                prompt:'Only give the latitude longitude of using negative for west and south and positives for north and east'+city+', '+ country+' AND NO OTHER TEXT ONLY NUMBERS',
                maxTokens:150,
            })
            
        }catch(e){
            console.log(e);
        }
        return res;
    };
    async getLatLngCountry(country){
        res='';
        try{
            cohere=new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            res= await cohere.generate({
                prompt:'Only give the latitude longitude of '+country+' AND NO OTHER TEXT ONLY NUMBERS',
                maxTokens:150,
            })
            
        }catch(e){
            console.log(e);
        }
        return res;
    };
    async queryWanderers(noAllowed) {
        this.membersJson.members=this.countryWanderersMembers;
        var res='';
        var ans=[];
        var ret=[];
        try {
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            
            //const no = noAllowed.map(obj=>obj.value);
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+" DO NOT CONSIDER THESE COUNTRIES: "+ noAllowed.toString());
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
        var ret=[];
        this.membersJson.members=this.cityWanderersMembers;
        try{
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+' the country the city must be in is '+ country);
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
    async queryActivity(city,country){
        var res='';
        var ans=[];
        var ret=[];
        this.membersJson.members=this.activitiesWanderersMembers;
        try{
            const cohere= new CohereClient({
                token: process.env.NEXT_PUBLIC_REACT_APP_COHERE_API_KEY,
            });
            
            for(let i=0;i<4;i++){
                this.membersJson.query.push(this.membersJson.members[i].settings+ city+' '+country);
                console.log(this.membersJson.query[i]);
                res = await cohere.generate({
                    prompt:this.membersJson.query[i],
                    maxTokens:150,
                });
                ans.push(res.generations[0].text);
                console.log(ans[i]);
                /*ret.push(await cohere.generate({
                    prompt:'YOU ARE A '+ this.membersJson.members[i].type +'. Give me a reason to have/attend these things '+ ans[i]+ ' answer ',
                    maxTokens:300,
                }))
                console.log('asdasd'+ret.generate);*/
            }
        }catch(e){
            console.log(e);
        }
        return ret;
    };
}
