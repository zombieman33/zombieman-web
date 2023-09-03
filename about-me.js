function copy(text) {
    textToCopy = text;
  
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        console.log('Async: Copying to clipboard was successful! ' + textToCopy);
      })
      .catch(function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }
  
  const minecraftUUID = '9c6e22dc-fc6a-46c5-84f5-1a7f62bd46bd';
  const nameElement = document.getElementById('name');
  const mcNameElement = document.getElementById('mc-name-instant');
  const skinElement = document.getElementById('skin');
  
  // Change name manually until I find a way to use the UUID to get the name.
  const minecraftName = "zombyman"
  
  function loadName() {
    nameElement.innerText = 'Loading...';
  
    let loadingDots = 0;
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 4;
      const loadingText = 'Loading' + '.'.repeat(loadingDots);
      nameElement.innerText = loadingText;
      mcNameElement.innerText = loadingText;
    }, 1000);
  
    setTimeout(() => {
      clearInterval(loadingInterval);
  
      // Create an image element
      const imageElement = document.createElement('img');
      imageElement.src = `https://mc-heads.net/head/${minecraftUUID}`;
      
      // Append the image element to the nameElement
      nameElement.innerText = minecraftName + "ㅤ";
      nameElement.appendChild(imageElement);
      nameElement.classList.add('clickable');
  
      // Add hover color change
      nameElement.addEventListener('mouseover', () => {
        nameElement.style.color = 'aqua';
        nameElement.style.cursor = 'pointer';
      });
  
      nameElement.addEventListener('mouseout', () => {
        nameElement.style.color = '';
      });
  
      nameElement.addEventListener('click', () => {
        const profileUrl = `https://namemc.com/profile/${minecraftUUID}`;
        window.open(profileUrl, '_blank');
      });
    }, 5000);
  
    setTimeout(() => {
      clearInterval(loadingInterval);
  
      mcNameElement.innerText = minecraftName + ".";
      mcNameElement.classList.add('clickable');
  
      // Add hover color change
      mcNameElement.addEventListener('mouseover', () => {
        mcNameElement.style.color = 'aqua';
        mcNameElement.style.cursor = 'pointer'; 
      });
  
      mcNameElement.addEventListener('mouseout', () => {
        mcNameElement.style.color = '';
      });
  
      mcNameElement.addEventListener('click', () => {
        const profileUrl = `https://namemc.com/profile/${minecraftUUID}`;
        window.open(profileUrl, '_blank');
      });
    }, 5000);
  }
  
  window.addEventListener('load', loadName);
  
  window.addEventListener('DOMContentLoaded', function () {
    function scrollToTop() {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 4);
        requestAnimationFrame(scrollToTop);
      }
    }
  
    function scrollToBottom() {
      const currentPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      if (currentPosition + windowHeight < documentHeight) {
        window.scrollTo(0, currentPosition + 4);
        requestAnimationFrame(scrollToBottom);
      }
    }
  
    scrollToBottom();
  
    setTimeout(function () {
      scrollToTop();
    }, 700);
  });
  
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  
  const currentDate = new Date();
  
  const lastUpdatedElement = document.getElementById('last-updated');
  
  lastUpdatedElement.innerText += formatDate(currentDate);


function openNewTab(url) {
    window.open(url, '_blank');
}

    document.querySelectorAll('.download-link').forEach(function(link) {
    link.addEventListener('click', function() {
        switch (link.classList[1]) {
        case 'link-smeltifyx':
            openNewTab('https://www.spigotmc.org/resources/smeltifyx.109772/');
            break;
        case 'link-welcome':
            openNewTab('https://www.spigotmc.org/resources/welcome-rewards-1-13-1-20x.109876/');
            break;
        
        case 'link-command':
            openNewTab('https://www.spigotmc.org/resources/command-spy-plus-1-13-1-20x.109909/');
            break;
        case 'link-chatutils':
            openNewTab('https://www.spigotmc.org/resources/chatutils-1-16-1-20x.110022/');
            break;
        case 'link-bannedblockplus':
            openNewTab('https://www.spigotmc.org/resources/bannedblockplus.111731/');
            break;
        case 'link-bedrockoffhand':
            openNewTab('https://www.spigotmc.org/resources/bedrockoffhand-1-16-1-20x.110512/');
            break;
        case 'link-nightvisionplus':
            openNewTab('https://www.spigotmc.org/resources/nightvisionplus-1-13-1-20x.110630/');
            break;
        case 'link-sudoforce':
            openNewTab('https://www.spigotmc.org/resources/sudoforce-1-13-1-20x.110504/');
            break;
        }
    });
});


const pElement = document.getElementById('plugin-toggle');
const pluginList = document.querySelector('.plugin-list');

pElement.addEventListener('click', () => {
    if (pluginList.style.display === 'none') {
        pluginList.style.display = 'block';
    } else {
        pluginList.style.display = 'none';
    }
});


const popularpElement = document.getElementById('popular-plugin-toggle');
const popularpluginList = document.querySelector('.popular-plugin-list');

popularpElement.addEventListener('click', () => {
    if (popularpluginList.style.display === 'none') {
        popularpluginList.style.display = 'block';
    } else {
        popularpluginList.style.display = 'none';
    }
});

const personalFavoritePElement = document.getElementById('personal-favorite-plugin-toggle');
const personalFavoritePluginList = document.querySelector('.personal-favorite-plugin-list');

personalFavoritePElement.addEventListener('click', () => {
    if (personalFavoritePluginList.style.display === 'none') {
        personalFavoritePluginList.style.display = 'block';
    } else {
        personalFavoritePluginList.style.display = 'none';
    }
});