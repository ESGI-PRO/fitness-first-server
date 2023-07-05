
import { Response } from 'express';
import { json } from 'body-parser';
import RequestWithRawBody from '../interfaces-requests-responses/subscription/requestWithRawBody.interface';
 
function rawBodyMiddleware() {
  return json({
    verify: (request: RequestWithRawBody, response: Response, buffer: Buffer) => {
      if (request.url === '/subscription/webhook/stripe' && Buffer.isBuffer(buffer)) {
        console.log("[/webhook/stripe]-rawbefore", buffer)
        request.rawBody = Buffer.from(buffer);
        console.log("[/webhook/stripe]-rawafter", request.rawBody)
      }
      return true;
    },
  })
}
 
export default rawBodyMiddleware