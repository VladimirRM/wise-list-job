const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io/api/v1'

class Api {
    constructor(baseUrl,endpoints){
       this.baseUrl=baseUrl,
       this.endpoints=endpoints
    }

     async generateRequest(endpoint,data){
            const {method,uri} =this.endpoints[endpoint]
            return(`${this.baseUrl} ${uri}`, {method,body:data})
    }
    async fetch(endpoint,data){

    }
}