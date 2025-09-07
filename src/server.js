import {createServer, Model} from "miragejs"
import {Response} from "miragejs";
import {sha512} from 'js-sha512';
import {createVans, createReviews} from "./serverData.js";


createServer({
    models: {
        vans: Model,
        users: Model,
        reviews: Model
    },


    seeds(server) {
        createReviews(server);
        createVans(server)

        // Users
        server.create("user", { id: "123", email: "b@b.com", password: sha512("p123"), name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = true
        this.timing = 250; // The amount of time that each request should take (ms)
        // Allow Firestore requests to go through
        this.passthrough('https://firestore.googleapis.com/**');

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({hostId: "123"})
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.where({id, hostId: "123"})
        })

        this.get('/host/reviews', (schema, request) => {
            return schema.reviews.where({hostId: "123"});
        })

        this.post('/login', (schema, request) => {
            let {email, password } = JSON.parse(request.requestBody);
            password = sha512(password);
            // Some rudimentary hashing to simulate actual hashing done on a server
            const foundUser = schema.users.findBy({email, password});

            if (!foundUser) {
                return new Response(401, {}, {message: "Username or password is incorrect."});
            }

            return {
                user: {email: foundUser.email},
                token: "Here's some tokens for the arcade machine."
            }
        })
    }
})