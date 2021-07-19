import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

   if (request.method === 'POST') {
      const TOKEN = '050ae449d59b94e1cb73b014657781';
      const client = new SiteClient('TOKEN');

      const registroCriado = await client.items.create({
         itemType: '971708',
         ...request.body,
         /* title:
            imageUrl: */
      })

      response.json({
         dados: 'Algum dado qualquer',
         registroCriado: registroCriado,
      })
      return;

   }

}

