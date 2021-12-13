import app from './app'
import './database/database'

app.listen(process.env.PORT || 3000);
console.log("Server on port: ", process.env.PORT);
