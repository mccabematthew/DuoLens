// Provides users options for grade weights (changes the background.js weights)

// Skeletion code for saving settings WIP
// document.addEventListener('DOMContentLoaded', function() {
//     // Get existing settings when the page loads
//     chrome.storage.sync.get(['difficultyWeights'], function(data) {
//       if (data.difficultyWeights) {
//         // Populate settings UI with current values (if any)
//         document.getElementById('verbWeight').value = data.difficultyWeights.verbs || 1.5;
//         document.getElementById('nounWeight').value = data.difficultyWeights.nouns || 1.0;
//         document.getElementById('adjWeight').value = data.difficultyWeights.adjectives || 1.2;
//       }
//     });
  
//     // Save the settings when the user changes values
//     document.getElementById('saveBtn').addEventListener('click', function() {
//       const verbWeight = parseFloat(document.getElementById('verbWeight').value);
//       const nounWeight = parseFloat(document.getElementById('nounWeight').value);
//       const adjWeight = parseFloat(document.getElementById('adjWeight').value);
  
//       // Store the values using chrome.storage.sync
//       chrome.storage.sync.set({
//         difficultyWeights: {
//           verbs: verbWeight,
//           nouns: nounWeight,
//           adjectives: adjWeight
//         }
//       }, function() {
//         alert('Settings saved!');
//       });
//     });
//   });