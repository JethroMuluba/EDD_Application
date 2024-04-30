import React from 'react'
import ContextGlobalProvider from '../models/ContextGlobal';

function Layout({ children }) {
  return (

    <ContextGlobalProvider>    
      <div className='flex flex-row '>
        {children}
      </div>
    </ContextGlobalProvider>

  )
}

// {
//   "id": 1,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/itfxcgufzq1gadts2wli.svg",
//   "category": "Dîme & Offr.",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 2,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555968/EDD_App/hhzwrjqzhtap7ixex2x6.svg",
//   "category": "Nourritures",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 3,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555967/EDD_App/uows5n5lncq2atr4e7es.svg",
//   "category": "Logements",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 4,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555967/EDD_App/hf5tvazbpd3n14s34mkr.svg",
//   "category": "Transports",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 5,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555967/EDD_App/qbohkr67l9dicwauywg1.svg",
//   "category": "Vêtements",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 6,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555967/EDD_App/iv45jfwxzd6u7i42lpqv.svg",
//   "category": "Éducations",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 7,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555967/EDD_App/smhbpcjrqdup1ziqsg7x.svg",
//   "category": "Dettes",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 8,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/oba7jmmklkygpvoyshbg.svg",
//   "category": "Loisir & Autres",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// },
// {
//   "id": 9,
//   "icone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/rwwsqk5j9svrxpeah3h7.svg",
//   "category": "Épargnes",
//   "montant": 50000,
//   "dates": "04-01-2024",
//   "heures": "08:45",
//   "editeIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg",
//   "limitIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg",
//   "deleteIcone": "https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"
// }

export default Layout;