/**
 * Cultural Guide — Australia.
 *
 * What outsiders miss: Australia is a small (population) wealthy country
 * with the world's most aggressive sun, the world's most venomous wildlife,
 * a national identity built around mateship and the underdog, and a real
 * sensitivity around Indigenous history that visitors should know.
 */

import type { CulturalGuide } from './types';

const AUSTRALIA: CulturalGuide = {
  countryCode: 'AU',
  countryName: 'Australia',
  intro:
    'Australia is informal, sun-drenched, and almost aggressively friendly — but those friendly Aussies have a sharp eye for pretension. Speak directly. Don\'t over-explain yourself. Tip is not required. Always respect the sun, the surf, and the wildlife — all three can kill you, and Australians have learned to take all three seriously.',
  sections: [
    {
      id: 'mateship',
      title: 'Mateship & social informality',
      emoji: '🤝',
      body:
        'Australia is one of the most informal societies on Earth. First names from the first meeting (including doctors and lawyers). "Mate" works as a friendly address for anyone. Tall poppy syndrome is real — being openly proud of your wealth, status or achievements gets eye-rolls. Self-deprecating humour is the path of least resistance. Don\'t try to impress; just be present.',
    },
    {
      id: 'tipping',
      title: 'Tipping & service',
      emoji: '💸',
      body:
        'Tipping is NOT expected — wait staff earn AU$25-30/hour minimum, and the price on the menu is what you pay (GST is already included). Many people round up or leave a small tip for great service at restaurants (10% is generous, not standard). Don\'t tip in cafés, bars, taxis, or hotels — staff don\'t expect it. Public-holiday surcharge (10-15%) is common at restaurants — look at the bottom of the menu.',
    },
    {
      id: 'sun',
      title: 'The sun will burn you',
      emoji: '☀️',
      body:
        'Australian UV is among the highest in the world. A 20-minute walk at noon in summer can leave you with a sunburn that lasts 3 days. Slip-Slop-Slap is the national mantra: slip on a shirt, slop on sunscreen, slap on a hat. Sunscreen SPF 50+ is everywhere — buy it, use it, reapply every 2 hours when outdoors. Don\'t skip this.',
    },
    {
      id: 'beach',
      title: 'Beach culture & rules',
      emoji: '🏖️',
      body:
        'Patrolled beaches have red-and-yellow lifeguard flags — swim between them. Outside the flags, no rescue. Don\'t turn your back on the ocean (rogue waves are real). October-May in tropical Queensland and NT = stinger season — swim only in netted enclosures. Take cash for beach takeaways, leave valuables at home, and don\'t put rubbish in the sand — Aussies actually call this out.',
    },
    {
      id: 'wildlife',
      title: 'Wildlife — the deadly truth',
      emoji: '🐍',
      body:
        'Australia has the world\'s most venomous snakes (taipan, brown snake), most venomous spider (funnel-web), most venomous octopus (blue-ringed), and crocodiles in the north. Most Australians never see any of these. Stay on marked paths in the bush. Don\'t put your hands in dark crevices or wood piles. Shake out boots before putting them on in rural areas. If bitten: stay still, call 000, photograph the snake from a safe distance if you can.',
    },
    {
      id: 'pubs',
      title: 'Pubs, drinking & "shouts"',
      emoji: '🍺',
      body:
        'Pubs are central social hubs. Order at the bar — staff don\'t come to your table. Rounds (called a "shout") are the norm in groups: one person buys the round, next person buys the next. Skip your turn and you\'ll be remembered. "My shout" = I\'m buying. Drinking ages: 18 — checked aggressively. RSA (Responsible Service of Alcohol) means staff WILL refuse service to anyone visibly intoxicated.',
    },
    {
      id: 'indigenous',
      title: 'Indigenous Australia — respect',
      emoji: '🪃',
      body:
        'Aboriginal and Torres Strait Islander peoples are the oldest continuous cultures on Earth (60,000+ years). Acknowledgement of Country is common at events and meetings — pause and listen. Uluru is sacred; don\'t climb it (the climb closed in 2019). Don\'t take photos of Indigenous people without asking. Don\'t buy "Aboriginal art" from non-Indigenous sources — look for the Indigenous Art Code mark. Listen more than you speak on Indigenous topics; many Australians are still learning too.',
    },
    {
      id: 'driving',
      title: 'Driving on the left & distances',
      emoji: '🚗',
      body:
        'Drive on the LEFT side of the road. Roundabouts everywhere — give way to the right (cars already in the roundabout). Speed cameras are frequent and unforgiving. "Just down the road" can mean 50km in regional Australia. Sydney-Melbourne is 9 hours driving. Sydney-Perth is 4 days. Take long-distance breaks — fatigue causes most rural crashes. Don\'t drive at dusk in the bush — kangaroos.',
    },
    {
      id: 'public-holidays',
      title: 'Public holidays — businesses close',
      emoji: '🇦🇺',
      body:
        'Major public holidays (Christmas Day, Good Friday, ANZAC Day morning, Australia Day): most shops, restaurants and attractions close or run reduced hours. ANZAC Day (25 April) is the most solemn — dawn services everywhere; respect the silence at 5am. Restaurants that open on public holidays add a 10-15% surcharge — listed on the menu.',
    },
    {
      id: 'health',
      title: 'Healthcare for visitors',
      emoji: '🏥',
      body:
        'Australia has reciprocal healthcare agreements with the UK, NZ, Ireland, Sweden, the Netherlands, Belgium, Finland, Italy, Malta, Norway, and Slovenia — citizens of those get partial Medicare cover. Everyone else: GET TRAVEL INSURANCE. An ambulance ride can cost $1000+ uninsured, an ICU day $2000+. Pharmacies (called "chemists") sell most basics over-the-counter without prescription.',
    },
  ],
};

export default AUSTRALIA;
