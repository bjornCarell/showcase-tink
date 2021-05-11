/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { baseUrl } from './assets/baseUrl';
import { getCategories } from './getCategories/getCategories';

dotenv.config();

export const app = express();
const distPath = path.join(__dirname, '..', 'client/build');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(distPath, 'index.html');
});

app.get('/categories', async (request, response) => {
  try {
    const categories = await getCategories(request.query.locale, baseUrl);
    response.json(categories);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
