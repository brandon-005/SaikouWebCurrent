import { Router, Request, Response } from 'express';
import { Data, renderFile } from 'ejs';
import { join } from 'path';
// @ts-ignore
import playingNow from './models/playing';

function renderEjsFile(filename: string, data?: Data, options?: Data) {
    return renderFile(join(__dirname, '../assets/html', filename), data, { ...options });
}

const router = Router();

/* 
TITLE: Saikou Home Page
URL: https://saikou.dev/
*/
export const homepage = router.get('/', async (request: Request, response: Response) => {
    const mwtPlaying = await playingNow.findOne({ gameID: 62124643 });
    response.send(await renderEjsFile('home.ejs', { mwtPlaying: mwtPlaying?.playing }));
});

/* 
TITLE: Saikou About Page
URL: https://saikou.dev/about
*/
export const aboutpage = router.get('/about', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('about.ejs'));
});

/* 
TITLE: Saikou Privacy Policy
URL: https://saikou.dev/privacy-policy
*/
export const privacypage = router.get('/privacy-policy', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('privacy_policy.ejs'));
});

/* 
TITLE: Saikou Refund Policy
URL: https://saikou.dev/refund-policy
*/
export const refundpage = router.get('/refund-policy', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('refund_policy.ejs'));
});

/* 
TITLE: Saikou Terms Of Service
URL: https://saikou.dev/terms-of-service
*/
export const tospage = router.get('/terms-of-service', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('tos.ejs'));
});

/* 
TITLE: Saikou Refund Policy
URL: https://saikou.dev/refund-policy
*/
export const rulespage = router.get('/community-rules', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('rules.ejs'));
});


/* 
TITLE: Saikou Page Not Found
URL: N/A
*/
export const pageNotFound = router.get('*', async (request: Request, response: Response) => {
    response.send(await renderEjsFile('404.ejs'));
});
