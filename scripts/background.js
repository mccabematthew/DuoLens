// Handles API calls & storage

const fetch = require('node-fetch');

/*
 *  Function: getUserWordBank
 *  -------------------
 *  Description: Get function for Duolingo API word bank 
 *               (pay attention to authorization token, how will we dynamically update for different users)
 *               WIP: Doesn't get target lang, wont even recognize more than 1 lang ("en")
 *  Parameters:
 *      username - Duolingo username
 *  Returns: Full json list of words
*/
async function getUserWordBank(username) {
    const url = `https://www.duolingo.com/users/show?517726119=${username}`; // User int = 517726119 (from inspecting HTTP reqs)

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjYzMDcyMDAwMDAsImlhdCI6MCwic3ViIjo1MTc3MjYxMTl9.MR_2rRRjRjNtmOTHuNDwkYtegIH9nDshHdeU7pXQ6vo',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching user data: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.language_data && data.learning_language) {
            const lang = data.learning_language;
            const words = data.language_data[lang]?.skills.flatMap(skill => skill.words) || [];

            console.log(`Words learned by ${username} in ${lang}:`, words);
            return words;
        } else {
            console.log("No word bank found for ${lang}.");
            return [];
        }
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
}

// Example usage
getUserWordBank("matt_mccabe26");

// async function getUserWordBank(username, targetLanguage) {
//   const url = `https://www.duolingo.com/users/show?517726119=${username}&fields=language_data,last_streak`; 

//   try {
//       const response = await fetch(url, {
//           method: 'GET',
//           headers: {
//               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjYzMDcyMDAwMDAsImlhdCI6MCwic3ViIjo1MTc3MjYxMTl9.MR_2rRRjRjNtmOTHuNDwkYtegIH9nDshHdeU7pXQ6vo',
//               'Content-Type': 'application/json'
//           }
//       });

//       if (!response.ok) {
//           throw new Error(`Error fetching user data: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Available languages:", Object.keys(data.language_data)); 

//       if (data.language_data && data.language_data[targetLanguage]) {
//           const words = data.language_data[targetLanguage]?.skills.flatMap(skill => skill.words) || [];
//           console.log(`Words learned by ${username} in ${targetLanguage}:`, words);
//           return words;
//       } else {
//           console.log(`No word bank found for ${targetLanguage}.`);
//           return [];
//       }
//   } catch (error) {
//       console.error("Failed to fetch user data:", error);
//   }
// }


// Example logic for getting saved user data to use prefered user difficulty weights
// chrome.storage.sync.get(['difficultyWeights'], function(data) {
//     const weights = data.difficultyWeights || { verbs: 1.5, nouns: 1.0, adjectives: 1.2 };
//     // Use the weights in your algorithm
//   });