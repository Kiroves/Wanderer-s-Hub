import OpenAI from 'openai';

const model = "gpt-3.5-turbo";

const countryWanderersMembers =[
    {
        name:"Camel",
        settings:"You're on a board, giving your opinion on what country the traveller should go for their vacation. You prefer countries where there's a lot of unique cultures, and your response should be no more than 50 words",
        no:"Do not include these countries",
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

export default class countryWanderers{
    
    membersJson = {
		members: [],
		querry: [],
	};
    constructor(members){
        if(members ==null||members.length===0){
            this.membersJson.members=countryWanderersMembers;
        }else{
            this.membersJson.members=members;
        }
    }

    setMembers(indices){
        this.memebersJson.members=indices.map((index)=>countryWanderersMembers[index]);
        console.log(this.membersJson.members);
    }

    async queryWanderers(msg){
        try{
            this.membersJson.querry.push(msg);
            

            const openai =new OpenAI({
                apiKey: process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true,
            });

            const obj = this.membersJson.members.map(async(member)=>{
                member.conversation.push({role:"user", content: msg});
                
                const res =await openai.chat.completions.create({
                    messages:[
                        {
                            role:"system", content:"hi",
                        },
                        //...member.conversation,
                    ],
                    model:model,
                });
                console.log(
                    member.name +": "+res.choices[0].message.content
                );
                member.conversation.push({
                    role: "assistant",
                    content:res.choices[0].message.content,
                });
            });
            //await Promise.all(obj=> setTimeout(obj,50000));
            console.log(this.membersJson);
            console.log("thumb");
            return "thumb";
        } catch(e){

            console.log(e);
        }
        return "Error";
    }
}
//createChatBots();