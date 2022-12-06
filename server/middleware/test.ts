import type { IncomingMessage, ServerResponse } from "http";
import mysql from "mysql";

export default async (req: IncomingMessage, res: ServerResponse) => {
    //process.client && console.log(window)    
    process.server && console.dir('middleWare mysql')
    process.client && console.log('middleWare mysql')    
});
  