import { StateGraph } from "@langchain/langgraph";
import { agentState } from "./state.js";
import { router } from "./router.js";
import { chatAgent } from "../agents/chat.agent.js";
import { searchAgent } from "../agents/search.agent.js";
import { codingAgent } from "../agents/coding.agent.js";
import { pdfAgent } from "../agents/pdf.agent.js";
import { pptAgent } from "../agents/ppt.agent.js";
import { visionAgent } from "../agents/vision.agent.js";

const workflow = new StateGraph(agentState)

workflow.addNode("router", router)
workflow.addNode("chatAgent", chatAgent)
workflow.addNode("searchAgent", searchAgent)
workflow.addNode("codingAgent", codingAgent)
workflow.addNode("pdfAgent", pdfAgent)
workflow.addNode("pptAgent", pptAgent)
workflow.addNode("visionAgent", visionAgent)

workflow.addEdge("__start__", "router")
workflow.addConditionalEdges("router", (state)=>{
    switch(state.agent){
        case "chatAgent":
            return "chatAgent";
            case "searchAgent":
            return "searchAgent";
        case "codingAgent":
            return "codingAgent";   
        case "pdfAgent":
            return "pdfAgent";
        case "pptAgent":
            return "pptAgent";
        case "visionAgent":
            return "visionAgent";
        default:    
            return "chatAgent";
    }
}, {
    chatAgent: "chatAgent",
    searchAgent: "searchAgent",
    codingAgent: "codingAgent",
    pdfAgent: "pdfAgent",
    pptAgent: "pptAgent",
    visionAgent: "visionAgent"
})




workflow.addEdge("searchAgent", "chatAgent")
workflow.addEdge("chatAgent", "__end__")
workflow.addEdge("codingAgent", "__end__")
workflow.addEdge("pdfAgent", "__end__")
workflow.addEdge("pptAgent", "__end__")
workflow.addEdge("visionAgent", "__end__")