const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async()=>{
           await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const response = (await agent.get(`/rickandmorty/character/1`)).body
            expect(response).toHaveProperty("id")
            expect(response).toHaveProperty("name")
            expect(response).toHaveProperty("species")
            expect(response).toHaveProperty("gender")
            expect(response).toHaveProperty("status")
            expect(response).toHaveProperty("origin")
            expect(response).toHaveProperty("image")
        })
        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/rickandmorty/character/55564').expect(500)
        })
    })
    describe("GET /rickandmorty/login", ()=>{
        it("La informacion es correcta", async()=>{
            const response = (await agent.get("/rickandmorty/login/?email=ejemplo@gmail.com&password=password123")).body
            expect(response.access).toEqual(true);
        })
        it("La informacion es incorrecta", async()=>{
            const response = (await agent.get("/rickandmorty/login/?email=ejesdamplo@gmail.com&password=passw33ord123")).body
            expect(response.access).toEqual(false);
        })
    })
    describe("POST /rickandmorty/fav", ()=>{
        const char1 = {name:"jorge", id:"1"};
        const char2 = {name:"mati", id:"2"}
        it("devuelve elemento enviado por body", async()=>{
            const response = ((await agent.post("/rickymorty/fav")).setEncoding(char1)).body
            expect(response).toContainEqual(char1)
        })
        it("devuelve el previo y el actual", async()=>{
            const response = ((await agent.post("/rickymorty/fav")).setEncoding(char2)).body
            expect(response).toContainEqual(char1)
            expect(response).toContainEqual(char2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const char1 = {name:"jorge", id:"1"};
        const char2 = {name:"mati", id:"2"}
        it("devuelve el arreglo correspondiente si no se elimina un personaje", async()=>{
            const response = (await agent.delete("/rickymorty/fav/12345")).body;
            expect(response).toContainEqual(char1)
            expect(response).toContainEqual(char2)
        })
        it("elimina correctamente al personaje por el id", async()=>{
            const response = (await agent.delete("/rickymorty/fav/12345")).body;
            expect(response).toContainEqual(char1)
        })
    })
})